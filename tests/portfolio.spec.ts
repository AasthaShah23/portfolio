import { expect, test } from '@playwright/test'

test('page renders without errors, loads portrait, and fits the viewport', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('feel human')
  const portrait = page.getByAltText('AI-generated placeholder portrait of a professional woman')
  await expect(portrait).toBeVisible()
  await expect
    .poll(() => portrait.evaluate((image) => (image as HTMLImageElement).naturalWidth))
    .toBeGreaterThan(0)
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(
    true,
  )
  expect(errors).toEqual([])
})

test('projects filter and case studies support keyboard dismissal', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#projects')
  await expect(page.locator('.project-card')).toHaveCount(3)
  await page.getByRole('button', { name: 'Full stack', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(2)
  await page.getByRole('button', { name: 'View Invoice Flow case study' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Invoice Flow', exact: true })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toBeHidden()
  await expect(page.getByRole('button', { name: 'View Invoice Flow case study' })).toBeFocused()
  await page.getByRole('button', { name: 'Conversational AI', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(1)
  await page.getByRole('button', { name: 'All work' }).click()
  await expect(page.locator('.project-card')).toHaveCount(3)
})

test('contact validates and sends through Web3Forms', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#contact')
  let submission: Record<string, string> = {}
  await page.route('https://api.web3forms.com/submit', async (route) => {
    submission = route.request().postDataJSON() as Record<string, string>
    await route.fulfill({ status: 200, json: { success: true, message: 'Email sent' } })
  })
  await page.getByRole('button', { name: 'Send message' }).click()
  await page.getByLabel('Your name', { exact: true }).fill('Test Recruiter')
  await page.getByLabel('Email address', { exact: true }).fill('recruiter@example.com')
  await page.getByLabel('What’s on your mind?').fill('A full-stack opportunity')
  await page
    .getByLabel('Your message', { exact: true })
    .fill('I would love to discuss a role with you.')
  await page.getByRole('button', { name: 'Send message' }).click()
  await expect(page.locator('[data-slot="toast-root"]')).toContainText('sent successfully')
  expect(submission.name).toBe('Test Recruiter')
  expect(submission.email).toBe('recruiter@example.com')
  expect(submission.subject).toBe('A full-stack opportunity')
  expect(submission.message).toBe('I would love to discuss a role with you.')
  expect(submission.access_key).toBeTruthy()
})

test('contact shows Web3Forms errors in a toast', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.route('https://api.web3forms.com/submit', async (route) => {
    await route.fulfill({
      status: 429,
      json: { success: false, message: 'Please wait before trying again.' },
    })
  })
  await page.goto('/#contact')
  await page.getByLabel('Your name', { exact: true }).fill('Test Recruiter')
  await page.getByLabel('Email address', { exact: true }).fill('recruiter@example.com')
  await page.getByLabel('What’s on your mind?').fill('A full-stack opportunity')
  await page.getByLabel('Your message', { exact: true }).fill('Could we schedule an interview?')
  await page.getByRole('button', { name: 'Send message' }).click()

  const toast = page.locator('[data-slot="toast-root"]')
  await expect(toast).toContainText('Message not sent')
  await expect(toast).toContainText('Please wait before trying again.')
  await expect(page.getByLabel('Your message', { exact: true })).toHaveValue(
    'Could we schedule an interview?',
  )
})

test('navigation and reduced-motion rendering work', async ({ page, isMobile }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  if (isMobile) {
    await page.getByRole('button', { name: 'Open navigation' }).click()
    await page
      .getByRole('navigation', { name: 'Mobile navigation' })
      .getByRole('link', { name: 'Experience' })
      .click()
    await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeHidden()
  } else {
    await page
      .getByRole('navigation', { name: 'Main navigation' })
      .getByRole('link', { name: 'Experience' })
      .click()
  }
  await expect(page).toHaveURL(/#experience$/)
  expect(
    await page.locator('#experience').evaluate((element) => element.getBoundingClientRect().top),
  ).toBeGreaterThanOrEqual(70)
  await expect(page.locator('#experience [data-reveal]').first()).toHaveCSS('opacity', '1')
  await page.goto('/about')
  await expect(page).toHaveURL(/\/#about$/)
})

test('resume is a downloadable PDF', async ({ page }) => {
  await page.goto('/')
  const download = page.waitForEvent('download')
  await page.getByRole('link', { name: 'Download résumé' }).click()
  expect((await download).suggestedFilename()).toBe('AasthaShah.pdf')
  const response = await page.request.get('/AasthaShah.pdf')
  expect(response.headers()['content-type']).toContain('application/pdf')
  expect((await response.body()).subarray(0, 4).toString()).toBe('%PDF')
})

test('layout remains contained when resizing across breakpoints', async ({ page, isMobile }) => {
  test.skip(isMobile, 'Desktop browser exercises live resizing')
  await page.goto('/')
  for (const width of [320, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
      .toBe(true)
  }
})

test('header toggles light and dark mode and remembers the choice', async ({ page }) => {
  await page.goto('/')
  const header = page.getByRole('banner')
  const darkToggle = header.getByRole('button', { name: 'Switch to dark mode' })
  await expect(darkToggle).toBeVisible()
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(250, 249, 245)')
  await darkToggle.focus()
  await page.keyboard.press('Enter')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'sage')
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(27, 36, 33)')
  await expect(header.getByRole('button', { name: 'Switch to light mode' })).toBeFocused()
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'sage')
  await header.getByRole('button', { name: 'Switch to light mode' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'ivory')
  await page.reload()
  await expect(darkToggle).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
})

test('retired blue preference falls back to light mode', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('portfolio-theme', 'blue'))
  await page.goto('/')
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'ivory')
  await expect(page.getByRole('button', { name: 'Switch to dark mode' })).toBeVisible()
})

test('real profile and contact links replace sample details', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Aastha Shah/)
  await expect(page.getByRole('link', { name: 'GitHub profile' })).toHaveAttribute(
    'href',
    'https://github.com/AasthaShah23',
  )
  await expect(page.getByRole('link', { name: 'LinkedIn profile' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/aasthashah24/',
  )
  await expect(page.getByRole('link', { name: 'shahaastha2403@gmail.com' })).toHaveAttribute(
    'href',
    'mailto:shahaastha2403@gmail.com',
  )
  await expect(page.locator('#experience')).toContainText('Seaflux')
  await expect(page.locator('#experience')).toContainText('DioneApps')
  await expect(page.locator('#education')).toContainText('8.28')
  await expect(page.locator('body')).not.toContainText('Ananya')
  await expect(page.locator('body')).not.toContainText('Sample credential')
})
