import { previewStyles } from './preview-styles'
import {
  ArrowUpRight,
  Bot,
  CalendarDays,
  Check,
  Heart,
  LayoutDashboard,
  Leaf,
  Send,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import type { Project } from '../data/portfolio'

// Lightweight, code-rendered product mockups. Replace with real screenshots later.
export function ProjectPreview({ project }: { project: Project }) {
  const isChat = project.visual === 'chat' || project.visual === 'health'
  return (
    <div
      className={`project-preview h-61 relative overflow-hidden flex items-center justify-center pt-[15px] isolate before:content-[''] before:absolute before:w-[210px] before:h-[210px] before:border before:border-[#ffffff52] before:rounded-full before:z--1 before:right-[-65px] before:top-[-95px] max-[1100px]:h-[222px] max-[800px]:h-61 max-[600px]:h-[263px] ${previewStyles[project.color]}`}
      aria-hidden="true"
    >
      {isChat ? (
        <div className="text-[#253b36] scheme-light w-[210px] bg-[#fffdf8] shadow-[0_12px_22px_#283e3a16] rounded-[8px] [transform:rotate(-5deg)] overflow-hidden mb-[17px] max-[1100px]:w-[186px] max-[800px]:w-50 max-[600px]:w-[215px]">
          <div className="mock-chat-header bg-[#315748] text-[#fff] flex items-center gap-2 pt-[11px] pr-3 pb-[11px] pl-3 text-[10px] [&_>_span]:bg-[#ffffff15] [&_>_span]:rounded-[5px] [&_>_span]:p-[5px] [&_small]:block [&_small]:text-[6px] [&_small]:text-[#d6e3d2] [&_small]:mt-[2px] [&_i]:w-1 [&_i]:h-1 [&_i]:bg-[#b9d7a4] [&_i]:rounded-full [&_i]:ml-auto">
            <span>
              {project.visual === 'health' ? <Heart size={14} /> : <Sparkles size={14} />}
            </span>
            <div>
              {project.name}
              <small>Your everyday assistant</small>
            </div>
            <i />
          </div>
          <div className="p-3 grid gap-2 text-[7px]">
            <div className="chat-bubble max-w-[155px] bg-[#edf1e7] pt-2 pr-[9px] pb-2 pl-[9px] leading-[1.5] rounded-[1px_7px_7px_7px] [&_>_span]:text-[#718866] [&_>_span]:ml-1 [&.outgoing]:bg-[#e2e9d8] [&.outgoing]:justify-self-end [&.outgoing]:rounded-[7px_1px_7px_7px]">
              {project.visual === 'health'
                ? 'Hi there! How can I help you today?'
                : 'Hey! Let’s make your day a little easier.'}
              <span>✦</span>
            </div>
            <div className="chat-bubble max-w-[155px] bg-[#edf1e7] pt-2 pr-[9px] pb-2 pl-[9px] leading-[1.5] rounded-[1px_7px_7px_7px] [&_>_span]:text-[#718866] [&_>_span]:ml-1 [&.outgoing]:bg-[#e2e9d8] [&.outgoing]:justify-self-end [&.outgoing]:rounded-[7px_1px_7px_7px] outgoing">
              {project.visual === 'health'
                ? 'I’d like to book a visit'
                : 'Can you help me track my order?'}
            </div>
            <div className="chat-bubble max-w-[155px] bg-[#edf1e7] pt-2 pr-[9px] pb-2 pl-[9px] leading-[1.5] rounded-[1px_7px_7px_7px] [&_>_span]:text-[#718866] [&_>_span]:ml-1 [&.outgoing]:bg-[#e2e9d8] [&.outgoing]:justify-self-end [&.outgoing]:rounded-[7px_1px_7px_7px]">
              Of course. You’re in the right place.
              <div className="text-[#8ea777] tracking-[2px] text-[12px] leading-[1]">•••</div>
            </div>
          </div>
          <div className="flex justify-between border-t border-t-[#e6e9df] mx-3 py-[9px] text-[#8b9685] text-[7px]">
            Type your message…
            <Send size={11} />
          </div>
        </div>
      ) : project.visual === 'booking' ? (
        <div className="text-[#655977] scheme-light w-51 pt-[15px] pr-[19px] pb-[15px] pl-[19px] bg-[#fffefa] shadow-[0_10px_20px_#44385b16] rounded-[7px] [transform:rotate(-4deg)] mb-[17px] [&_>_p]:text-[11px] [&_>_p]:font-medium [&_>_p]:leading-[1.4] [&_>_p]:mt-2 max-[1100px]:w-[181px] max-[1100px]:pt-3 max-[1100px]:pr-4 max-[1100px]:pb-3 max-[1100px]:pl-4 max-[800px]:w-[195px] max-[600px]:w-[205px] max-[600px]:pt-4 max-[600px]:pr-[19px] max-[600px]:pb-4 max-[600px]:pl-[19px]">
          <div className="flex items-center gap-[5px] text-[10px] font-semibold [&_>_span]:ml-auto [&_>_span]:text-[#a09bb8]">
            <CalendarDays size={15} /> meetly<span>✦</span>
          </div>
          <p>
            Good things start
            <br />
            with a conversation.
          </p>
          <div className="flex justify-between text-[6px] mt-[10px]">
            September 2026 <span>‹　›</span>
          </div>
          <div className="grid grid-cols-[repeat(7,_1fr)] gap-[2px] text-center mt-2 text-[6px] [&_>_*]:p-[3px] [&_>_*]:font-normal [&_>_b]:text-[#aaa4b2] [&_>_b]:text-[5px]">
            {'MTWTFSS'.split('').map((day, index) => (
              <b key={index}>{day}</b>
            ))}
            {Array.from({ length: 21 }, (_, index) => (
              <span
                key={index}
                className={index === 14 ? ' bg-[#9387ae] text-white rounded-full' : ''}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className="flex gap-1 justify-center items-center bg-[#eeebf3] text-[5px] p-[5px] mt-2 rounded-[3px]">
            <Check size={11} /> Tuesday, 15 Sep · 10:30 AM
          </div>
        </div>
      ) : (
        <div className="text-[#253b36] scheme-light w-[275px] flex bg-[#fffefb] rounded-[6px] shadow-[0_12px_20px_#223b3012] [transform:rotate(4deg)] mb-3 overflow-hidden max-[1100px]:w-[230px] max-[800px]:w-60 max-[600px]:w-70">
          <div className="mock-sidebar bg-[#2c463b] w-8 shrink-0 pt-[14px] pr-2 pb-[14px] pl-2 text-[#c8d9ba] flex flex-col gap-3 items-center [&_>_span]:w-[11px] [&_>_span]:h-[3px] [&_>_span]:bg-[#80917a] [&_>_span]:rounded-[2px] [&_>_span:nth-child(2)]:bg-[#d0ddc0]">
            {project.visual === 'finance' ? <Leaf size={15} /> : <LayoutDashboard size={15} />}
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="pt-3 pr-[14px] pb-2 pl-[14px] flex-1 min-w-0">
            <div className="flex justify-between items-center [&_strong]:text-[10px] [&_strong]:tracking-[-0.4px] [&_strong_>_span]:text-[#a4ac80]">
              <strong>
                {project.name.toLowerCase()}
                <span>.</span>
              </strong>
              <div className="w-[14px] h-[14px] grid place-items-center rounded-full bg-[#ece9d7] text-[6px]">
                A
              </div>
            </div>
            <p className="text-[6px] mt-[6px] text-[#8a9482]">
              {project.visual === 'finance'
                ? 'A little clarity for your money.'
                : 'Looking good, Ananya.'}
            </p>
            <div className="flex gap-[6px] mt-2 [&_>_div]:bg-[#f5f6ee] [&_>_div]:border [&_>_div]:border-[#eeefe7] [&_>_div]:p-[7px] [&_>_div]:flex-1 [&_>_div]:rounded-[3px] [&_>_div]:relative [&_span]:block [&_span]:text-[5px] [&_span]:text-[#859078] [&_strong]:text-[12px] [&_small]:text-[4px] [&_small]:text-[#668750] [&_small]:ml-1">
              <div>
                <span>{project.visual === 'commerce' ? 'Revenue' : 'Overview'}</span>
                <strong>{project.visual === 'finance' ? '₹42,850' : '24,680'}</strong>
                <small>↗ 12.8%</small>
              </div>
              <div>
                <span>{project.visual === 'commerce' ? 'Orders' : 'This month'}</span>
                <strong>{project.visual === 'finance' ? '₹18,240' : '1,284'}</strong>
                <small>↗ 8.2%</small>
              </div>
            </div>
            <div className="mt-2 border border-[#eeefe7] rounded-[4px] p-2">
              <div className="flex justify-between text-[6px]">
                {project.visual === 'finance' ? 'Spending overview' : 'Performance overview'}
                <ArrowUpRight size={10} />
              </div>
              <div className="chart-bars h-[49px] flex gap-[5px] items-end pt-2 border-b border-b-[#e6e9df] [background:repeating-linear-gradient(to_top,_transparent_0,_transparent_15px,_#eff0ea_16px)] [&_>_i]:flex-1 [&_>_i]:bg-[#a4b991] [&_>_i]:rounded-[2px_2px_0_0] [&_>_i:nth-child(3n)]:bg-[#637e55]">
                {[30, 44, 37, 65, 51, 74, 62, 85, 73, 95, 83, 100].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="flex justify-between text-[4px] text-[#98a08c] pt-1">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>
            </div>
            <div className="flex items-center gap-[5px] text-[5px] text-[#839177] mt-2 [&_>_svg:last-child]:ml-auto">
              {project.visual === 'commerce' ? <ShoppingBag size={11} /> : <Bot size={11} />}{' '}
              Everything in one place <Check size={10} />
            </div>
          </div>
        </div>
      )}
      <span className="absolute bottom-3 text-[7px] tracking-[0.5px] text-[#66705e]">
        {project.eyebrow}
      </span>
    </div>
  )
}
