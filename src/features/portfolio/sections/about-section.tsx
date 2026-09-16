import { ArrowUpRight, Check, Code2, Heart, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '../components/section-heading'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="py-27 max-[800px]:py-[78px] max-[600px]:py-16 about-section">
      <div className="page-container mx-auto grid w-[calc(100%_-_40px)] max-w-[1160px] grid-cols-1 items-center gap-9 sm:w-[calc(100%_-_64px)] lg:w-[calc(100%_-_96px)] lg:grid-cols-2 lg:gap-11 xl:gap-[95px]">
        <div
          className="relative order-2 w-full min-w-0 max-w-[520px] justify-self-center rounded-2xl bg-surface-tinted px-4 pt-7 pb-14 sm:px-7 sm:pt-10 lg:order-1"
          data-reveal
        >
          <div className="overflow-hidden rounded-[9px] border border-[#496154] bg-[#243e35] font-mono text-[#dce8db] shadow-[0_18px_26px_#2b4e3821] sm:-rotate-3">
            <div className="flex justify-between items-center text-[8px] bg-[#294438] pt-3 pr-[15px] pb-3 pl-[15px] text-[#aec0aa] border-b border-b-[#486148] max-[800px]:text-[6px] max-[600px]:text-[8px]">
              <div className="flex gap-1 [&_i]:w-[5px] [&_i]:h-[5px] [&_i]:rounded-full [&_i]:bg-[#c49379] [&_i:nth-child(2)]:bg-[#c3b47c] [&_i:nth-child(3)]:bg-[#93ad7b]">
                <i />
                <i />
                <i />
              </div>
              <span>a-little-about-me.ts</span>
              <Code2 size={14} />
            </div>
            <div className="px-3 py-5 text-[11px] leading-[2.1] whitespace-normal [overflow-wrap:anywhere] sm:px-5 [&_p]:leading-[2.1]">
              <span className="code-comment text-[#9caf98] text-[9px]">
                // Driven by curiosity. Built with care.
              </span>
              <p>
                <span className="text-[#d3b4c6]">const</span> developer = {'{'}
              </p>
              <p className="pl-[17px]">
                name: <span className="text-[#c2dca0]">'{profile.name}'</span>,
              </p>
              <p className="pl-[17px]">focus: [</p>
              <p className="pl-8 text-[#c2dca0]">'Full-Stack',</p>
              <p className="pl-8 text-[#c2dca0]">'Real-Time Systems',</p>
              <p className="pl-8 text-[#c2dca0]">'Conversational AI'</p>
              <p className="pl-[17px]">],</p>
              <p className="pl-[17px]">
                mindset: <span className="text-[#c2dca0]">'always learning'</span>,
              </p>
              <p className="pl-[17px]">caresAbout: [</p>
              <p className="pl-8  text-[#c2dca0]">'the details',</p>
              <p className="pl-8  text-[#c2dca0]">'the people using it'</p>
              <p className="pl-[17px]">],</p>
              <p>{'}'};</p>
              <p className="code-comment text-[#9caf98] text-[9px]  mt-[15px]">
                // Let’s make something meaningful.
              </p>
            </div>
            <div className="flex justify-between border-t border-t-[#486148] pt-2 pr-3 pb-2 pl-3 text-[7px] text-[#b7c6b0] [&_>_span:first-child]:flex [&_>_span:first-child]:items-center [&_>_span:first-child]:gap-[6px] [&_.status-dot]:w-1 [&_.status-dot]:h-1">
              <span>
                <span className="status-dot inline-block w-[6px] h-[6px] rounded-full bg-status shrink-0 shadow-[0_0_0_3px_#71955812]" />{' '}
                All systems curious
              </span>
              <span>TypeScript</span>
            </div>
          </div>
          <div className="absolute bottom-6 right-3 bg-background pt-[13px] pr-[17px] pb-[13px] pl-[17px] flex items-center gap-[9px] shadow-[0_5px_20px_#29433310] [transform:rotate(3deg)] text-[10px] rounded-[4px] [&_svg]:text-text-soft max-[800px]:text-[8px] max-[800px]:right-[5px] max-[800px]:bottom-[18px] max-[600px]:text-[10px] max-[600px]:right-2 max-[600px]:bottom-[21px]">
            <Heart size={17} />
            <span>Good code. Better experiences.</span>
          </div>
        </div>
        <div className="order-1 min-w-0 lg:order-2">
          <SectionHeading number="01" label="A little about me">
            An engineer’s mind.
            <br />
            <em>A maker’s heart.</em>
          </SectionHeading>
          <div
            data-reveal
            className="[&_>_p]:text-[14px] [&_>_p]:text-muted-foreground [&_>_p]:mb-[17px] [&_>_p]:leading-[1.9] [&_a]:text-[11px] [&_a]:h-10 [&_a]:bg-transparent max-[800px]:[&_>_p]:text-[12px] max-[600px]:[&_>_p]:text-[13px]"
          >
            <p>{profile.about}</p>
            <p>{profile.aboutMore}</p>
            <div className="flex flex-wrap gap-4 my-[26px] text-[10px] [&_>_span]:flex [&_>_span]:gap-[7px] [&_>_span]:items-center max-[800px]:gap-[9px] max-[800px]:text-[9px] max-[600px]:gap-[17px] max-[600px]:text-[10px]">
              <span>
                <MapPin size={15} /> {profile.location}
              </span>
              <span>
                <Check size={15} /> Full-stack & conversational AI
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
