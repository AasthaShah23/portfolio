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
    <section id="projects" className="section-space projects-section">
      <div className="page-container">
        <div className="section-topline">
          <SectionHeading number="04" label="Selected work">
            Ideas, brought <em>to life.</em>
          </SectionHeading>
          <p className="section-aside" data-reveal>
            A few things I’ve built with curiosity,
            <br />
            care, and a healthy amount of coffee.
          </p>
        </div>
        <div className="project-filters" aria-label="Filter projects" data-reveal>
          {filters.map((item) => (
            <button
              type="button"
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === 'All work' && <span>06</span>}
            </button>
          ))}
        </div>
        <p className="sr-only" role="status">
          Showing {visible.length} projects
        </p>
        <div className="projects-grid">
          {visible.map((project) => (
            <Card key={project.id} className="project-card">
              <ProjectPreview project={project} />
              <div className="project-card-content">
                <div className="project-title-row">
                  <h3>{project.name}</h3>
                  <span>{project.category}</span>
                </div>
                <p>{project.description}</p>
                <div className="tag-list">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="case-study-button"
                      type="button"
                      aria-label={`View ${project.name} case study`}
                    >
                      View case study <ArrowUpRight size={17} />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="case-study-dialog">
                    <DialogHeader>
                      <p className="eyebrow">Sample case study</p>
                      <DialogTitle className="case-study-title">{project.name}</DialogTitle>
                      <DialogDescription>{project.description}</DialogDescription>
                    </DialogHeader>
                    <ProjectPreview project={project} />
                    <div className="case-study-copy">
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
                      <div className="tag-list">
                        {project.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <p className="demo-note">
                        Illustrative project. Real results and live links will be added later.
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </Card>
          ))}
        </div>
        <div className="projects-footnote">
          <span className="status-dot" />
          <span>Always exploring. Always building something new.</span>
        </div>
      </div>
    </section>
  )
}
