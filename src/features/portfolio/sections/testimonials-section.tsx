import { Quote } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { testimonials } from '../data/portfolio'
export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space testimonials-section">
      <div className="page-container">
        <SectionHeading number="06" label="Kind words" centered>
          Good work starts with <em>good people.</em>
        </SectionHeading>
        <p className="sample-label">
          Illustrative testimonials · to be replaced with real recommendations
        </p>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <figure className="testimonial-card" key={item.name} data-reveal>
              <Quote size={25} strokeWidth={1.3} aria-hidden="true" />
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className={`testimonial-avatar preview-${item.color}`}>{item.initials}</span>
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
