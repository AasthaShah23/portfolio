import { ArrowDown, ArrowUpRight, Code2, Download, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '../data/portfolio'

export function HeroSection() {
  return (
    <section id="home" className="hero-section page-container">
      <div className="hero-copy">
        <div data-reveal className="availability">
          <span className="status-dot" /> Available for new opportunities
        </div>
        <p data-reveal className="hero-greeting">
          Hi, I’m {profile.firstName} <span className="hello-star">✳</span>
        </p>
        <h1 data-reveal>
          I build digital
          <br />
          experiences that
          <br />
          <em>feel human.</em>
        </h1>
        <p data-reveal className="hero-role">
          Full Stack Developer <span> & </span> Conversational AI Engineer
        </p>
        <p data-reveal className="hero-description">
          {profile.intro}
        </p>
        <div data-reveal className="hero-actions">
          <Button asChild size="lg">
            <a href="#projects">
              Explore my work <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="/sample-resume.pdf" download>
              Sample résumé <Download aria-hidden="true" />
            </a>
          </Button>
        </div>
        <div data-reveal className="hero-stats">
          <div>
            <strong>
              2<span>+</span>
            </strong>
            <p>Years of experience</p>
          </div>
          <div>
            <strong>
              12<span>+</span>
            </strong>
            <p>Projects brought to life</p>
          </div>
          <div>
            <strong>∞</strong>
            <p>Curiosity to keep learning</p>
          </div>
        </div>
      </div>
      <div className="hero-visual" data-reveal>
        <div className="portrait-orbit" aria-hidden="true" />
        <div className="portrait-frame">
          <img
            src="/images/portrait.png"
            alt="AI-generated placeholder portrait of a professional woman"
            width="800"
            height="1000"
            fetchPriority="high"
          />
          <div className="portrait-caption">
            <span className="status-dot" /> Based in India · Building for the world
          </div>
        </div>
        <div className="portrait-note note-top" data-float>
          <span className="note-icon">
            <Code2 size={21} />
          </span>
          <div>
            Thoughtfully built.<small>From front to back.</small>
          </div>
        </div>
        <div className="portrait-note note-bottom" data-float>
          <Sparkles size={20} />
          <span>
            A little logic.
            <br />
            <strong>A lot of possibility.</strong>
          </span>
        </div>
        <span className="portrait-sparkle" aria-hidden="true">
          ✳
        </span>
        <span className="portrait-side-label">CODE WITH PURPOSE. CREATE WITH CARE.</span>
      </div>
      <a href="#about" className="scroll-cue">
        <ArrowDown size={14} /> A little more about me
      </a>
    </section>
  )
}
