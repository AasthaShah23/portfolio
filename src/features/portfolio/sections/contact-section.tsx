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
    <section id="contact" className="section-space contact-section">
      <div className="page-container contact-grid">
        <div>
          <SectionHeading number="07" label="Let’s connect">
            Have something
            <br />
            <em>in mind?</em>
            <br />
            Let’s build it.
          </SectionHeading>
          <p className="contact-description" data-reveal>
            A new idea, a role that feels like a fit, or just a good conversation. My inbox is open.
          </p>
          <div className="contact-details" data-reveal>
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
            <span role="status" className="copy-status">
              {copyStatus}
            </span>
          </div>
          <div className="social-links" data-reveal>
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
          <div className="contact-availability">
            <span className="status-dot" /> {profile.availability}
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} data-reveal>
          <h3>
            Say hello <span>↗</span>
          </h3>
          <p>Great things often start with a simple hello.</p>
          <div className="form-row">
            <div className="form-field">
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
            <div className="form-field">
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
          <div className="form-field">
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
          <div className="form-field">
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
          <Button type="submit" size="lg" className="send-button">
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
            <dl className="message-preview">
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
