export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'scholar' | 'email';
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location: string;
  dateRange: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  problem: string;
  approach: string;
  techStack: string[];
  outcome: string;
  categories: ProjectCategory[];
  githubUrl: string;
  demoUrl: string;
  // Case Study fields
  caseStudy?: boolean;
  learnings?: string;
  future?: string;
  // Expanding tech stack for case studies
  architectureUrl?: string;
}

export type ProjectCategory =
  | 'Computer Vision'
  | 'Generative AI'
  | 'Multimodal AI'
  | 'Forecasting'
  | 'Research'
  | 'Software Systems';

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  summary: string;
  url: string;
  scholarUrl: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface InterestChip {
  label: string;
  icon?: string;
}

export interface ResearchTheme {
  id: string;
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface EngineeringStep {
  id: string;
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface SiteContent {
  name: string;
  title: string;
  shortSummary: string;
  longAbout: string;
  missionStatement: string;
  profileImage: string;
  cvUrl: string;
  socialLinks: SocialLink[];
  interests: InterestChip[];
  experiences: Experience[];
  projects: Project[];
  publication: Publication;
  skillCategories: SkillCategory[];
  contactEmail: string;
  contactMessage: string;
  formspreeId?: string;
}

export interface ResearchIdea {
  id: string;
  title: string;
  domain: string;
  description: string;
}

export interface CVPipelineStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RAGStage {
  id: string;
  title: string;
  description: string;
  details: string[];
}
