import { previewStyles } from '../components/preview-styles'
import { Quote } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { testimonials } from '../data/portfolio'
export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-27 max-[800px]:py-[78px] max-[600px]:py-16  bg-surface-tinted border-y border-y-border max-[600px]:[&_.section-heading_h2]:text-[31px]"
    >
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]">
        <SectionHeading number="06" label="Kind words" centered>
          Good work starts with <em>good people.</em>
        </SectionHeading>
        <p className="text-[9px] text-center text-text-soft mt-[-6px] max-[600px]:text-[8px] max-[600px]:max-w-65 max-[600px]:mx-auto">
          Illustrative testimonials · to be replaced with real recommendations
        </p>
        <div className="grid grid-cols-[repeat(3,_1fr)] gap-[23px] mt-[34px] max-[800px]:gap-3 max-[600px]:grid-cols-[1fr] max-[600px]:gap-[15px] max-[600px]:mt-[27px]">
          {testimonials.map((item) => (
            <figure
              className="bg-background border border-border rounded-[8px] p-7 flex flex-col [&_>_svg]:text-text-soft [&_>_svg]:mb-[18px] [&_blockquote]:text-[13px] [&_blockquote]:leading-[1.95] [&_blockquote]:text-text-strong [&_blockquote]:flex-1 [&_figcaption]:flex [&_figcaption]:items-center [&_figcaption]:gap-[10px] [&_figcaption]:mt-[25px] [&_strong]:block [&_strong]:text-[10px] [&_strong]:font-medium [&_figcaption_div_>_span]:block [&_figcaption_div_>_span]:text-[8px] [&_figcaption_div_>_span]:text-text-soft [&_figcaption_div_>_span]:mt-[3px] max-[1100px]:p-[22px] max-[800px]:p-[18px] max-[800px]:[&_blockquote]:text-[11px] max-[800px]:[&_figcaption]:gap-[7px] max-[800px]:[&_figcaption]:items-start max-[800px]:[&_figcaption_div_>_span]:text-[7px] max-[600px]:p-[26px] max-[600px]:[&_blockquote]:text-[13px] max-[600px]:[&_figcaption]:items-center max-[600px]:[&_figcaption]:gap-[10px] max-[600px]:[&_figcaption]:mt-[22px] max-[600px]:[&_strong]:text-[11px] max-[600px]:[&_figcaption_div_>_span]:text-[9px]"
              key={item.name}
              data-reveal
            >
              <Quote size={25} strokeWidth={1.3} aria-hidden="true" />
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span
                  className={` w-[35px] h-[35px] grid place-items-center rounded-full text-[10px] text-[#66705d] shrink-0 max-[800px]:w-[29px] max-[800px]:h-[29px] max-[800px]:text-[8px] max-[600px]:w-9 max-[600px]:h-9 max-[600px]:text-[10px] ${previewStyles[item.color]}`}
                >
                  {item.initials}
                </span>
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
