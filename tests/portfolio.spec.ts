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
  await expect(page.locator('.project-card')).toHaveCount(6)
  await page.getByRole('button', { name: 'Full stack', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(3)
  await page.getByRole('button', { name: 'View Gather case study' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Gather', exact: true })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toBeHidden()
  await expect(page.getByRole('button', { name: 'View Gather case study' })).toBeFocused()
  await page.getByRole('button', { name: 'Conversational AI', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(3)
  await page.getByRole('button', { name: 'All work' }).click()
  await expect(page.locator('.project-card')).toHaveCount(6)
})

test('contact validates and previews without sending a request', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/#contact')
  const outbound: string[] = []
  page.on('request', (request) => {
    if (request.method() === 'POST') outbound.push(request.url())
  })
  await page.getByRole('button', { name: 'Preview message' }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.getByLabel('Your name', { exact: true }).fill('Test Recruiter')
  await page.getByLabel('Email address', { exact: true }).fill('recruiter@example.com')
  await page.getByLabel('What’s on your mind?').fill('A full-stack opportunity')
  await page
    .getByLabel('Your message', { exact: true })
    .fill('I would love to discuss a role with you.')
  await page.getByRole('button', { name: 'Preview message' }).click()
  await expect(page.getByRole('dialog')).toContainText('Test Recruiter')
  await expect(page.getByRole('dialog')).toContainText('Nothing has been sent')
  expect(outbound).toEqual([])
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

test('sample resume is a downloadable PDF', async ({ page }) => {
  await page.goto('/')
  const download = page.waitForEvent('download')
  await page.getByRole('link', { name: 'Sample résumé' }).click()
  expect((await download).suggestedFilename()).toBe('sample-resume.pdf')
  const response = await page.request.get('/sample-resume.pdf')
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
