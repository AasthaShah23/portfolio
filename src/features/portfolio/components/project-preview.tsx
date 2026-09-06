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
    <div className={`project-preview preview-${project.color}`} aria-hidden="true">
      {isChat ? (
        <div className="mock-chat">
          <div className="mock-chat-header">
            <span>
              {project.visual === 'health' ? <Heart size={14} /> : <Sparkles size={14} />}
            </span>
            <div>
              {project.name}
              <small>Your everyday assistant</small>
            </div>
            <i />
          </div>
          <div className="mock-chat-body">
            <div className="chat-bubble">
              {project.visual === 'health'
                ? 'Hi there! How can I help you today?'
                : 'Hey! Let’s make your day a little easier.'}
              <span>✦</span>
            </div>
            <div className="chat-bubble outgoing">
              {project.visual === 'health'
                ? 'I’d like to book a visit'
                : 'Can you help me track my order?'}
            </div>
            <div className="chat-bubble">
              Of course. You’re in the right place.<div className="typing-dots">•••</div>
            </div>
          </div>
          <div className="mock-chat-input">
            Type your message…
            <Send size={11} />
          </div>
        </div>
      ) : project.visual === 'booking' ? (
        <div className="mock-calendar">
          <div className="calendar-label">
            <CalendarDays size={15} /> meetly<span>✦</span>
          </div>
          <p>
            Good things start
            <br />
            with a conversation.
          </p>
          <div className="calendar-month">
            September 2026 <span>‹　›</span>
          </div>
          <div className="calendar-grid">
            {'MTWTFSS'.split('').map((day, index) => (
              <b key={index}>{day}</b>
            ))}
            {Array.from({ length: 21 }, (_, index) => (
              <span key={index} className={index === 14 ? 'calendar-selected' : ''}>
                {index + 1}
              </span>
            ))}
          </div>
          <div className="calendar-time">
            <Check size={11} /> Tuesday, 15 Sep · 10:30 AM
          </div>
        </div>
      ) : (
        <div className="mock-dashboard">
          <div className="mock-sidebar">
            {project.visual === 'finance' ? <Leaf size={15} /> : <LayoutDashboard size={15} />}
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index} />
            ))}
          </div>
          <div className="mock-main">
            <div className="mock-dashboard-heading">
              <strong>
                {project.name.toLowerCase()}
                <span>.</span>
              </strong>
              <div className="mock-avatar">A</div>
            </div>
            <p className="mock-welcome">
              {project.visual === 'finance'
                ? 'A little clarity for your money.'
                : 'Looking good, Ananya.'}
            </p>
            <div className="mock-metrics">
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
            <div className="mock-chart">
              <div className="mock-chart-label">
                {project.visual === 'finance' ? 'Spending overview' : 'Performance overview'}
                <ArrowUpRight size={10} />
              </div>
              <div className="chart-bars">
                {[30, 44, 37, 65, 51, 74, 62, 85, 73, 95, 83, 100].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <div className="chart-axis">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
                <span>Sun</span>
              </div>
            </div>
            <div className="mock-bottom-row">
              {project.visual === 'commerce' ? <ShoppingBag size={11} /> : <Bot size={11} />}{' '}
              Everything in one place <Check size={10} />
            </div>
          </div>
        </div>
      )}
      <span className="preview-caption">{project.eyebrow}</span>
    </div>
  )
}
