import { orbitColors } from '../data/orbit-colors'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { skillGroups, type SkillGroup } from '../data/portfolio'

const radii = [188, 151, 78, 114, 225, 262, 300]
const planets = skillGroups.flatMap((group, groupIndex) =>
  group.items.map((skill, index) => ({
    ...skill,
    group: group.id,
    groupIndex,
    radius: radii[groupIndex],
    angle: (index / group.items.length) * Math.PI * 2 + groupIndex * 0.62,
  })),
)

export function SkillsGalaxy({
  active,
  paused,
  onSelect,
}: {
  active: SkillGroup['id']
  paused: boolean
  onSelect: (id: SkillGroup['id'], skill?: string) => void
}) {
  const container = useRef<SVGSVGElement>(null)
  const motion = useRef<gsap.core.Tween | null>(null)
  useGSAP(
    () => {
      const media = gsap.matchMedia()
      media.add('(prefers-reduced-motion: no-preference)', () => {
        const nodes = container.current?.querySelectorAll<SVGGElement>('[data-planet]')
        const clock = { progress: 0 }
        motion.current = gsap.to(clock, {
          progress: Math.PI * 2,
          duration: 240,
          repeat: -1,
          ease: 'none',
          paused,
          onUpdate: () =>
            nodes?.forEach((node, index) => {
              const planet = planets[index]
              const angle = planet.angle + clock.progress * (planet.groupIndex % 2 ? -1 : 1)
              node.setAttribute(
                'transform',
                `translate(${400 + Math.cos(angle) * planet.radius}, ${400 + Math.sin(angle) * planet.radius})`,
              )
            }),
        })
        return () => {
          motion.current = null
        }
      })
      return () => media.revert()
    },
    { scope: container },
  )
  useGSAP(
    () => {
      motion.current?.paused(paused)
    },
    { dependencies: [paused], scope: container },
  )

  return (
    <svg
      ref={container}
      viewBox="0 0 800 800"
      className="block h-auto w-full overflow-visible"
      aria-label="Interactive skills galaxy: seven orbits representing skill categories"
    >
      <defs>
        <radialGradient id="galaxy-glow">
          <stop offset="0" stopColor="#88b69c" stopOpacity="0.17" />
          <stop offset="1" stopColor="#88b69c" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="galaxy-core">
          <stop offset="0" stopColor="#354f46" />
          <stop offset="1" stopColor="#182d26" />
        </radialGradient>
      </defs>
      <circle cx="400" cy="400" r="360" fill="url(#galaxy-glow)" aria-hidden="true" />
      {Array.from({ length: 75 }, (_, index) => (
        <circle
          key={index}
          cx={30 + ((index * 137) % 740)}
          cy={30 + ((index * 211) % 740)}
          r={index % 4 === 0 ? 1.4 : 0.7}
          fill="var(--galaxy-muted)"
          opacity={0.12 + (index % 5) * 0.07}
          aria-hidden="true"
        />
      ))}
      {skillGroups.map((group, index) => (
        <circle
          key={group.id}
          cx="400"
          cy="400"
          r={radii[index]}
          fill="none"
          stroke={orbitColors[index]}
          strokeWidth={active === group.id ? 1.5 : 0.65}
          opacity={active === group.id ? 0.65 : 0.22}
          className="transition-all duration-500 motion-reduce:transition-none"
          aria-hidden="true"
        />
      ))}
      {[0, 1, 2].map((arm) => {
        const points = Array.from({ length: 90 }, (_, step) => {
          const angle = step * 0.045 + arm * 2.094
          const radius = 45 + step * 3.05
          return `${400 + Math.cos(angle) * radius},${400 + Math.sin(angle) * radius}`
        })
        return (
          <path
            key={arm}
            d={`M${points.join(' L')}`}
            stroke="var(--galaxy-muted)"
            strokeWidth="1"
            fill="none"
            opacity="0.09"
            aria-hidden="true"
          />
        )
      })}
      <circle
        cx="400"
        cy="400"
        r="51"
        fill="url(#galaxy-core)"
        stroke="#9abc9d"
        strokeOpacity="0.4"
        aria-hidden="true"
      />
      <text
        x="400"
        y="391"
        textAnchor="middle"
        fill="#dce9dc"
        fontSize="23"
        fontFamily="monospace"
        aria-hidden="true"
      >
        {'</>'}
      </text>
      <text
        x="400"
        y="417"
        textAnchor="middle"
        fill="#bdcfbd"
        fontSize="9"
        letterSpacing="2"
        aria-hidden="true"
      >
        FULL STACK
      </text>
      {planets.map((planet) => {
        const selected = active === planet.group
        return (
          <g
            key={planet.name}
            data-planet
            transform={`translate(${400 + Math.cos(planet.angle) * planet.radius}, ${400 + Math.sin(planet.angle) * planet.radius})`}
            role="button"
            tabIndex={0}
            aria-label={`${planet.name}${planet.level ? ', basic' : ''} — ${skillGroups[planet.groupIndex].label}`}
            aria-pressed={selected}
            onClick={() => onSelect(planet.group, planet.name)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelect(planet.group, planet.name)
              }
            }}
            className="group cursor-pointer outline-none"
          >
            <circle r="16" fill="transparent" />
            <circle
              r={selected ? 13 : 8}
              fill={orbitColors[planet.groupIndex]}
              opacity={selected ? 0.13 : 0.05}
            />
            <circle
              r={selected ? 6 : 3.5}
              fill={orbitColors[planet.groupIndex]}
              stroke="var(--galaxy-accent)"
              strokeWidth={selected ? 1 : 0}
              className="transition-all duration-300 group-hover:stroke-2 group-focus-visible:stroke-2 motion-reduce:transition-none"
            />
            <circle
              r="11"
              stroke="var(--galaxy-accent)"
              fill="none"
              opacity="0"
              className="group-focus-visible:opacity-100"
            />
            <text
              y="-17"
              textAnchor="middle"
              fill="var(--galaxy-foreground)"
              fontSize="11"
              stroke="var(--galaxy-bg)"
              strokeWidth="3"
              paintOrder="stroke"
              className={
                selected ? 'hidden sm:block' : 'hidden group-hover:block group-focus-visible:block'
              }
            >
              {planet.name}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
