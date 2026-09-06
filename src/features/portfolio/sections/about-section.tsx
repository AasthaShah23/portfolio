import { ArrowUpRight, Check, Code2, Heart, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '../components/section-heading'
import { profile } from '../data/portfolio'

export function AboutSection() {
  return (
    <section id="about" className="py-27 max-[800px]:py-[78px] max-[600px]:py-16 about-section">
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]  grid grid-cols-[1fr_1fr] gap-[95px] items-center max-[1100px]:gap-[45px] max-[800px]:gap-[30px] max-[600px]:grid-cols-[1fr] max-[600px]:gap-[37px]">
        <div
          className="relative bg-surface-tinted rounded-[16px] pt-[43px] pr-[27px] pb-[53px] pl-[27px] max-[800px]:pt-[25px] max-[800px]:pr-[13px] max-[800px]:pb-[45px] max-[800px]:pl-[13px] max-[600px]:[order:2] max-[600px]:max-w-[430px] max-[600px]:pt-[34px] max-[600px]:pr-6 max-[600px]:pb-[51px] max-[600px]:pl-6 max-[600px]:w-full max-[600px]:justify-self-center"
          data-reveal
        >
          <div className="bg-[#243e35] text-[#dce8db] border border-[#496154] rounded-[9px] shadow-[0_18px_26px_#2b4e3821] [transform:rotate(-3deg)] overflow-hidden font-mono">
            <div className="flex justify-between items-center text-[8px] bg-[#294438] pt-3 pr-[15px] pb-3 pl-[15px] text-[#aec0aa] border-b border-b-[#486148] max-[800px]:text-[6px] max-[600px]:text-[8px]">
              <div className="flex gap-1 [&_i]:w-[5px] [&_i]:h-[5px] [&_i]:rounded-full [&_i]:bg-[#c49379] [&_i:nth-child(2)]:bg-[#c3b47c] [&_i:nth-child(3)]:bg-[#93ad7b]">
                <i />
                <i />
                <i />
              </div>
              <span>a-little-about-me.ts</span>
              <Code2 size={14} />
            </div>
            <div className="pt-[23px] pr-[19px] pb-[23px] pl-[19px] text-[10px] leading-[2.1] whitespace-nowrap [&_p]:leading-[2.1] max-[1100px]:text-[9px] max-[1100px]:[&_.code-comment]:text-[8px] max-[800px]:text-[7px] max-[800px]:pt-[18px] max-[800px]:pr-3 max-[800px]:pb-[18px] max-[800px]:pl-3 max-[800px]:[&_.code-comment]:text-[6px] max-[600px]:text-[10px] max-[600px]:pt-[21px] max-[600px]:pr-[17px] max-[600px]:pb-[21px] max-[600px]:pl-[17px] max-[600px]:[&_.code-comment]:text-[8px] max-[360px]:text-[8px] max-[360px]:[&_.code-comment]:text-[7px]">
              <span className="code-comment text-[#9caf98] text-[9px]">
                // Driven by curiosity. Built with care.
              </span>
              <p>
                <span className="text-[#d3b4c6]">const</span> developer = {'{'}
              </p>
              <p className="pl-[17px]">
                name: <span className="text-[#c2dca0]">'{profile.firstName}'</span>,
              </p>
              <p className="pl-[17px]">
                focus: [<span className="text-[#c2dca0]">'web'</span>,{' '}
                <span className="text-[#c2dca0]">'conversations'</span>],
              </p>
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
        <div>
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
