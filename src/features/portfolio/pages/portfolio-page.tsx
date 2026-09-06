import { ThemeSwitcher } from '../components/theme-switcher'
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
        <div className="technology-strip">
          <div className="page-container">
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
      <ThemeSwitcher />
    </div>
  )
}
