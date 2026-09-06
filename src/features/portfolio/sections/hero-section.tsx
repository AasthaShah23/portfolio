import { ArrowDown, ArrowUpRight, Code2, Download, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { profile } from '../data/portfolio'

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative grid grid-cols-[1.15fr_1fr] gap-18 items-center pt-[79px] pb-22 min-[1500px]:pt-25 min-[1500px]:pb-[105px] max-[1100px]:gap-10 max-[800px]:grid-cols-[1fr_0.85fr] max-[800px]:gap-[30px] max-[800px]:pt-[55px] max-[600px]:grid-cols-[1fr] max-[600px]:pt-[38px] max-[600px]:pb-[66px] max-[600px]:gap-12 page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]"
    >
      <div className="[&_h1]:text-[clamp(44px,_4.65vw,_65px)] [&_h1]:leading-[1.14] [&_h1]:font-semibold [&_h1]:tracking-[-3.1px] [&_h1_em]:text-[1.06em] max-[1100px]:[&_h1]:text-[53px] max-[800px]:[&_h1]:text-[44px] max-[800px]:[&_h1]:tracking-[-2px] max-[600px]:max-w-110 max-[600px]:[&_h1]:text-[clamp(43px,_11vw,_62px)] max-[600px]:[&_h1]:tracking-[-2.3px]">
        <div
          data-reveal
          className="text-[10px] tracking-[0.35px] inline-flex items-center gap-[9px] pt-[6px] pr-[11px] pb-[6px] pl-[11px] border border-border rounded-[20px] bg-surface-tinted mb-[30px] text-text-strong max-[600px]:text-[9px] max-[600px]:mb-6"
        >
          <span className="status-dot inline-block w-[6px] h-[6px] rounded-full bg-status shrink-0 shadow-[0_0_0_3px_#71955812]" />{' '}
          Available for new opportunities
        </div>
        <p
          data-reveal
          className="text-[16px] mb-[15px] font-medium max-[600px]:text-[14px] max-[600px]:mb-3"
        >
          Hi, I’m {profile.firstName}{' '}
          <span className="text-text-soft ml-[5px] text-[22px] [vertical-align:middle]">✳</span>
        </p>
        <h1 data-reveal>
          I build digital
          <br />
          experiences that
          <br />
          <em>feel human.</em>
        </h1>
        <p
          data-reveal
          className="text-[11px] font-semibold mt-[25px] tracking-[0.15px] [&_>_span]:text-text-soft [&_>_span]:mx-[3px] max-[1100px]:text-[10px] max-[800px]:max-w-65 max-[800px]:leading-[1.8] max-[600px]:max-w-[none] max-[600px]:text-[10px] max-[600px]:mt-5"
        >
          Full Stack Developer <span> & </span> Conversational AI Engineer
        </p>
        <p
          data-reveal
          className="text-[14px] text-muted-foreground max-w-100 mt-3 leading-[1.9] max-[800px]:text-[12px] max-[600px]:max-w-[350px] max-[600px]:leading-[1.9] max-[600px]:mt-[9px]"
        >
          {profile.intro}
        </p>
        <div
          data-reveal
          className="flex gap-[9px] mt-7 [&_a]:text-[11px] [&_a]:h-[43px] [&_a]:px-[18px] max-[800px]:flex-wrap max-[800px]:gap-[2px] max-[800px]:[&_a]:text-[10px] max-[800px]:[&_a]:px-3 max-[600px]:gap-2 max-[600px]:mt-[22px] max-[600px]:[&_a]:text-[10px] max-[600px]:[&_a]:h-[42px] max-[600px]:[&_a]:px-[15px] max-[360px]:gap-0 max-[360px]:[&_a]:px-3"
        >
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
        <div
          data-reveal
          className="flex gap-[30px] mt-[37px] pt-[25px] border-t border-t-border max-w-110 [&_>_div_+_div]:border-l [&_>_div_+_div]:border-l-border [&_>_div_+_div]:pl-[30px] [&_strong]:font-heading [&_strong]:text-[26px] [&_strong]:font-semibold [&_strong]:leading-[1] [&_strong_>_span]:text-text-soft [&_strong_>_span]:text-[20px] [&_p]:text-[9px] [&_p]:mt-2 [&_p]:text-muted-foreground [&_p]:whitespace-nowrap max-[1100px]:gap-[18px] max-[1100px]:[&_>_div_+_div]:pl-[18px] max-[800px]:gap-[14px] max-[800px]:[&_>_div_+_div]:pl-[14px] max-[800px]:[&_strong]:text-[22px] max-[800px]:[&_p]:text-[7px] max-[600px]:max-w-[370px] max-[600px]:justify-between max-[600px]:gap-[13px] max-[600px]:mt-[25px] max-[600px]:pt-[21px] max-[600px]:[&_>_div_+_div]:pl-[19px] max-[600px]:[&_strong]:text-[25px] max-[600px]:[&_p]:text-[8px] max-[360px]:[&_p]:text-[7px] max-[360px]:[&_>_div_+_div]:pl-3"
        >
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
      <div
        className="relative max-w-106 w-full justify-self-center mt-[5px] max-[600px]:max-w-[305px] max-[600px]:w-[calc(100%_-_35px)]"
        data-reveal
      >
        <div
          className="absolute [inset:-20px_18px_15px_-18px] border border-border rounded-[200px_200px_22px_22px] [transform:rotate(-5deg)] max-[600px]:[inset:-14px_12px_10px_-12px]"
          aria-hidden="true"
        />
        <div className="h-[490px] relative overflow-hidden bg-surface-tinted rounded-[180px_180px_14px_14px] border-[7px] border-border shadow-[0_15px_35px_#293f3210] [&_img]:w-full [&_img]:h-full [&_img]:object-cover [&_img]:[object-position:50%_29%] after:content-[''] after:absolute after:[inset:65%_0_0] after:[background:linear-gradient(transparent,_#182821a6)] max-[1100px]:h-[455px] max-[800px]:h-97 max-[600px]:h-[374px]">
          <img
            src="/images/portrait.png"
            alt="AI-generated placeholder portrait of a professional woman"
            width="800"
            height="1000"
            fetchPriority="high"
          />
          <div className="absolute bottom-[23px] left-0 right-0 z-1 text-center text-[#fffdf2] text-[9px] tracking-[0.3px] flex justify-center gap-2 items-center max-[800px]:text-[7px] max-[600px]:text-[8px]">
            <span className="status-dot inline-block w-[6px] h-[6px] rounded-full bg-status shrink-0 shadow-[0_0_0_3px_#71955812]" />{' '}
            Based in India · Building for the world
          </div>
        </div>
        <div
          className="absolute z-2 bg-card border border-border shadow-[0_8px_30px_#203c3210] rounded-[9px] flex items-center gap-[11px]  left-[-35px] top-[95px] pt-[14px] pr-[18px] pb-[14px] pl-[18px] text-[11px] font-medium [transform:rotate(-4deg)] [&_small]:block [&_small]:text-[9px] [&_small]:text-muted-foreground [&_small]:mt-[3px] [&_small]:font-normal max-[800px]:left-[-17px] max-[800px]:top-15 max-[800px]:p-[10px] max-[800px]:text-[9px] max-[800px]:[&_small]:text-[7px] max-[600px]:left-[-22px] max-[600px]:top-[70px] max-[600px]:text-[10px] max-[600px]:p-[11px] max-[600px]:[&_small]:text-[8px]"
          data-float
        >
          <span className="w-[34px] h-[34px] grid place-items-center bg-surface-tinted text-primary rounded-[7px] max-[800px]:w-7 max-[800px]:h-7">
            <Code2 size={21} />
          </span>
          <div>
            Thoughtfully built.<small>From front to back.</small>
          </div>
        </div>
        <div
          className="absolute z-2 bg-card border border-border shadow-[0_8px_30px_#203c3210] rounded-[9px] flex items-center gap-[11px]  right-[-28px] bottom-[49px] pt-4 pr-[18px] pb-4 pl-[18px] text-[11px] leading-[1.7] [transform:rotate(5deg)] [&_>_svg]:text-text-soft [&_strong]:font-medium max-[800px]:p-[11px] max-[800px]:right-[-10px] max-[800px]:bottom-[35px] max-[800px]:text-[9px] max-[600px]:right-[-15px] max-[600px]:bottom-[38px] max-[600px]:p-[13px] max-[600px]:text-[10px]"
          data-float
        >
          <Sparkles size={20} />
          <span>
            A little logic.
            <br />
            <strong>A lot of possibility.</strong>
          </span>
        </div>
        <span
          className="absolute right-[-26px] top-4 text-text-soft text-[60px] font-normal max-[800px]:right-[-14px] max-[800px]:text-[43px] max-[600px]:right-[-21px] max-[600px]:text-[48px]"
          aria-hidden="true"
        >
          ✳
        </span>
        <span className="absolute right-[-36px] top-[185px] [writing-mode:vertical-rl] tracking-[2px] text-[8px] text-text-soft max-[1100px]:right-[-25px] max-[800px]:right-[-19px] max-[800px]:text-[6px] max-[600px]:text-[7px] max-[600px]:right-[-22px] max-[600px]:top-[165px]">
          CODE WITH PURPOSE. CREATE WITH CARE.
        </span>
      </div>
      <a
        href="#about"
        className="absolute bottom-[26px] left-0 text-[9px] flex items-center gap-[10px] text-text-soft tracking-[0.5px] max-[600px]:bottom-5 max-[600px]:left-1/2 max-[600px]:[transform:translateX(-50%)] max-[600px]:whitespace-nowrap"
      >
        <ArrowDown size={14} /> A little more about me
      </a>
    </section>
  )
}
