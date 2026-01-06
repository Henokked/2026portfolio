import { CaseStudy, Experience } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'odecraft',
    caption: 'FINANCE & CORPORATE OPS',
    title: 'Odecraft: A Versatile expense management solution',
    subtitle: 'The flexible platform designed to handle corporate finances, personal expenses, and global compliance with ease.',
    tags: ['SaaS App', 'Enterprise', 'Fintech'],
    metrics: [
      { value: '45%', label: 'Efficiency Gain' },
      { value: 'Global', label: 'Compliance' }
    ],
    // Image matching the Laptop mockup dashboard style
    image: '/images/cover/cover.jpg',
    gallery: [
      '/images/Detail/hero.jpg',
      '/images/Detail/bento.png',
      '/images/Detail/card.jpg',
      '/images/Detail/footer.jpg',
    ],
    description: 'Developed an end-to-end dashboard for handling large-scale corporate finance, focusing on real-time expense tracking and multi-tier approval workflows.',
    company: 'Odecraft',
    industry: 'Finance & Corporate Ops',
    date: 'Mar 2025',
    tools: ['Figma', 'photoshop'],
    services: ['Expense Management', 'Real-time Tracking', 'Compliance'],
  },
  {
    id: 'mycampus',
    caption: 'STUDENT ECOSYSTEM',
    title: 'MyCampus: Your University, In Your Pocket',
    subtitle: 'The easiest way for students to manage their academic life, from classes to exam tracking.',
    tags: ['Mobile UI', 'Product Strategy', 'UX Research'],
    metrics: [
      { value: '85%', label: 'Student Adoption' },
      { value: '4.9', label: 'App Store Rating' }
    ],
    // Image matching the blue/white multi-phone mockup style
    image:'/images/cover/mycampus.jpg',
     gallery: [
      '/images/Detail/mycampusscreen1.png',
      '/images/Detail/schedule.png',
      '/images/Detail/grade.png',
      '/images/Detail/course.png',
    ],
  
    description: 'Designed a unified mobile experience for higher education, centralizing schedules, grades, and campus events into an intuitive, book-inspired interface.',
    company: 'MyCampus',    industry: 'Student Ecosystem',
    date: 'Aug 2025',
    tools: ['Figma', 'photoshop', 'Illustrator'],
    services: ['Product Strategy', 'Mobile UX', 'Student Engagement'],    features: [
      'Unified schedule & grade overview with context-aware notifications',
      'Event discovery & campus newsfeed with RSVP',
      'Book-inspired UI for quick navigation and study flow',
      'Offline access to schedules and grade summaries'
    ],
    impact: [
      '85% student adoption during pilot semester',
      '70% of users engage weekly' ,
      'Average session length doubled, improving retention',
      'Reduced administrative friction and faster student workflows'
    ],
    conclusion: 'MyCampus proved a simple, student-centered mobile experience can materially improve engagement and reduce administrative friction by combining schedules, grades, and community features.',
  },
  {
    id: 'pulseplay',
    caption: 'MEDIA & STREAMING',
    title: "PulsePlay: Let's stream to the max",
    subtitle: 'A high-fidelity streaming interface designed for ultimate content discovery and premium membership growth.',
    tags: ['B2C', 'Entertainment', 'Motion Design'],
    metrics: [
      { value: '2.4x', label: 'Watch Time' },
      { value: '25%', label: 'Subs Growth' }
    ],
    // Image matching the dark phone mockup with bright thumbnails
    image:'/images/cover/pulseplay.jpg',
     gallery: [
      '/images/Detail/ppcover.jpg',
      '/images/Detail/sign.jpg',
      '/images/Detail/Home.jpg',
      '/images/Detail/xc.jpg',
    ],
  
    description: 'Redesigned the core viewing experience for PulsePlay, introducing personalized discovery feeds and a streamlined billing flow for international subscribers.',
    company: 'PulsePlay',
    industry: 'Media & Streaming',
    date: 'May 2024',
    tools: ['Figma', 'After Effects', 'React'],
    services: ['Discovery', 'Motion Design', 'Subscription Growth'],
    features: [
      'Personalized discovery feed and curated playlists',
      'Flexible international billing & subscription flows',
      'Low-latency adaptive playback for mobile and web',
      'Smart recommendations driven by user behavior'
    ],
    impact: [
      '2.4x increase in watch time',
      '25% growth in subscriptions post-launch',
      '40% lift in content discovery interactions',
      'Reduced churn through personalized engagement'
    ],
    conclusion: 'PulsePlay shows how combining personalization with a frictionless billing and playback experience can drive watch time and subscription growth.',
  },
  {
    id: 'student-payments',
    caption: 'PRODUCT MANAGEMENT',
    title: 'Protask: Product Management Simplified',
    subtitle: 'Streamline workflows, track progress, and deliver products faster with intuitive project tools',
    tags: ['Product management', 'Dashboard', 'Agile'],
    metrics: [
      { value: '90%', label: 'FASTER DELIVERY' },
      { value: '500+', label: 'TEAMS SUPPORTED' }
    ],
    // Image matching the hand-held phone mockup with currency symbols
    image: '/images/cover/protask.png',
      gallery: [
      '/images/Detail/dash.png',
      '/images/Detail/message.png',
      '/images/Detail/project.png',
      '/images/Detail/analytics.png',
    ],

    description: 'ProTask is an all-in-one product management ecosystem designed to eliminate the friction between strategy, design, and development. Developed to solve the "fragmented tool" problem by providing a high-visibility interface.',
    company: 'ProTask',
    industry: 'Product Management',
    date: 'Oct 2024',
    tools: [ 'Figma', 'photoshop',],
    services: ['Roadmapping', 'Sprint Planning', 'Reporting'],
    features: [
      'Backlog Management',
      'Sprint Planning',
      'Real-time Collaboration',
      'Advanced Reporting & Analytics'
    ],
    impact: [
      'Increased team velocity by 40%',
      'Reduced time-to-market',
      'Improved stakeholder visibility',
      'Better resource allocation'
    ],
    conclusion: 'ProTask successfully transforms the product management experience from a chaotic, multi-tool juggle into a streamlined, single-flow process. By addressing the root cause of project delays information fragmentation the platform has proven that when teams have a clear, unified source of truth, they don’t just work harder; they work smarter.',
    dashboardCaption: 'Project dashboard showing release progress, sprint burndown, issue heatmaps, team velocity and cross-team dependencies for faster decision making.'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Esafe IT Solutions',
    period: '2023 - Present',
    role: 'UI/UX Designer',
    type: 'Full-time',
    team: 'Product Design • Addis Ababa',
    projects: ['Security Dashboard', 'Enterprise UX Audit', 'Interactive Prototyping'],
    scope: ['User Research', 'Wireframing', 'Figma Prototyping', 'Product Strategy', 'Usability Testing']
  },
  {
    company: 'Zolar Trading',
    period: '2022 - 2023',
    role: 'UI / UX Designer',
    type: 'Full-time',
    team: 'Mobile & Web Team',
    projects: ['UI Libraries', 'Competitive Analysis', 'User Testing'],
    scope: ['Style Guides', 'UI Components', 'Visual Design', 'Interaction Design']
  }
];

export const EDUCATION = [
  {
    school: 'Addis Ababa University',
    degree: 'B.Sc. in IT and Engineering',
    year: '2023'
  },
  {
    school: 'Evangadi Inc',
    degree: 'Fullstack Development',
    year: '2023'
  }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://et.linkedin.com/in/henok-edmealem-21a976197' },
  { name: 'Behance', url: 'https://behance.net/henok-ed' },
  { name: 'Resume', url: 'https://drive.google.com/file/d/1lhOdQ2xe3IAmDO5R3T-A_RX12ngslN76/view' },
  { name: 'Phone', url: 'tel:+251920958682' },
  { name: 'Email', url: 'mailto:henok0ed@gmail.com' }
];