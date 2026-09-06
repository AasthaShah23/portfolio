import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { experiences } from '../data/portfolio'
export function ExperienceSection() {
  return (
    <section id="experience" className="section-space">
      <div className="page-container">
        <div className="section-topline">
          <SectionHeading number="03" label="The journey so far">
            Learning. Building.
            <br />
            <em>Making an impact.</em>
          </SectionHeading>
          <p data-reveal className="section-aside">
            Every team, every challenge, a new opportunity
            <br className="desktop-break" /> to get a little better at what I do.
          </p>
        </div>
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline-item" key={experience.company} data-reveal>
              <div className="timeline-date">
                <span>{experience.date}</span>
                {experience.current && (
                  <span className="current-badge">
                    <span className="status-dot" /> Currently here
                  </span>
                )}
              </div>
              <div className="timeline-marker">
                <span />
              </div>
              <div className="timeline-content">
                <p className="company-label">
                  {experience.company} <span> / {experience.type}</span>
                </p>
                <h3>
                  {experience.role}
                  {experience.specialty && <span> — {experience.specialty}</span>}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </h3>
                <p className="experience-description">{experience.description}</p>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {experience.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
