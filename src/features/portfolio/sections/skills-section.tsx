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
    <section
      id="skills"
      className="py-27 max-[800px]:py-[78px] max-[600px]:py-16  bg-surface-tinted border-y border-y-border"
    >
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]  grid grid-cols-[0.9fr_1.3fr] gap-[70px] items-center max-[1100px]:gap-[35px] max-[800px]:grid-cols-[1fr] max-[800px]:gap-[30px] max-[800px]:[&_.section-description]:max-w-125 max-[600px]:gap-[26px]">
        <div>
          <SectionHeading number="02" label="My toolkit">
            The right tools.
            <br />
            <em>Thoughtful solutions.</em>
          </SectionHeading>
          <p
            data-reveal
            className="section-description text-[14px] text-muted-foreground max-w-95 leading-[1.9]"
          >
            A connected toolkit for building fast, reliable products — and the conversations around
            them.
          </p>
          <div
            data-reveal
            className="mt-[30px] grid gap-2 max-w-[330px] [&_button]:text-left [&_button]:text-[11px] [&_button]:flex [&_button]:items-center [&_button]:gap-[15px] [&_button]:p-[15px] [&_button]:border [&_button]:border-border [&_button]:rounded-[5px] [&_button]:bg-surface-soft [&_button]:[transition:background_0.2s,
____color_0.2s] [&_button_>_span]:text-[9px] [&_button_>_span]:text-text-soft [&_button_>_svg]:ml-auto [&_button.selected]:bg-primary [&_button.selected]:text-primary-foreground [&_button.selected_>_span]:text-primary-foreground max-[800px]:flex max-[800px]:max-w-[none] max-[800px]:mt-[23px] max-[800px]:[&_button]:flex-1 max-[800px]:[&_button]:p-3 max-[800px]:[&_button]:text-[10px] max-[800px]:[&_button]:gap-2 max-[600px]:flex-col max-[600px]:gap-[7px] max-[600px]:[&_button]:p-[13px] max-[600px]:[&_button]:text-[11px] max-[600px]:[&_button]:gap-3"
            aria-label="Highlight skills by specialty"
          >
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
        <div className="grid grid-cols-[repeat(3,_1fr)] gap-3 max-[600px]:gap-[9px]" data-reveal>
          {skills.map((skill) => {
            const Icon = icons[skill.icon]
            return (
              <div
                key={skill.name}
                className={` bg-background border border-border rounded-[8px] text-center min-h-34 pt-[23px] pr-2 pb-[23px] pl-2 [transition:opacity_0.25s,
____transform_0.25s,
____box-shadow_0.25s] hover:[transform:translateY(-4px)] hover:shadow-[0_7px_18px_#25413309] [&_>_svg]:mt-auto [&_>_svg]:mr-auto [&_>_svg]:mb-3 [&_>_svg]:ml-auto [&_>_svg]:text-text-strong [&_h3]:text-[11px] [&_h3]:font-bold [&_p]:text-[8px] [&_p]:text-text-soft [&_p]:mt-[5px] max-[1100px]:min-h-[123px] max-[1100px]:pt-5 max-[1100px]:pr-[5px] max-[1100px]:pb-5 max-[1100px]:pl-[5px] max-[1100px]:[&_p]:text-[7px] max-[800px]:min-h-34 max-[800px]:py-[23px] max-[800px]:[&_h3]:text-[12px] max-[800px]:[&_p]:text-[9px] max-[600px]:min-h-[117px] max-[600px]:pt-[18px] max-[600px]:pr-1 max-[600px]:pb-[18px] max-[600px]:pl-1 max-[600px]:[&_>_svg]:w-6 max-[600px]:[&_>_svg]:h-6 max-[600px]:[&_h3]:text-[9px] max-[600px]:[&_p]:text-[7px] max-[600px]:[&_p]:leading-[1.5] max-[600px]:[&_p]:max-w-[90px] max-[600px]:[&_p]:mx-auto max-[360px]:[&_h3]:text-[8px] motion-reduce:hover:[transform:none] ${active && skill.category !== active ? ' opacity-[0.38]' : ''}`}
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
