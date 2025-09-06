import { Service, Project, Skill } from './types';
import websiteImg from './components/image/website.png';
import aiAutomationImg from './components/image/ai automation.jpg';
import uiDesignImg from './components/image/uidesign.jpg';
import landingpageImg from './components/image/landingpage.png';

export const SERVICES: Service[] = [
  {
    title: 'Web Design',
    description: 'Professional websites and web apps built for performance and scalability..',
  imageUrl: websiteImg,
  },
  {
    title: 'AI Automation',
    description: 'Streamline your business with smart AI-driven automation solutions.',
  imageUrl: aiAutomationImg,
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful, user-friendly designs that elevate your digital experience',
  imageUrl: uiDesignImg
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Landing Page',
    summary: 'A landing page is a single-page website built to capture attention and turn visitors into clients',
  imageUrl: landingpageImg,
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
  liveLink: 'https://landingpage-aura.vercel.app',
  },
  {
    id: 2,
    title: 'Project Beta',
    summary: 'An AI-powered data visualization tool for market analysis.',
    imageUrl: 'https://picsum.photos/seed/project2/1200/800',
    tags: ['Python', 'D3.js', 'API'],
    liveLink: '',
  },
  {
    id: 3,
    title: 'Project Gamma',
    summary: 'A comprehensive brand identity and website for a new startup.',
    imageUrl: 'https://picsum.photos/seed/project3/1200/800',
    tags: ['UI/UX', 'Figma', 'Webflow'],
    liveLink: '',
  },
    {
    id: 4,
    title: 'Project Delta',
    summary: 'A mobile-first social networking app for creative professionals.',
    imageUrl: 'https://picsum.photos/seed/project4/1200/800',
    tags: ['React Native', 'Firebase', 'UX Research'],
    liveLink: '',
  },
];

export const SKILLS: Skill[] = [
    { name: 'HTML/CSS', level: 70, description: 'Proficient in modern, responsive layouts and styling.', category: 'core' },
    { name: 'React', level: 65, description: 'Comfortable building dynamic and interactive web applications.', category: 'core' },
    { name: 'Python', level: 65, description: 'Building scripts and automation; expanding into ML projects.', category: 'core' },
    { name: 'JavaScript', level: 40, description: 'Solid understanding of core concepts and ES6+ features.', category: 'core' },
    { name: 'Java', level: 35, description: 'Building foundational knowledge in object-oriented programming.', category: 'core' },
    { name: 'C/C++', level: 30, description: 'Developing a fundamental understanding of systems programming.', category: 'core' },
    { name: 'Forex Trading', level: 80, description: 'Experience in strategy, data-driven analysis, and automation.', category: 'external' },
    { name: 'Stock Markets', level: 75, description: 'Experience in strategy, data-driven analysis, and automation.', category: 'external' },
    { name: 'Automation Workflows', level: 85, description: 'Experience in strategy, data-driven analysis, and automation.', category: 'external' },
];
