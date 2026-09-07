import { useRef } from 'react'
import { Atom, Bot, Cloud, Code2, Database, Server } from 'lucide-react'
import { PortfolioHeader } from '../components/portfolio-header'
import { PortfolioFooter } from '../components/portfolio-footer'
import { useSectionMotion } from '../hooks/use-section-motion'
import { HeroSection } from '../sections/hero-section'
import { AboutSection } from '../sections/about-section'
import { SkillsSection } from '../sections/skills-section'
import { ExperienceSection } from '../sections/experience-section'
import { ProjectsSection } from '../sections/projects-section'
import { EducationSection } from '../sections/education-section'
import { TestimonialsSection } from '../sections/testimonials-section'
import { ContactSection } from '../sections/contact-section'
const technologies = [
  { name: 'React', icon: Atom },
  { name: 'Node.js', icon: Server },
  { name: 'TypeScript', icon: Code2 },
  { name: 'Dialogflow CX', icon: Bot },
  { name: 'Google Cloud', icon: Cloud },
  { name: 'PostgreSQL', icon: Database },
]
export function PortfolioPage() {
  const container = useRef<HTMLDivElement>(null)
  useSectionMotion(container)
  return (
    <div ref={container}>
      <PortfolioHeader />
      <main id="main-content">
        <HeroSection />
        <div className="border-y border-y-border bg-surface-soft py-6 [&_>_.page-container]:flex [&_>_.page-container]:justify-between [&_>_.page-container]:items-center [&_>_.page-container]:gap-5 [&_span]:flex [&_span]:gap-[9px] [&_span]:items-center [&_span]:whitespace-nowrap [&_span]:text-text-soft [&_span]:text-[12px] [&_span]:font-medium [&_.technology-caption]:text-[8px] [&_.technology-caption]:tracking-[1.6px] [&_.technology-caption]:text-text-soft [&_.technology-caption]:font-normal max-[1100px]:[&_.technology-caption]:hidden max-[800px]:[&_span]:text-[10px] max-[800px]:[&_span]:gap-[5px] max-[800px]:[&_svg]:w-[15px] max-[600px]:py-5 max-[600px]:[&_>_.page-container]:grid max-[600px]:[&_>_.page-container]:grid-cols-[repeat(3,_1fr)] max-[600px]:[&_>_.page-container]:[gap:18px_12px] max-[600px]:[&_span]:text-[10px] max-[600px]:[&_span]:justify-center max-[600px]:[&_span]:gap-[6px]">
          <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]">
            <span className="technology-caption">MADE POSSIBLE WITH</span>
            {technologies.map(({ name, icon: Icon }) => (
              <span key={name}>
                <Icon size={20} strokeWidth={1.4} />
                {name}
              </span>
            ))}
          </div>
        </div>
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  )
}
