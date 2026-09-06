import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionHeading({
  number,
  label,
  children,
  description,
  centered = false,
}: {
  number: string
  label: string
  children: ReactNode
  description?: string
  centered?: boolean
}) {
  return (
    <div
      data-reveal
      className={cn(
        ' section-heading [&_h2]:text-[clamp(30px,_3.05vw,_42px)] [&_h2]:leading-[1.3] [&_h2]:tracking-[-1.5px] [&_h2]:font-semibold [&_h2]:mt-5 [&_h2]:mr-0 [&_h2]:mb-[22px] [&_h2]:ml-0 max-[800px]:[&_h2]:text-[31px] max-[800px]:[&_h2]:tracking-[-1px] max-[600px]:[&_h2]:text-[32px] max-[600px]:[&_h2]:mt-[15px] max-[600px]:[&_h2]:leading-[1.3]',
        centered && ' text-center [&_.eyebrow]:justify-center',
      )}
    >
      <p className="eyebrow flex items-center gap-3 uppercase tracking-[2px] text-[10px] font-semibold text-text-strong [&_>_span]:text-text-soft [&_>_span]:text-[9px] [&_>_span]:tracking-[0] [&_>_span]:border [&_>_span]:border-border [&_>_span]:pt-[2px] [&_>_span]:pr-[5px] [&_>_span]:pb-[2px] [&_>_span]:pl-[5px] [&_>_span]:leading-[1.3] [&_>_span]:rounded-[3px] max-[600px]:text-[9px] max-[600px]:tracking-[1.6px]">
        <span>{number}</span>
        {label}
      </p>
      <h2>{children}</h2>
      {description && (
        <p className="section-description text-[14px] text-muted-foreground max-w-95 leading-[1.9]">
          {description}
        </p>
      )}
    </div>
  )
}
