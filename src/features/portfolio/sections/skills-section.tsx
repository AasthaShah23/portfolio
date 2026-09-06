import { useState } from 'react'
import {
  Atom,
  Bot,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  MessagesSquare,
  Server,
  ArrowUpRight,
} from 'lucide-react'
import { SectionHeading } from '../components/section-heading'
import { skills, type SkillCategory } from '../data/portfolio'
const icons = {
  react: Atom,
  server: Server,
  code: Code2,
  bot: Bot,
  database: Database,
  cloud: Cloud,
  container: Container,
  git: GitBranch,
  messages: MessagesSquare,
}
const categories: SkillCategory[] = ['Development', 'Conversational AI', 'Cloud & tools']
export function SkillsSection() {
  const [active, setActive] = useState<SkillCategory | null>(null)
  return (
    <section id="skills" className="section-space skills-section">
      <div className="page-container skills-layout">
        <div>
          <SectionHeading number="02" label="My toolkit">
            The right tools.
            <br />
            <em>Thoughtful solutions.</em>
          </SectionHeading>
          <p data-reveal className="section-description">
            A connected toolkit for building fast, reliable products — and the conversations around
            them.
          </p>
          <div data-reveal className="skill-categories" aria-label="Highlight skills by specialty">
            {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                aria-pressed={active === category}
                className={active === category ? 'selected' : ''}
                onClick={() => setActive(active === category ? null : category)}
              >
                <span>0{index + 1}</span>
                {category}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
        </div>
        <div className="skills-grid" data-reveal>
          {skills.map((skill) => {
            const Icon = icons[skill.icon]
            return (
              <div
                key={skill.name}
                className={`skill-card ${active && skill.category !== active ? 'skill-muted' : ''}`}
              >
                <Icon size={28} strokeWidth={1.4} />
                <h3>{skill.name}</h3>
                <p>{skill.detail}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
