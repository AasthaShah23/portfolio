// Profile and results transcribed or paraphrased from AasthaShah.pdf.
export const profile = {
  name: 'Aastha Shah',
  firstName: 'Aastha',
  initials: 'AS',
  role: 'Software Engineer · Full Stack & Conversational AI',
  email: 'shahaastha2403@gmail.com',
  phone: '+91 9998262717',
  location: 'Ahmedabad, Gujarat',
  availability: 'Let’s talk about full-stack and AI opportunities',
  github: 'https://github.com/AasthaShah23',
  linkedin: 'https://www.linkedin.com/in/aasthashah24/',
  resume: '/AasthaShah.pdf',
  intro:
    'I build scalable web applications and AI-powered experiences, with a focus on faster APIs, thoughtful interfaces, and features that are ready for real users.',
  about:
    'I’m Aastha, a software engineer with 2+ years of experience across full-stack development and conversational AI. At Seaflux, I work from frontend interfaces to backend APIs, translating business requirements into production-ready features.',
  aboutMore:
    'My work spans performance optimization, secure data flows, and context-aware conversations. I also mentor interns through code reviews and technical guidance, building on my frontend experience at DioneApps.',
  stats: [
    {
      value: '2+',
      label: 'Years of experience',
    },
    {
      value: '10+',
      label: 'Production features delivered',
    },
    {
      value: '∞',
      label: 'Curiosity to keep learning',
    },
  ],
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
    role: 'Software Engineer',
    specialty: '',
    company: 'Seaflux',
    type: 'Ahmedabad, Gujarat · On-site',
    date: 'Nov 2024 — Present',
    current: true,
    description: 'End-to-end product development, performance optimization, and conversational AI.',
    points: [
      'Leading full-stack development and optimizing frontend performance and backend APIs, reducing response time by 40%.',
      'Collaborated with cross-functional teams to deliver 10+ production features from business requirements.',
      'Built and managed conversational AI solutions, improving response handling efficiency by 35%.',
      'Mentoring interns through code reviews, technical guidance, and foundational skills training.',
    ],
    tags: ['Full-stack development', 'API optimization', 'Conversational AI', 'Mentoring'],
  },
  {
    role: 'Frontend Developer',
    specialty: '',
    company: 'DioneApps Pvt. Ltd.',
    type: 'Ahmedabad, Gujarat · On-site',
    date: 'Jan 2024 — Oct 2024',
    current: false,
    description:
      'Responsive web experiences, content workflows, and cross-platform desktop applications.',
    points: [
      'Improved mobile responsiveness, increasing mobile traffic by 40% and reducing bounce rate by 25%.',
      'Integrated Sanity CMS, improving real-time content update efficiency by 30%.',
      'Used Git for version control and Electron.js for cross-platform desktop applications.',
    ],
    tags: ['Frontend development', 'Sanity CMS', 'Electron.js', 'Git'],
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
    id: 'fintrack-ai',
    name: 'FinTrack AI',
    eyebrow: 'A clearer view of everyday finances',
    description:
      'A smart expense tracking platform with transaction management, interactive dashboards, and AI-driven spending insights.',
    category: 'Full stack',
    tags: ['React.js', 'TanStack Query & Router', 'Redux Toolkit', 'FastAPI', 'PostgreSQL'],
    visual: 'finance',
    color: 'sage',
    problem:
      'Make expense tracking more efficient while giving users a clearer picture of their spending.',
    solution:
      'Built an end-to-end platform with expense categorization, secure RESTful APIs, authentication, optimized database queries, monthly reports, and budget alerts.',
    highlights: [
      '25% improvement in tracking efficiency',
      '30% improvement in financial visibility',
      'AI-driven spending insights and interactive dashboards',
    ],
  },
  {
    id: 'invoice-flow',
    name: 'Invoice Flow',
    eyebrow: 'Billing workflows, made simpler',
    description:
      'A multi-tenant billing system for secure organization-level data, invoice generation, and client transactions.',
    category: 'Full stack',
    tags: [
      'React.js',
      'TanStack Query & Router',
      'Redux Toolkit',
      'Node.js',
      'Express.js',
      'PostgreSQL',
    ],
    visual: 'commerce',
    color: 'sand',
    problem:
      'Help multiple organizations manage isolated billing data and reduce manual invoice follow-ups.',
    solution:
      'Designed a modular backend with role-based access control and automated email notifications, alongside PDF generation, payment tracking, and overdue alerts.',
    highlights: [
      '40% reduction in manual follow-ups',
      '30% faster billing workflows',
      'Multi-tenant data isolation and invoice lifecycle management',
    ],
  },
  {
    id: 'chatbot',
    name: 'Chatbot',
    eyebrow: 'Conversations with context',
    description:
      'A customized conversational interface powered by Dialogflow CX APIs on Google Cloud Platform.',
    category: 'Conversational AI',
    tags: ['HTML', 'CSS', 'JavaScript', 'Dialogflow CX', 'GCP'],
    visual: 'chat',
    color: 'lavender',
    problem:
      'Create a chatbot experience with stronger engagement, accurate intent matching, and a clearly documented system design.',
    solution:
      'Led frontend development using vanilla JavaScript, customized the chatbot UI, integrated Dialogflow CX APIs, and designed sequence and ER diagrams.',
    highlights: [
      '30% improvement in user interaction and session engagement',
      '95% intent-matching accuracy',
      '20% reduction in development rework through clearer diagrams',
    ],
  },
]

export const education = [
  {
    title: 'B.Tech in Information Technology',
    place: 'LDRP Institute of Technology · Gandhinagar, Gujarat',
    date: 'Jun 2020 — Apr 2024',
    detail: 'CGPA: 8.28',
  },
]

export const focusAreas = [
  {
    title: 'Full-stack engineering',
    issuer: 'Production features, secure APIs, and multi-tenant systems',
  },
  {
    title: 'Conversational AI',
    issuer: 'Dialogflow CX, context-aware interactions, and GCP',
  },
  {
    title: 'Performance & collaboration',
    issuer: 'API optimization, code reviews, and intern mentoring',
  },
]

// Illustrative placeholders, not verified third-party recommendations.
export const testimonials = [
  {
    quote:
      'Aastha brings a rare mix of technical clarity and genuine care for the user. She turns an ambitious idea into something the whole team is proud to ship.',
    name: 'Priya Mehta',
    role: 'Product Manager, Nova Digital',
    initials: 'PM',
    tone: 'sage',
  },
  {
    quote:
      'Thoughtful questions, clean code, and a real sense of ownership. Working with her made even the complex parts of our project feel manageable.',
    name: 'Alex Chen',
    role: 'Engineering Lead, Brightside Labs',
    initials: 'AC',
    tone: 'lavender',
  },
  {
    quote:
      'She understands that a great experience is in the details. Our conversational flow became simpler, warmer, and so much more useful.',
    name: 'Sam Rivera',
    role: 'Product Designer, Pixel & Co.',
    initials: 'SR',
    tone: 'sand',
  },
] as const
