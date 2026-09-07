import { useState } from 'react'
import { ArrowUpRight, Orbit, Pause, Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SectionHeading } from '../components/section-heading'
import { SkillsGalaxy } from '../components/skills-galaxy'
import { orbitColors } from '../data/orbit-colors'
import { skillGroups, type SkillGroup } from '../data/portfolio'

export function SkillsSection() {
  const [active, setActive] = useState<SkillGroup['id']>('frontend')
  const [highlighted, setHighlighted] = useState<string | undefined>()
  const [paused, setPaused] = useState(false)
  const groupIndex = skillGroups.findIndex((group) => group.id === active)
  const group = skillGroups[groupIndex]
  const select = (id: SkillGroup['id'], skill?: string) => {
    setActive(id)
    setHighlighted(skill)
  }

  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="border-y border-border bg-surface-soft py-16 text-foreground md:py-20 lg:py-27"
    >
      <div className="page-container mx-auto w-[calc(100%-40px)] max-w-[1160px] md:w-[calc(100%-64px)] xl:w-[calc(100%-96px)]">
        <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
          <SectionHeading number="02" label="The skills universe">
            A world of skills.
            <br />
            <em>Everything connected.</em>
          </SectionHeading>
          <p data-reveal className="mb-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Every skill has its orbit. Explore the technologies that come together in my work — from
            the interface to the infrastructure.
          </p>
        </div>
        <div
          className="overflow-hidden rounded-2xl border border-[var(--galaxy-border)] bg-[var(--galaxy-bg)] text-[var(--galaxy-foreground)] shadow-xl shadow-black/5"
          data-reveal
        >
          <div className="flex items-center justify-between gap-3 border-b border-[var(--galaxy-border)] px-5 py-4 sm:px-7">
            <span className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--galaxy-muted)]">
              <Orbit size={16} aria-hidden="true" /> My skill galaxy
            </span>
            <span className="text-[10px] text-[var(--galaxy-muted)]">
              7 orbits <span className="mx-2">·</span> 39 skills
            </span>
          </div>
          <div className="grid lg:grid-cols-[1fr_300px]">
            <div
              className="relative min-w-0"
              onFocusCapture={(event) => {
                if (event.target instanceof Element && event.target.closest('[data-planet]'))
                  setPaused(true)
              }}
            >
              <SkillsGalaxy active={active} paused={paused} onSelect={select} />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-4">
                <span className="text-[10px] text-[var(--galaxy-muted)]">
                  Select a planet or explore an orbit →
                </span>
                <button
                  type="button"
                  onClick={() => setPaused(!paused)}
                  aria-label={paused ? 'Play galaxy animation' : 'Pause galaxy animation'}
                  className="grid size-9 shrink-0 place-items-center rounded-full border border-[var(--galaxy-border)] bg-[var(--galaxy-surface)] text-[var(--galaxy-foreground)] hover:bg-[var(--galaxy-hover)] motion-reduce:hidden"
                >
                  {paused ? <Play size={13} /> : <Pause size={13} />}
                </button>
              </div>
            </div>
            <aside
              className="border-t border-[var(--galaxy-border)] bg-[var(--galaxy-sidebar)] p-5 sm:p-7 lg:border-l lg:border-t-0"
              aria-label="Explore skill groups"
            >
              <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--galaxy-muted)]">
                Choose an orbit
              </p>
              <div
                className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-1"
                aria-label="Skill categories"
              >
                {skillGroups.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active === item.id}
                    onClick={() => select(item.id)}
                    className={cn(
                      'flex min-h-10 items-center gap-2 rounded-md border border-transparent px-2.5 py-2 text-left text-[11px] transition-colors motion-reduce:transition-none',
                      active === item.id
                        ? 'border-[var(--galaxy-border)] bg-[var(--galaxy-hover)] text-[var(--galaxy-foreground)]'
                        : 'text-[var(--galaxy-muted)] hover:bg-[var(--galaxy-surface)] hover:text-[var(--galaxy-foreground)]',
                    )}
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ background: orbitColors[index] }}
                    />
                    {item.label}
                    <span className="ml-auto text-[9px] opacity-60">{item.items.length}</span>
                  </button>
                ))}
              </div>
              <div
                className="mt-6 border-t border-[var(--galaxy-border)] pt-6"
                aria-live="polite"
                aria-atomic="true"
              >
                <p className="text-[9px] uppercase tracking-[0.15em] text-[var(--galaxy-muted)]">
                  Orbit 0{groupIndex + 1}
                </p>
                <h3 className="mt-2 font-heading text-xl font-medium tracking-tight">
                  {group.label}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--galaxy-muted)]">
                  {group.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.label} skills`}>
                  {group.items.map((skill) => (
                    <li
                      key={skill.name}
                      className={cn(
                        'rounded-md border px-2.5 py-1.5 text-[11px] leading-relaxed',
                        highlighted === skill.name
                          ? 'border-[var(--galaxy-accent)] bg-[var(--galaxy-accent)]/15 text-[var(--galaxy-foreground)]'
                          : 'border-[var(--galaxy-border)] bg-[var(--galaxy-surface)] text-[var(--galaxy-foreground)]',
                      )}
                    >
                      {skill.name}
                      {skill.level && (
                        <span className="ml-1.5 text-[9px] text-[var(--galaxy-muted)]">
                          · {skill.level}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--galaxy-border)] px-5 py-4 text-[10px] text-[var(--galaxy-muted)] sm:px-7">
            <span>Different technologies. One connected perspective.</span>
            <a
              href="#projects"
              className="inline-flex items-center gap-1 text-[var(--galaxy-foreground)] hover:text-[var(--galaxy-foreground)]"
            >
              See them in action <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
