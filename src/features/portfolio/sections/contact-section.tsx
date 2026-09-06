import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Copy, Code2, BriefcaseBusiness, Mail, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SectionHeading } from '../components/section-heading'
import { profile } from '../data/portfolio'

type MessagePreview = { name: string; email: string; subject: string; message: string }
export function ContactSection() {
  const [preview, setPreview] = useState<MessagePreview | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const values = Object.fromEntries(
      ['name', 'email', 'subject', 'message'].map((key) => [
        key,
        String(data.get(key) ?? '').trim(),
      ]),
    ) as MessagePreview
    if (!values.name || !values.subject || !values.message) return
    setPreview(values)
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
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button type="button" onClick={copyEmail} aria-label="Copy email address">
                {copyStatus === 'Email copied' ? <Check size={15} /> : <Copy size={15} />}
              </button>
            </div>
            <div>
              <MapPin size={19} />
              <span>{profile.location} · Open to remote</span>
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
              { name: 'GitHub', icon: Code2 },
              { name: 'LinkedIn', icon: BriefcaseBusiness },
            ].map(({ name, icon: Icon }) => (
              <Dialog key={name}>
                <DialogTrigger asChild>
                  <button type="button" aria-label={`${name} profile`}>
                    <Icon size={18} />
                    <ArrowUpRight size={12} />
                  </button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{name} profile</DialogTitle>
                    <DialogDescription>
                      This is a sample portfolio. The real {name} profile will be connected when the
                      personal details are added.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
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
          <Button type="submit" size="lg" className="w-full justify-between text-[11px]">
            Preview message <ArrowUpRight aria-hidden="true" />
          </Button>
          <p className="form-note">Demo form — preview only. No message will be sent.</p>
        </form>
      </div>
      <Dialog
        open={preview !== null}
        onOpenChange={(open) => {
          if (!open) setPreview(null)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Your message preview</DialogTitle>
            <DialogDescription>
              Nothing has been sent. A contact destination will be connected with the real portfolio
              details.
            </DialogDescription>
          </DialogHeader>
          {preview && (
            <dl className="text-[12px] max-h-[55svh] overflow-auto [&_dt]:font-semibold [&_dt]:mt-[14px] [&_dd]:text-muted-foreground [&_dd]:whitespace-pre-wrap [&_dd]:[overflow-wrap:anywhere] [&_dd]:mt-[5px] max-[600px]:text-[12px]">
              <dt>From</dt>
              <dd>
                {preview.name} · {preview.email}
              </dd>
              <dt>Subject</dt>
              <dd>{preview.subject}</dd>
              <dt>Message</dt>
              <dd>{preview.message}</dd>
            </dl>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
