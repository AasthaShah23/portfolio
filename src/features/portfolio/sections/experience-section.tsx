import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { experiences } from '../data/portfolio'
export function ExperienceSection() {
  return (
    <section id="experience" className="py-27 max-[800px]:py-[78px] max-[600px]:py-16">
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]">
        <div className="flex justify-between gap-[30px] items-center mb-[30px] max-[600px]:block max-[600px]:mb-6">
          <SectionHeading number="03" label="The journey so far">
            Learning. Building.
            <br />
            <em>Making an impact.</em>
          </SectionHeading>
          <p
            data-reveal
            className="text-[14px] text-muted-foreground max-w-95 leading-[1.9] max-[800px]:text-[11px] max-[800px]:max-w-[225px] max-[600px]:text-[12px] max-[600px]:max-w-[350px]"
          >
            Every team, every challenge, a new opportunity
            <br className="max-[600px]:hidden" /> to get a little better at what I do.
          </p>
        </div>
        <div className="mt-11 max-[600px]:mt-7">
          {experiences.map((experience) => (
            <article
              className="grid grid-cols-[220px_50px_1fr] [&:last-child_.timeline-marker::after]:bottom-[50px] [&:first-child_.timeline-marker_>_span]:bg-status [&:last-child_.timeline-content]:mb-0 [&:last-child_.timeline-content]:pb-0 [&:last-child_.timeline-content]:border-0 max-[1100px]:grid-cols-[180px_40px_1fr] max-[800px]:grid-cols-[145px_35px_1fr] max-[600px]:grid-cols-[24px_1fr] max-[600px]:[&:last-child_.timeline-marker::after]:bottom-0"
              key={experience.company}
              data-reveal
            >
              <div className="pt-1 text-[11px] flex flex-col items-start gap-3 max-[800px]:text-[9px] max-[600px]:[grid-column:2] max-[600px]:[grid-row:auto] max-[600px]:flex-row max-[600px]:items-center max-[600px]:mb-3 max-[600px]:text-[9px] max-[600px]:gap-[10px]">
                <span>{experience.date}</span>
                {experience.current && (
                  <span className="inline-flex items-center gap-[6px] pt-1 pr-[9px] pb-1 pl-[9px] bg-surface-tinted text-text-strong rounded-[20px] text-[9px] max-[600px]:text-[8px] max-[600px]:pt-[3px] max-[600px]:pr-[7px] max-[600px]:pb-[3px] max-[600px]:pl-[7px]">
                    <span className="status-dot inline-block w-[6px] h-[6px] rounded-full bg-status shrink-0 shadow-[0_0_0_3px_#71955812]" />{' '}
                    Currently here
                  </span>
                )}
              </div>
              <div className="timeline-marker relative after:content-[''] after:absolute after:left-[7px] after:top-[13px] after:bottom-0 after:w-px after:bg-surface-tinted [&_>_span]:block [&_>_span]:w-[15px] [&_>_span]:h-[15px] [&_>_span]:bg-surface-tinted [&_>_span]:border-[4px] [&_>_span]:border-border [&_>_span]:shadow-[0_0_0_1px_#d3ddc9] [&_>_span]:rounded-full [&_>_span]:relative [&_>_span]:z-1 [&_>_span]:mt-1 max-[600px]:[grid-column:1] max-[600px]:[grid-row:span_2] max-[600px]:mt-[-35px]">
                <span />
              </div>
              <div className="timeline-content pb-[43px] mb-8 border-b border-b-border [&_h3]:text-[20px] [&_h3]:font-semibold [&_h3]:tracking-[-0.6px] [&_h3]:mt-2 [&_h3]:relative [&_h3]:pr-[25px] [&_h3_>_span]:text-[16px] [&_h3_>_span]:font-medium [&_h3_>_svg]:absolute [&_h3_>_svg]:right-0 [&_h3_>_svg]:top-[5px] [&_h3_>_svg]:text-text-soft [&_ul]:mt-[13px] [&_ul]:pl-[15px] [&_ul]:list-disc [&_ul]:text-[12px] [&_ul]:text-text-soft [&_ul]:leading-[1.9] [&_li]:pl-[3px] [&_li]:mt-[5px] max-[800px]:[&_h3]:text-[17px] max-[800px]:[&_h3_>_span]:text-[14px] max-[600px]:[grid-column:2] max-[600px]:pb-[30px] max-[600px]:mb-[27px] max-[600px]:[&_h3]:text-[17px] max-[600px]:[&_h3]:leading-[1.6] max-[600px]:[&_h3_>_span]:text-[13px] max-[600px]:[&_h3_>_span]:block max-[600px]:[&_ul]:text-[11px]">
                <p className="text-[11px] font-medium text-text-strong [&_>_span]:font-normal [&_>_span]:text-text-soft [&_>_span]:ml-[5px] [&_>_span]:text-[10px]">
                  {experience.company} <span> / {experience.type}</span>
                </p>
                <h3>
                  {experience.role}
                  {experience.specialty && <span> — {experience.specialty}</span>}
                  <ArrowUpRight size={20} aria-hidden="true" />
                </h3>
                <p className="text-[13px] mt-3 text-text-strong max-[600px]:text-[12px]">
                  {experience.description}
                </p>
                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="tag-list flex flex-wrap gap-[6px] mt-[17px] [&_>_span]:text-[8px] [&_>_span]:pt-1 [&_>_span]:pr-2 [&_>_span]:pb-1 [&_>_span]:pl-2 [&_>_span]:border [&_>_span]:border-border [&_>_span]:bg-surface-soft [&_>_span]:text-text-soft [&_>_span]:rounded-[4px] [&_>_span]:leading-[1.5]">
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
