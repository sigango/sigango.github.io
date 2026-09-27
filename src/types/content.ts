export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'scholar' | 'email' | 'website' | 'orcid';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  details?: string[];
}

export interface AcademicEngagement {
  id: string;
  program: string;
  role: string;
  period: string;
  location: string;
  details: string[];
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
  role?: string;
  dateRange?: string;
  status?: string;
  keyPoints?: string[];
  caseStudy?: boolean;
  learnings?: string;
  future?: string;
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
  doi: string;
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
  education: Education[];
  academicEngagement: AcademicEngagement[];
  experiences: Experience[];
  projects: Project[];
  publication: Publication;
  skillCategories: SkillCategory[];
  contactEmail: string;
  contactMessage: string;
  location?: string;
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
