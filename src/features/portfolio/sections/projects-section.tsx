import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Card } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SectionHeading } from '../components/section-heading'
import { ProjectPreview } from '../components/project-preview'
import { projects, type ProjectCategory } from '../data/portfolio'

const filters = ['All work', 'Full stack', 'Conversational AI'] as const
export function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectCategory | 'All work'>('All work')
  const visible = projects.filter((project) => filter === 'All work' || project.category === filter)
  return (
    <section
      id="projects"
      className="py-27 max-[800px]:py-[78px] max-[600px]:py-16  bg-surface-tinted border-y border-y-border"
    >
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]">
        <div className="flex justify-between gap-[30px] items-center mb-[30px] max-[600px]:block max-[600px]:mb-6">
          <SectionHeading number="04" label="Selected work">
            Ideas, brought <em>to life.</em>
          </SectionHeading>
          <p
            className="text-[14px] text-muted-foreground max-w-95 leading-[1.9] max-[800px]:text-[11px] max-[800px]:max-w-[225px] max-[600px]:text-[12px] max-[600px]:max-w-[350px]"
            data-reveal
          >
            A few things I’ve built with curiosity,
            <br />
            care, and a healthy amount of coffee.
          </p>
        </div>
        <div
          className="flex gap-[7px] mt-0 mr-0 mb-[29px] ml-0 [&_button]:text-[11px] [&_button]:pt-[9px] [&_button]:pr-[15px] [&_button]:pb-[9px] [&_button]:pl-[15px] [&_button]:rounded-[5px] [&_button]:border [&_button]:border-border [&_button]:flex [&_button]:items-center [&_button]:gap-[9px] [&_button]:bg-background [&_button]:[transition:background_0.2s] [&_button[aria-pressed='true']]:bg-primary [&_button[aria-pressed='true']]:text-primary-foreground [&_button[aria-pressed='true']]:border-primary [&_button_>_span]:text-[8px] [&_button_>_span]:opacity-[0.7] max-[600px]:gap-[6px] max-[600px]:mt-[22px] max-[600px]:flex-wrap max-[600px]:[&_button]:text-[10px] max-[600px]:[&_button]:pt-2 max-[600px]:[&_button]:pr-3 max-[600px]:[&_button]:pb-2 max-[600px]:[&_button]:pl-3 max-[360px]:[&_button]:pt-2 max-[360px]:[&_button]:pr-[9px] max-[360px]:[&_button]:pb-2 max-[360px]:[&_button]:pl-[9px]"
          aria-label="Filter projects"
          data-reveal
        >
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === 'All work' && <span>{projects.length.toString().padStart(2, '0')}</span>}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {visible.length} projects
        </p>
        <div className="grid grid-cols-[repeat(3,_1fr)] gap-6 max-[800px]:grid-cols-[repeat(2,_1fr)] max-[800px]:gap-5 max-[600px]:grid-cols-[1fr] max-[600px]:gap-[23px]">
          {visible.map((project) => (
            <Card
              key={project.id}
              className="project-card p-0 gap-0 rounded-[9px] overflow-hidden shadow-none [transition:transform_0.25s,
____box-shadow_0.25s] bg-card motion-safe:animate-card-enter hover:[transform:translateY(-5px)] hover:shadow-[0_14px_25px_#273a2a0a] [&_.tag-list]:mt-[17px] max-[600px]:[&_.tag-list_>_span]:text-[9px] motion-reduce:hover:[transform:none]"
            >
              <ProjectPreview project={project} />
              <div className="p-[23px] [&_>_p]:text-[13px] [&_>_p]:leading-[1.9] [&_>_p]:text-text-soft [&_>_p]:mt-[9px] [&_>_p]:min-h-[42px] max-[1100px]:p-[18px] max-[600px]:p-[22px] max-[600px]:[&_>_p]:text-[12px] max-[600px]:[&_>_p]:min-h-0">
                <div className="flex items-center justify-between gap-2 [&_h3]:text-[21px] [&_h3]:font-semibold [&_h3]:tracking-[-0.6px] [&_>_span]:text-[8px] [&_>_span]:text-text-soft max-[1100px]:items-start max-[1100px]:flex-col max-[1100px]:gap-[3px] max-[800px]:flex-row max-[800px]:items-center max-[600px]:[&_h3]:text-[23px] max-[600px]:[&_>_span]:text-[9px]">
                  <h3>{project.name}</h3>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="tag-list flex flex-wrap gap-[6px] mt-[17px] [&_>_span]:text-[8px] [&_>_span]:pt-1 [&_>_span]:pr-2 [&_>_span]:pb-1 [&_>_span]:pl-2 [&_>_span]:border [&_>_span]:border-border [&_>_span]:bg-surface-soft [&_>_span]:text-text-soft [&_>_span]:rounded-[4px] [&_>_span]:leading-[1.5]">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="flex w-full justify-between items-center text-[10px] font-medium border-t border-t-border pt-[17px] mt-[19px] hover:text-text-strong max-[600px]:text-[11px]"
                      type="button"
                      aria-label={`View ${project.name} case study`}
                    >
                      View case study <ArrowUpRight size={17} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90svh] overflow-y-auto overscroll-contain [&_.project-preview]:h-[230px] [&_.project-preview]:rounded-[6px] [&_.project-preview]:shrink-0 max-[600px]:p-[22px]">
                    <DialogHeader>
                      <p className="eyebrow flex items-center gap-3 uppercase tracking-[2px] text-[10px] font-semibold text-text-strong [&_>_span]:text-text-soft [&_>_span]:text-[9px] [&_>_span]:tracking-[0] [&_>_span]:border [&_>_span]:border-border [&_>_span]:pt-[2px] [&_>_span]:pr-[5px] [&_>_span]:pb-[2px] [&_>_span]:pl-[5px] [&_>_span]:leading-[1.3] [&_>_span]:rounded-[3px] max-[600px]:text-[9px] max-[600px]:tracking-[1.6px]">
                        Project overview
                      </p>
                      <DialogTitle className="font-heading text-[30px] tracking-[-1px] mt-[6px]">
                        {project.name}
                      </DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <ProjectPreview project={project} />
                    <div className="[&_h3]:text-[13px] [&_h3]:font-semibold [&_h3]:mt-[15px] [&_h3]:mb-[6px] [&_p]:text-[12px] [&_p]:text-muted-foreground [&_ul]:grid [&_ul]:gap-[7px] [&_ul]:text-[12px] [&_li]:flex [&_li]:items-center [&_li]:gap-[6px] [&_.demo-note]:text-[10px] [&_.demo-note]:mt-5">
                      <h3>The challenge</h3>
                      <p>{project.problem}</p>
                      <h3>The approach</h3>
                      <p>{project.solution}</p>
                      <h3>What’s inside</h3>
                      <ul>
                        {project.highlights.map((highlight) => (
                          <li key={highlight}>
                            <Check size={15} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                      <div className="tag-list flex flex-wrap gap-[6px] mt-[17px] [&_>_span]:text-[8px] [&_>_span]:pt-1 [&_>_span]:pr-2 [&_>_span]:pb-1 [&_>_span]:pl-2 [&_>_span]:border [&_>_span]:border-border [&_>_span]:bg-surface-soft [&_>_span]:text-text-soft [&_>_span]:rounded-[4px] [&_>_span]:leading-[1.5]">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <p className="demo-note">
                        Results are reported in my résumé. The visual is an interface illustration,
                        not a production screenshot.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-8 text-[10px] text-text-soft max-[600px]:text-[9px] max-[600px]:gap-[7px]">
          <span className="status-dot inline-block w-[6px] h-[6px] rounded-full bg-status shrink-0 shadow-[0_0_0_3px_#71955812]" />
          <span>Always exploring. Always building something new.</span>
        </div>
      </div>
    </section>
  )
}
