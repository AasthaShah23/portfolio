// Skills are owner-provided. Other profile and project content remains illustrative.
export const profile = {
  name: 'Ananya Sharma',
  firstName: 'Ananya',
  initials: 'AS',
  role: 'Full Stack Developer & Conversational AI Engineer',
  email: 'hello@example.com',
  location: 'Bengaluru, India',
  availability: 'Open to full-time & freelance opportunities',
  intro:
    'I turn complex ideas into thoughtful web experiences and conversations that feel human. From the first pixel to the last API call.',
  about:
    'I’m a full stack developer with 2+ years of experience connecting thoughtful interfaces with dependable systems. I care about the little details that make a product feel effortless.',
  aboutMore:
    'My sweet spot? Building end-to-end web applications and intelligent conversational experiences. I enjoy untangling a tricky problem, collaborating with good people, and shipping something useful.',
}

export const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export type Skill = { name: string; level?: 'Basic' }
export type SkillGroup = {
  id: 'frontend' | 'backend' | 'languages' | 'databases' | 'cloud' | 'tools' | 'practices'
  label: string
  description: string
  items: Skill[]
}

// Skills supplied by the portfolio owner. Only explicitly stated levels are shown.
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    description: 'Interfaces, state management & desktop experiences.',
    items: [
      {
        name: 'React.js',
      },
      {
        name: 'Tailwind CSS',
      },
      {
        name: 'Redux',
      },
      {
        name: 'TanStack Query',
      },
      {
        name: 'TanStack Router',
      },
      {
        name: 'Next.js',
      },
      {
        name: 'Sanity CMS',
      },
      {
        name: 'Electron.js',
        level: 'Basic',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    description: 'Application services, APIs & media delivery.',
    items: [
      {
        name: 'Node.js',
      },
      {
        name: 'Express.js',
      },
      {
        name: 'Nest.js',
      },
      {
        name: 'FastAPI',
      },
      {
        name: 'Cloudinary',
      },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    description: 'The foundations behind the work.',
    items: [
      {
        name: 'JavaScript',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Python',
      },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    description: 'Relational & document-based data.',
    items: [
      {
        name: 'MongoDB',
      },
      {
        name: 'PostgreSQL',
      },
      {
        name: 'MySQL',
      },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    description: 'From local development to deployment.',
    items: [
      {
        name: 'GCP',
      },
      {
        name: 'AWS',
      },
      {
        name: 'Docker',
      },
      {
        name: 'CI/CD pipelines',
      },
      {
        name: 'Vercel',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & collaboration',
    description: 'Version control, design & AI-assisted development.',
    items: [
      {
        name: 'Git',
      },
      {
        name: 'GitHub',
      },
      {
        name: 'GitLab',
      },
      {
        name: 'Figma',
      },
      {
        name: 'Claude',
      },
      {
        name: 'Cursor',
      },
      {
        name: 'Codex',
      },
    ],
  },
  {
    id: 'practices',
    label: 'Engineering practices',
    description: 'The thinking that connects the stack.',
    items: [
      {
        name: 'REST APIs',
      },
      {
        name: 'WebSockets',
      },
      {
        name: 'SEO Optimization',
      },
      {
        name: 'System Design Fundamentals',
      },
      {
        name: 'RBAC',
      },
      {
        name: 'Performance Optimization',
      },
      {
        name: 'Scrum',
      },
      {
        name: 'Agile',
      },
    ],
  },
]

export const experiences = [
  {
    role: 'Full Stack Developer',
    specialty: 'Conversational AI',
    company: 'Nova Digital',
    type: 'Remote',
    date: 'Jan 2025 — Present',
    current: true,
    description: 'Bringing web applications and intelligent conversations together.',
    points: [
      'Built and maintained React interfaces and Node.js services for customer-facing products.',
      'Designed Dialogflow CX flows with contextual handoffs and backend integrations.',
      'Partnered with designers and engineers to improve accessibility and release quality.',
    ],
    tags: ['React', 'Node.js', 'Dialogflow CX', 'Google Cloud'],
  },
  {
    role: 'Full Stack Developer',
    specialty: '',
    company: 'Brightside Labs',
    type: 'Hybrid',
    date: 'Jul 2024 — Dec 2024',
    current: false,
    description: 'Turning product ideas into dependable, everyday tools.',
    points: [
      'Developed reusable UI components and REST APIs for an operations platform.',
      'Improved database queries and built automated checks into the delivery workflow.',
    ],
    tags: ['TypeScript', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Web Developer Intern',
    specialty: '',
    company: 'Pixel & Co.',
    type: 'On-site',
    date: 'Jan 2024 — Jun 2024',
    current: false,
    description: 'Where curiosity became a craft.',
    points: [
      'Created responsive landing pages and dashboards alongside a small product team.',
      'Learned to ship with code reviews, version control, and a focus on the user.',
    ],
    tags: ['JavaScript', 'React', 'Git'],
  },
]

export type ProjectCategory = 'Full stack' | 'Conversational AI'
export type Project = {
  id: string
  name: string
  eyebrow: string
  description: string
  category: ProjectCategory
  tags: string[]
  visual: 'chat' | 'commerce' | 'booking' | 'analytics' | 'health' | 'finance'
  color: 'sage' | 'sand' | 'lavender' | 'blue' | 'rose' | 'peach'
  problem: string
  solution: string
  highlights: string[]
}
export const projects: Project[] = [
  {
    id: 'conversa',
    name: 'Conversa',
    eyebrow: 'A little more human',
    description: 'An AI support companion that makes getting help feel like a conversation.',
    category: 'Conversational AI',
    tags: ['Dialogflow CX', 'Node.js', 'React'],
    visual: 'chat',
    color: 'sage',
    problem:
      'Support teams need to answer repetitive questions while keeping complex issues personal.',
    solution:
      'A contextual virtual agent with a React chat interface, webhook integrations, and a clear handoff to a human.',
    highlights: ['Multi-turn conversations', 'Context-aware responses', 'Human support handoff'],
  },
  {
    id: 'gather',
    name: 'Gather',
    eyebrow: 'Commerce, thoughtfully connected',
    description: 'A calmer command center for products, orders, and everything in between.',
    category: 'Full stack',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    visual: 'commerce',
    color: 'sand',
    problem: 'Small teams often juggle disconnected tools to manage their online store.',
    solution:
      'A unified dashboard with inventory views, order management, and an API backed by PostgreSQL.',
    highlights: ['Role-based access', 'Inventory management', 'Responsive dashboard'],
  },
  {
    id: 'meetly',
    name: 'Meetly',
    eyebrow: 'Less back-and-forth. More connection.',
    description: 'A conversational scheduling assistant that finds the right time, naturally.',
    category: 'Conversational AI',
    tags: ['Dialogflow CX', 'Calendar API'],
    visual: 'booking',
    color: 'lavender',
    problem: 'Scheduling a simple appointment can take too many messages.',
    solution:
      'A conversational booking flow that checks  and guides people to a confirmed appointment.',
    highlights: ['Availability lookup', 'Conversation context', 'Booking confirmation'],
  },
  {
    id: 'pulse',
    name: 'Pulse',
    eyebrow: 'Clarity in the numbers',
    description: 'A focused analytics workspace that turns product data into useful insights.',
    category: 'Full stack',
    tags: ['TypeScript', 'React', 'Express'],
    visual: 'analytics',
    color: 'blue',
    problem: 'Teams need a clear view of product performance without digging through raw data.',
    solution:
      'An interactive dashboard with filtered reports, accessible charts, and a reusable component system.',
    highlights: ['Interactive reporting', 'Reusable charts', 'Server-side filtering'],
  },
  {
    id: 'carely',
    name: 'Carely',
    eyebrow: 'A friendly first point of care',
    description: 'A virtual front desk that helps people navigate appointments and FAQs.',
    category: 'Conversational AI',
    tags: ['Dialogflow CX', 'Webhooks'],
    visual: 'health',
    color: 'rose',
    problem: 'Routine administrative questions can overwhelm a clinic’s front desk.',
    solution:
      'An administrative assistant for clinic information and scheduling, with escalation to staff.',
    highlights: ['Appointment guidance', 'FAQ flows', 'Staff escalation'],
  },
  {
    id: 'folio',
    name: 'Folio',
    eyebrow: 'Make room for better habits',
    description: 'A personal finance space that makes everyday spending easier to understand.',
    category: 'Full stack',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    visual: 'finance',
    color: 'peach',
    problem: 'People want a simple way to see where their money goes each month.',
    solution:
      'A budget dashboard with spending categories, recurring transactions, and progress indicators.',
    highlights: ['Budget categories', 'Monthly summaries', 'Transaction search'],
  },
]

export const education = [
  {
    title: 'B.Tech in Computer Science',
    place: 'Sample Institute of Technology',
    date: '2020 — 2024',
    detail:
      'A foundation in software engineering, data structures, and a lot of late-night curiosity.',
  },
  {
    title: 'Higher Secondary · Science',
    place: 'Sample Public School',
    date: '2018 — 2020',
    detail: 'Where my interest in technology first took shape.',
  },
]
export const certificates = [
  { title: 'Conversational AI with Dialogflow CX', issuer: 'Google Cloud · Sample credential' },
  { title: 'Full Stack Developer', issuer: 'Meta · Sample credential' },
  { title: 'Cloud Practitioner', issuer: 'AWS · Sample credential' },
]
export const testimonials = [
  {
    quote:
      'Ananya brings a rare mix of technical clarity and genuine care for the user. She turns an ambitious idea into something the whole team is proud to ship.',
    name: 'Priya Mehta',
    role: 'Product Manager, Nova Digital',
    initials: 'PM',
    color: 'sage',
  },
  {
    quote:
      'Thoughtful questions, clean code, and a real sense of ownership. Working with her made even the complex parts of our project feel manageable.',
    name: 'Alex Chen',
    role: 'Engineering Lead, Brightside Labs',
    initials: 'AC',
    color: 'lavender',
  },
  {
    quote:
      'She understands that a great experience is in the details. Our conversational flow became simpler, warmer, and so much more useful.',
    name: 'Sam Rivera',
    role: 'Product Designer, Pixel & Co.',
    initials: 'SR',
    color: 'sand',
  },
] as const
