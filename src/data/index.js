export const profile = {
  name: 'Ridwan Syambudi',
  role: 'Fullstack Developer',
  tagline: 'Mobile · Frontend · Backend',
  bio: 'Building end-to-end digital products — from pixel-perfect mobile UIs to robust backend systems. 4+ years shipping production apps across fintech, gov-tech, and edu-tech.',
  phone: '0821-2471-7778',
  email: 'syammridwan@gmail.com',
  location: 'Kalisuren, Bogor',
  github: 'https://github.com/ridwansyambudi',
  stats: [
    { num: '4+', label: 'Years Exp' },
    { num: '5k+', label: 'Users Served' },
    { num: '4', label: 'Companies' },
    { num: '10+', label: 'Tech Stack' },
  ],
}

export const experiences = [
  {
    role: 'Mobile Developer',
    type: 'Freelance',
    company: 'PT. WATERPRO',
    period: 'Des 2025 — Present',
    bullets: [
      'Developed a comprehensive Attendance & Operational System using Flutter with GPS geolocation and geofencing for 100% field staff accuracy.',
      'Implemented secure payment gateway integration for seamless in-app transactions and utility billing.',
      'Built an Inventory & Reporting module to track real-time stock levels and goods distribution.',
      'Architected end-to-end mobile solutions syncing field operational data with central databases for streamlined billing.',
    ],
  },
  {
    role: 'Backend Developer',
    type: null,
    company: 'Jakarta Government IT',
    period: 'Mar 2025 — Sep 2025',
    bullets: [
      'Designed role-based access control (RBAC) for internal staff and public access levels, securing 300+ user accounts.',
      'Implemented JWT authentication with issuer/audience validation and multi-tenant guards for secure data isolation.',
      'Optimized database queries with batched operations, transactions, and Redis caching to improve API response time.',
      'Deployed comprehensive observability with Winston logger and request tracing, reducing debug time by 45%.',
    ],
  },
  {
    role: 'Frontend Mobile Developer',
    type: null,
    company: 'PT. Teluk Mas',
    period: 'Mar 2024 — Feb 2025',
    bullets: [
      'Modernized dashboards and developed HRM mobile applications serving 200+ active users.',
      'Upgraded tech stack to React + Vite, improving performance by 40% and reducing load time by 60%.',
      'Integrated RESTful APIs with optimized data fetching, reducing server calls by 35%.',
    ],
  },
  {
    role: 'Frontend & Mobile Developer',
    type: null,
    company: 'Karya Riset Inovasi Sains',
    period: 'Mei 2022 — Des 2024',
    bullets: [
      'Maintained multiple mobile apps (React Native & Flutter) and web dashboards for 5,000+ users in education.',
      'Built an Attendance System with facial recognition and GPS validation for 3,000+ students and teachers.',
      'Migrated React Native codebase to Flutter, reducing app size by 30% and improving startup time by 40%.',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Attendance & Ops System',
    category: ['mobile'],
    icon: '📍',
    theme: 'mobile',
    stack: ['Flutter', 'GPS/Geofencing', 'Payment Gateway', 'REST API'],
    desc: 'GPS-based geofencing attendance system for field staff at PT. WATERPRO. Includes real-time location tracking, utility billing, and inventory reporting module.',
    link: null,
  },
  {
    id: 2,
    title: 'Gov-Tech API System',
    category: ['backend'],
    icon: '🔐',
    theme: 'backend',
    stack: ['Node.js', 'TypeScript', 'JWT/RBAC', 'Redis', 'PostgreSQL'],
    desc: 'Secure multi-tenant backend for Jakarta Government IT. RBAC with 300+ user accounts, JWT auth, Redis caching, and full observability via Winston logger.',
    link: null,
  },
  {
    id: 3,
    title: 'HRM Dashboard & App',
    category: ['web', 'mobile'],
    icon: '👥',
    theme: 'web',
    stack: ['React', 'Vite', 'Flutter', 'REST API'],
    desc: 'Human Resource Management system serving 200+ active users. Modernized with React + Vite for 40% performance boost and 60% faster load time.',
    link: null,
  },
  {
    id: 4,
    title: 'Smart Attendance — EduTech',
    category: ['mobile'],
    icon: '🎓',
    theme: 'mobile',
    stack: ['Flutter', 'Face Recognition', 'GPS Validation'],
    desc: 'Facial recognition + GPS attendance for 3,000+ students and teachers. Migrated from React Native to Flutter — 30% smaller app, 40% faster startup.',
    link: null,
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: ['web'],
    icon: '🌐',
    theme: 'web',
    stack: ['React', 'Vite', 'CSS'],
    desc: 'This portfolio — built with Vite + React. Dark terminal aesthetic with neon accents, smooth scroll animations, and fully responsive layout.',
    link: 'https://github.com/ridwansyambudi',
  },
  {
    id: 6,
    title: 'Inventory & Reporting Module',
    category: ['mobile', 'backend'],
    icon: '📦',
    theme: 'backend',
    stack: ['Flutter', 'Node.js', 'MySQL', 'WebSocket'],
    desc: 'Real-time stock tracking and goods distribution synced with central DB. Live reporting dashboard with WebSocket updates.',
    link: null,
  },
]

export const skills = [
  {
    label: '📱 Mobile',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java'],
  },
  {
    label: '🖥 Frontend',
    tags: ['React', 'Next.js', 'Vite', 'Zustand', 'Tanstack', 'Redux'],
  },
  {
    label: '⚙️ Backend & DB',
    tags: ['Node.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: '🛠 DevOps & Tools',
    tags: ['Docker', 'PM2', 'Firebase', 'WebSocket', 'Gitlab CI/CD'],
  },
]

export const education = {
  degree: 'Sarjana Teknik Informatika',
  school: 'Universitas Pamulang',
  year: '2019 — 2024',
}
