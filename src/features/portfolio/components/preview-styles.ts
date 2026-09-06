import type { Project } from '../data/portfolio'

// Static Tailwind variants keep product artwork independent of the page theme.
export const previewStyles = {
  sage: ' bg-[#dce6d5]',
  sand: ' bg-[#ebe5d9]',
  lavender: ' bg-[#e4e2ec]',
  blue: ' bg-[#dee8e9] [&_.mock-sidebar]:bg-[#3c6267] [&_.chart-bars_>_i]:bg-[#94b7b7] [&_.chart-bars_>_i:nth-child(3n)]:bg-[#567f85]',
  rose: ' bg-[#ebdfdd] [&_.mock-chat-header]:bg-[#886c68] [&_.chat-bubble]:bg-[#f3eeea] [&_.chat-bubble.outgoing]:bg-[#eae0dc]',
  peach:
    ' bg-[#eee2d2] [&_.chart-bars_>_i]:bg-[#c6b58d] [&_.chart-bars_>_i:nth-child(3n)]:bg-[#9b8a61]',
} as const satisfies Record<Project['color'], string>
