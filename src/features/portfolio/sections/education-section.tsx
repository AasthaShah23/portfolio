import { Award, GraduationCap, BookOpen } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { certificates, education } from '../data/portfolio'
export function EducationSection() {
  return (
    <section
      id="education"
      className="py-27 max-[800px]:py-[78px] max-[600px]:py-16 education-section"
    >
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]">
        <SectionHeading number="05" label="Never stop learning">
          A foundation.<em> And a forward mindset.</em>
        </SectionHeading>
        <div className="grid grid-cols-[1fr_1fr] gap-16 mt-9 max-[1100px]:gap-10 max-[600px]:grid-cols-[1fr] max-[600px]:gap-[33px] max-[600px]:mt-[30px]">
          <div data-reveal>
            <h3 className="flex items-center gap-[10px] text-[14px] font-semibold mb-5 [&_>_svg]:text-text-soft">
              <GraduationCap size={19} /> Education
            </h3>
            {education.map((item) => (
              <article
                className="pt-[23px] pr-0 pb-[23px] pl-0 border-t border-t-border [&_>_div]:flex [&_>_div]:gap-3 [&_>_div]:items-center [&_>_div]:justify-between [&_h4]:text-[12px] [&_h4]:font-semibold [&_>_div_>_span]:text-[9px] [&_>_div_>_span]:text-text-soft [&_>_div_>_span]:whitespace-nowrap [&_>_p]:text-[11px] [&_>_p]:text-text-soft [&_>_p]:mt-[6px] [&_.education-detail]:text-[11px] [&_.education-detail]:text-text-soft [&_.education-detail]:max-w-[370px] [&_.education-detail]:mt-[11px] max-[800px]:[&_>_div]:flex-col max-[800px]:[&_>_div]:items-start max-[800px]:[&_>_div]:gap-[6px] max-[600px]:[&_>_div]:flex-row max-[600px]:[&_>_div]:items-center max-[600px]:[&_h4]:text-[11px] max-[600px]:[&_.education-detail]:text-[12px]"
                key={item.title}
              >
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
            <h3 className="flex items-center gap-[10px] text-[14px] font-semibold mb-5 [&_>_svg]:text-text-soft">
              <Award size={19} /> Certifications
            </h3>
            {certificates.map((item) => (
              <article
                className="p-[17px] mb-[10px] border border-border rounded-[6px] flex gap-[13px] items-center bg-card [&_h4]:text-[11px] [&_h4]:font-semibold [&_p]:text-[9px] [&_p]:text-text-soft [&_p]:mt-[3px] max-[600px]:p-4 max-[600px]:[&_h4]:text-[11px] max-[600px]:[&_p]:text-[9px]"
                key={item.title}
              >
                <span className="grid place-items-center w-[35px] h-[35px] bg-surface-tinted rounded-[6px] text-text-soft">
                  <Award size={20} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.issuer}</p>
                </div>
              </article>
            ))}
            <p className="text-[9px] text-text-soft flex items-center gap-2 mt-[19px]">
              <BookOpen size={14} /> The best part of this field? There’s always more to learn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
