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
    <div data-reveal className={cn('section-heading', centered && 'section-heading-centered')}>
      <p className="eyebrow">
        <span>{number}</span>
        {label}
      </p>
      <h2>{children}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  )
}
