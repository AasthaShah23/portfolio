import { Award, GraduationCap, BookOpen } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { certificates, education } from '../data/portfolio'
export function EducationSection() {
  return (
    <section id="education" className="section-space education-section">
      <div className="page-container">
        <SectionHeading number="05" label="Never stop learning">
          A foundation.<em> And a forward mindset.</em>
        </SectionHeading>
        <div className="education-grid">
          <div data-reveal>
            <h3 className="column-label">
              <GraduationCap size={19} /> Education
            </h3>
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <div>
                  <h4>{item.title}</h4>
                  <span>{item.date}</span>
                </div>
                <p>{item.place}</p>
                <p className="education-detail">{item.detail}</p>
              </article>
            ))}
          </div>
          <div data-reveal>
            <h3 className="column-label">
              <Award size={19} /> Certifications
            </h3>
            {certificates.map((item) => (
              <article className="certificate-card" key={item.title}>
                <span className="certificate-icon">
                  <Award size={20} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.issuer}</p>
                </div>
              </article>
            ))}
            <p className="learning-note">
              <BookOpen size={14} /> The best part of this field? There’s always more to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
