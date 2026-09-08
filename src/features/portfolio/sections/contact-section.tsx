import { useState, type FormEvent } from 'react'
import {
  ArrowUpRight,
  Check,
  Copy,
  Code2,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { SectionHeading } from '../components/section-heading'
import { profile } from '../data/portfolio'

const WEB3FORMS_ENDPOINT = import.meta.env.VITE_WEB3FORMS_ENDPOINT
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

type SubmitStatus = 'idle' | 'sending' | 'success' | 'error'

export function ContactSection() {
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  const [copyStatus, setCopyStatus] = useState('')

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!WEB3FORMS_ENDPOINT || !WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus('error')
      setSubmitMessage(`The contact form is unavailable. Please email me at ${profile.email}.`)
      return
    }

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      ...Object.fromEntries(formData),
      access_key: WEB3FORMS_ACCESS_KEY,
      from_name: 'Aastha Shah Portfolio',
    }

    setSubmitStatus('sending')
    setSubmitMessage('Sending your message…')

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = (await response.json()) as { success?: boolean; message?: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to send your message.')
      }

      form.reset()
      setSubmitStatus('success')
      setSubmitMessage('Thank you — your message has been sent successfully.')
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : `Something went wrong. Please email me at ${profile.email}.`,
      )
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('Email copied')
    } catch {
      setCopyStatus(`Copy manually: ${profile.email}`)
    }
  }
  return (
    <section
      id="contact"
      className="py-27 max-[800px]:py-[78px] max-[600px]:py-16  [&_.section-heading_h2]:text-[54px] [&_.section-heading_h2]:tracking-[-2px] [&_.section-heading_h2]:leading-[1.18] max-[800px]:[&_.section-heading_h2]:text-[46px] max-[600px]:[&_.section-heading_h2]:text-[47px]"
    >
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]  grid grid-cols-[1fr_1fr] gap-[110px] items-start max-[1100px]:gap-[50px] max-[800px]:gap-[30px] max-[600px]:grid-cols-[1fr] max-[600px]:gap-[38px]">
        <div>
          <SectionHeading number="07" label="Let’s connect">
            Have something
            <br />
            <em>in mind?</em>
            <br />
            Let’s build it.
          </SectionHeading>
          <p
            className="text-[13px] text-text-soft max-w-[330px] mt-[22px] max-[600px]:text-[13px] max-[600px]:max-w-85"
            data-reveal
          >
            A new idea, a role that feels like a fit, or just a good conversation. My inbox is open.
          </p>
          <div
            className="grid gap-4 mt-[31px] [&_>_div]:flex [&_>_div]:items-center [&_>_div]:gap-[13px] [&_>_div]:text-[12px] [&_>_div_>_svg]:text-text-soft [&_>_div_>_button]:p-[5px] [&_>_div_>_button]:text-text-soft [&_>_div_>_span]:text-[10px] [&_>_div_>_span]:text-text-soft max-[600px]:mt-6 max-[600px]:[&_>_div]:text-[13px]"
            data-reveal
          >
            <div>
              <Mail size={19} />
              <a className="min-w-0 break-all" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button type="button" onClick={copyEmail} aria-label="Copy email address">
                {copyStatus === 'Email copied' ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
            <div>
              <Phone size={19} />
              <a href={'tel:' + profile.phone.replaceAll(' ', '')}>{profile.phone}</a>
            </div>
            <div>
              <MapPin size={19} />
              <span>{profile.location}</span>
            </div>
            <span role="status" className="text-[10px] text-text-strong min-h-[15px]">
              {copyStatus}
            </span>
          </div>
          <div
            className="flex gap-[10px] mt-[5px] [&_button]:flex [&_button]:items-center [&_button]:gap-[10px] [&_button]:border [&_button]:border-border [&_button]:rounded-[5px] [&_button]:p-[10px] [&_button]:bg-surface-soft [&_button]:text-text-strong [&_button]:[transition:background_0.2s] [&_button:hover]:bg-surface-tinted"
            data-reveal
          >
            {[
              { name: 'GitHub', icon: Code2, url: profile.github },
              { name: 'LinkedIn', icon: BriefcaseBusiness, url: profile.linkedin },
            ].map(({ name, icon: Icon, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name + ' profile'}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface-soft p-3 text-text-strong hover:bg-surface-tinted"
              >
                <Icon size={18} aria-hidden="true" />
                <ArrowUpRight size={12} aria-hidden="true" />
              </a>
            ))}{' '}
          </div>
          <div className="flex items-center gap-2 text-[9px] text-text-soft mt-[25px] max-[800px]:text-[8px] max-[800px]:leading-[1.8] max-[600px]:text-[9px]">
            <span className="status-dot inline-block w-[6px] h-[6px] rounded-full bg-status shrink-0 shadow-[0_0_0_3px_#71955812]" />{' '}
            {profile.availability}
          </div>
        </div>
        <form
          className="border border-border bg-card rounded-[10px] p-8 shadow-[0_7px_22px_#293d2804] [&_>_h3]:text-[22px] [&_>_h3]:font-semibold [&_>_h3]:tracking-[-0.6px] [&_>_h3]:flex [&_>_h3]:justify-between [&_>_h3_>_span]:text-text-soft [&_>_p]:text-[11px] [&_>_p]:text-text-soft [&_>_p]:mt-2 [&_>_.form-note]:text-[8px] [&_>_.form-note]:text-center [&_>_.form-note]:mt-[13px] max-[1100px]:p-[25px] max-[800px]:p-[23px] max-[600px]:p-[25px] max-[600px]:[&_>_.form-note]:text-[9px]"
          onSubmit={submit}
          data-reveal
        >
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <h3>
            Say hello <span>↗</span>
          </h3>
          <p>Great things often start with a simple hello.</p>
          <div className="grid grid-cols-[1fr_1fr] gap-[14px] mt-[26px] max-[800px]:grid-cols-[1fr] max-[800px]:gap-0 max-[600px]:grid-cols-[1fr_1fr] max-[600px]:gap-3 max-[360px]:grid-cols-[1fr] max-[360px]:gap-0">
            <div className="mb-5 [&_label]:block [&_label]:text-[12px] [&_label]:mb-2 [&_label]:font-medium [&_input]:[font-family:inherit] [&_input]:text-[13px] [&_input]:bg-background [&_input]:border-border [&_input]:shadow-none [&_input]:rounded-[5px] [&_input]:min-h-[41px] [&_textarea]:[font-family:inherit] [&_textarea]:text-[13px] [&_textarea]:bg-background [&_textarea]:border-border [&_textarea]:shadow-none [&_textarea]:rounded-[5px] [&_textarea]:min-h-[130px] [&_input::placeholder]:text-text-soft [&_textarea::placeholder]:text-text-soft [&_textarea]:resize-y [&_textarea]:pt-3 max-[600px]:[&_label]:text-[10px] max-[600px]:[&_input]:text-[16px] max-[600px]:[&_textarea]:text-[16px]">
              <label htmlFor="contact-name">Your name</label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Alex Morgan"
                autoComplete="name"
                required
                maxLength={100}
                pattern=".*\S.*"
              />
            </div>
            <div className="mb-5 [&_label]:block [&_label]:text-[12px] [&_label]:mb-2 [&_label]:font-medium [&_input]:[font-family:inherit] [&_input]:text-[13px] [&_input]:bg-background [&_input]:border-border [&_input]:shadow-none [&_input]:rounded-[5px] [&_input]:min-h-[41px] [&_textarea]:[font-family:inherit] [&_textarea]:text-[13px] [&_textarea]:bg-background [&_textarea]:border-border [&_textarea]:shadow-none [&_textarea]:rounded-[5px] [&_textarea]:min-h-[130px] [&_input::placeholder]:text-text-soft [&_textarea::placeholder]:text-text-soft [&_textarea]:resize-y [&_textarea]:pt-3 max-[600px]:[&_label]:text-[10px] max-[600px]:[&_input]:text-[16px] max-[600px]:[&_textarea]:text-[16px]">
              <label htmlFor="contact-email">Email address</label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="alex@company.com"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>
          </div>
          <div className="mb-5 [&_label]:block [&_label]:text-[12px] [&_label]:mb-2 [&_label]:font-medium [&_input]:[font-family:inherit] [&_input]:text-[13px] [&_input]:bg-background [&_input]:border-border [&_input]:shadow-none [&_input]:rounded-[5px] [&_input]:min-h-[41px] [&_textarea]:[font-family:inherit] [&_textarea]:text-[13px] [&_textarea]:bg-background [&_textarea]:border-border [&_textarea]:shadow-none [&_textarea]:rounded-[5px] [&_textarea]:min-h-[130px] [&_input::placeholder]:text-text-soft [&_textarea::placeholder]:text-text-soft [&_textarea]:resize-y [&_textarea]:pt-3 max-[600px]:[&_label]:text-[10px] max-[600px]:[&_input]:text-[16px] max-[600px]:[&_textarea]:text-[16px]">
            <label htmlFor="contact-subject">What’s on your mind?</label>
            <Input
              id="contact-subject"
              name="subject"
              placeholder="A project, an opportunity, a hello…"
              required
              maxLength={200}
              pattern=".*\S.*"
            />
          </div>
          <div className="mb-5 [&_label]:block [&_label]:text-[12px] [&_label]:mb-2 [&_label]:font-medium [&_input]:[font-family:inherit] [&_input]:text-[13px] [&_input]:bg-background [&_input]:border-border [&_input]:shadow-none [&_input]:rounded-[5px] [&_input]:min-h-[41px] [&_textarea]:[font-family:inherit] [&_textarea]:text-[13px] [&_textarea]:bg-background [&_textarea]:border-border [&_textarea]:shadow-none [&_textarea]:rounded-[5px] [&_textarea]:min-h-[130px] [&_input::placeholder]:text-text-soft [&_textarea::placeholder]:text-text-soft [&_textarea]:resize-y [&_textarea]:pt-3 max-[600px]:[&_label]:text-[10px] max-[600px]:[&_input]:text-[16px] max-[600px]:[&_textarea]:text-[16px]">
            <label htmlFor="contact-message">Your message</label>
            <Textarea
              id="contact-message"
              name="message"
              placeholder="Tell me a little about what you’re thinking."
              rows={5}
              required
              maxLength={5000}
              onInput={(event) =>
                event.currentTarget.setCustomValidity(
                  event.currentTarget.value.trim() ? '' : 'Please enter a message.',
                )
              }
            />
          </div>
          <Button
            type="submit"
            size="lg"
            className="w-full justify-between text-[11px]"
            disabled={submitStatus === 'sending'}
          >
            {submitStatus === 'sending' ? 'Sending…' : 'Send message'}
            <ArrowUpRight aria-hidden="true" />
          </Button>
          <p
            role="status"
            aria-live="polite"
            className={`form-note min-h-3 ${
              submitStatus === 'success'
                ? 'text-status!'
                : submitStatus === 'error'
                  ? 'text-destructive!'
                  : ''
            }`}
          >
            {submitMessage || 'Your message will be sent securely to my inbox.'}
          </p>
        </form>
      </div>
    </section>
  )
}
