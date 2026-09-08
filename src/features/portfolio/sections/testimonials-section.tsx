import { Quote } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { testimonials } from '../data/portfolio'

const avatarStyles = {
  sage: 'bg-[#dce6d5]',
  lavender: 'bg-[#e4e2ec]',
  sand: 'bg-[#ebe5d9]',
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="border-y border-border bg-surface-tinted py-16 md:py-20 lg:py-27"
    >
      <div className="page-container mx-auto w-[calc(100%-40px)] max-w-[1160px] md:w-[calc(100%-64px)] xl:w-[calc(100%-96px)]">
        <SectionHeading number="06" label="Kind words" centered>
          Good work starts with <em>good people.</em>
        </SectionHeading>
        <div className="mt-9 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              data-reveal
              className="flex flex-col rounded-lg border border-border bg-card p-7"
            >
              <Quote
                size={24}
                strokeWidth={1.4}
                aria-hidden="true"
                className="mb-5 text-text-soft"
              />
              <blockquote className="flex-1 text-[13px] leading-[1.95] text-text-strong">
                {item.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3">
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-full text-[10px] text-[#66705d] ${avatarStyles[item.tone]}`}
                  aria-hidden="true"
                >
                  {item.initials}
                </span>
                <div>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-[11px] font-medium underline decoration-primary/30 underline-offset-4 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="block text-[11px] font-medium">{item.name}</span>
                  )}
                  <span className="mt-1 block text-[9px] leading-relaxed text-text-soft">
                    {item.role}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
