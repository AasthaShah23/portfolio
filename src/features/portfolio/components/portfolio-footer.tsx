import { ArrowUp, Heart } from 'lucide-react'
import { profile } from '../data/portfolio'
export function PortfolioFooter() {
  return (
    <footer className="border-t border-t-border pt-[30px] pb-6 bg-surface-soft">
      <div className="page-container w-[min(1160px,_calc(100%_-_96px))] mx-auto max-[1100px]:w-[calc(100%_-_64px)] max-[600px]:w-[calc(100%_-_40px)]">
        <div className="flex justify-between items-center pb-[25px] border-b border-b-border [&_>_p]:text-[10px] [&_>_p]:text-text-soft [&_>_p]:flex [&_>_p]:items-center [&_>_p]:gap-1 max-[600px]:flex-wrap max-[600px]:gap-y-[18px] max-[600px]:[&_>_p]:[order:3] max-[600px]:[&_>_p]:w-full max-[600px]:[&_>_p]:justify-center">
          <a
            href="#home"
            className="font-heading text-[26px] tracking-[-1.3px] font-bold [&_>_span]:text-text-soft max-[600px]:text-[24px]"
          >
            {profile.firstName.toLowerCase()}
            <span>.</span>
          </a>
          <p>
            Built with intention. And a little <Heart size={12} />.
          </p>
          <a href="#home" className="flex items-center gap-[10px] text-[10px] text-text-soft">
            Back to top <ArrowUp size={15} />
          </a>
        </div>
        <div className="flex justify-between gap-5 text-[8px] text-text-soft pt-5 max-[800px]:text-[7px] max-[600px]:flex-col max-[600px]:text-center max-[600px]:gap-[10px] max-[600px]:text-[8px]">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#contact">Let’s make something meaningful ↗</a>
        </div>
      </div>
    </footer>
  )
}
