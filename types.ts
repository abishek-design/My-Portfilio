export interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  tags: string[];
  liveLink?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  description: string;
  category: 'core' | 'external';
}
