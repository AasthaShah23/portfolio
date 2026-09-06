import { ArrowUpRight, Check, Code2, Heart, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '../components/section-heading'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="section-space about-section">
      <div className="page-container about-grid">
        <div className="about-art" data-reveal>
          <div className="editor-window">
            <div className="editor-title">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>a-little-about-me.ts</span>
              <Code2 size={14} />
            </div>
            <div className="editor-code">
              <span className="code-comment">// Driven by curiosity. Built with care.</span>
              <p>
                <span className="code-purple">const</span> developer = {'{'}
              </p>
              <p className="indent">
                name: <span className="code-green">'{profile.firstName}'</span>,
              </p>
              <p className="indent">
                focus: [<span className="code-green">'web'</span>,{' '}
                <span className="code-green">'conversations'</span>],
              </p>
              <p className="indent">
                mindset: <span className="code-green">'always learning'</span>,
              </p>
              <p className="indent">caresAbout: [</p>
              <p className="indent-double code-green">'the details',</p>
              <p className="indent-double code-green">'the people using it'</p>
              <p className="indent">],</p>
              <p>{'}'};</p>
              <p className="code-comment bottom-comment">// Let’s make something meaningful.</p>
            </div>
            <div className="editor-bottom">
              <span>
                <span className="status-dot" /> All systems curious
              </span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="craft-note">
            <Heart size={17} />
            <span>Good code. Better experiences.</span>
          </div>
        </div>
        <div>
          <SectionHeading number="01" label="A little about me">
            An engineer’s mind.
            <br />
            <em>A maker’s heart.</em>
          </SectionHeading>
          <div data-reveal className="about-copy">
            <p>{profile.about}</p>
            <p>{profile.aboutMore}</p>
            <div className="about-details">
              <span>
                <MapPin size={15} /> {profile.location}
              </span>
              <span>
                <Check size={15} /> Open to remote & hybrid
              </span>
            </div>
            <Button asChild variant="outline">
              <a href="#contact">
                Let’s get to know each other <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
