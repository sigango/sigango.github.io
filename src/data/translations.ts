export type Language = 'en' | 'de';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    experience: string;
    projects: string;
    research: string;
    skills: string;
    aiLab: string;
    blog: string;
    contact: string;
  };
  // Hero
  hero: {
    greeting: string;
    summary: string;
    viewProjects: string;
    viewResearch: string;
    contactMe: string;
    downloadCV: string;
  };
  // About
  about: {
    title: string;
    subtitle: string;
    focusLabel: string;
    missionLabel: string;
  };
  // Experience
  experience: {
    title: string;
    subtitle: string;
  };
  // Projects
  projects: {
    title: string;
    subtitle: string;
    all: string;
    details: string;
    problem: string;
    approach: string;
    outcome: string;
    techStack: string;
    categories: string;
    github: string;
    liveDemo: string;
  };
  // Research
  research: {
    title: string;
    subtitle: string;
    publishedPaper: string;
    readPaper: string;
    googleScholar: string;
    moreComingSoon: string;
  };
  // Skills
  skills: {
    title: string;
    subtitle: string;
  };
  // AI Lab
  aiLab: {
    title: string;
    subtitle: string;
    tabs: {
      pipeline: string;
      research: string;
      insight: string;
    };
  };
  // Blog
  blog: {
    title: string;
    subtitle: string;
    comingSoon: string;
    comingSoonDescription: string;
    draft: string;
  };
  // Contact
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    send: string;
  };
  // Footer
  footer: {
    rights: string;
  };
  // Common
  common: {
    learnMore: string;
  };
  // CV Pipeline
  cvPipeline: {
    title: string;
    subtitle: string;
  };
  // Research Ideas
  researchIdeas: {
    title: string;
    subtitle: string;
    generate: string;
    generating: string;
  };
  // Model Insight
  modelInsight: {
    title: string;
    subtitle: string;
  };
}

// ——————————————————————————————————————————————————————————
// EDIT YOUR ENGLISH TEXT HERE
// ——————————————————————————————————————————————————————————
const en: Translations = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    research: 'Research',
    skills: 'Skills',
    aiLab: 'AI Lab',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hello, I'm",
    summary:
      'Building intelligent systems at the intersection of computer vision, multimodal AI, and research-driven software engineering. Focused on turning deep technical insight into impactful, deployable solutions.',
    viewProjects: 'View Projects',
    viewResearch: 'View Research',
    contactMe: 'Contact Me',
    downloadCV: 'Download CV',
  },
  about: {
    title: 'About',
    subtitle: 'Building at the intersection of AI research and engineering',
    focusLabel: 'Research & Engineering Focus',
    missionLabel: 'Mission',
  },
  experience: {
    title: 'Experience',
    subtitle: 'Professional journey in AI and software engineering',
  },
  projects: {
    title: 'Projects',
    subtitle: 'Research-driven AI systems and software engineering',
    all: 'All',
    details: 'Details',
    problem: 'Problem',
    approach: 'Technical Approach',
    outcome: 'Outcome',
    techStack: 'Tech Stack',
    categories: 'Categories',
    github: 'GitHub',
    liveDemo: 'Live Demo',
  },
  research: {
    title: 'Research & Publication',
    subtitle: 'Contributing to the body of knowledge in AI and computer vision',
    publishedPaper: 'Published Paper',
    readPaper: 'Read Paper',
    googleScholar: 'Google Scholar',
    moreComingSoon: 'More publications coming soon',
  },
  skills: {
    title: 'Skills & Technologies',
    subtitle: 'Technical toolkit spanning AI research and software engineering',
  },
  aiLab: {
    title: 'AI & Computer Vision Lab',
    subtitle: 'Interactive explorations in AI systems, explainability, and research',
    tabs: {
      pipeline: 'CV Pipeline',
      research: 'Research Ideas',
      insight: 'Model Insight',
    },
  },
  blog: {
    title: 'Blog',
    subtitle: 'Thoughts on AI research, computer vision, and engineering',
    comingSoon: 'Coming Soon',
    comingSoonDescription: 'I\'m currently working on in-depth articles about AI, computer vision, and research methodology. Stay tuned!',
    draft: 'Draft',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "Let's discuss AI, research, or engineering opportunities",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'Tell me about your project, research idea, or opportunity...',
    send: 'Send Message',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  common: {
    learnMore: 'Learn More',
  },
  cvPipeline: {
    title: 'Computer Vision Pipeline Explorer',
    subtitle: 'Walk through a typical CV inference pipeline step by step',
  },
  researchIdeas: {
    title: 'AI Research Idea Generator',
    subtitle: 'Explore curated research directions in AI and computer vision',
    generate: 'Generate Ideas',
    generating: 'Generating...',
  },
  modelInsight: {
    title: 'Model Insight Demo',
    subtitle: 'Explore different explainability techniques for neural network decisions',
  },

};

// ——————————————————————————————————————————————————————————
// EDIT YOUR GERMAN TEXT HERE
// ——————————————————————————————————————————————————————————
const de: Translations = {
  nav: {
    about: 'Über mich',
    experience: 'Erfahrung',
    projects: 'Projekte',
    research: 'Forschung',
    skills: 'Kompetenzen',
    aiLab: 'KI-Labor',
    blog: 'Blog',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    summary:
      'Entwicklung intelligenter Systeme an der Schnittstelle von Computer Vision, multimodaler KI und forschungsgetriebener Softwareentwicklung. Mit dem Fokus darauf, tiefgreifende technische Erkenntnisse in wirkungsvolle, einsetzbare Lösungen umzusetzen.',
    viewProjects: 'Projekte ansehen',
    viewResearch: 'Forschung ansehen',
    contactMe: 'Kontakt',
    downloadCV: 'Lebenslauf',
  },
  about: {
    title: 'Über mich',
    subtitle: 'An der Schnittstelle von KI-Forschung und Softwareentwicklung',
    focusLabel: 'Forschungs- & Entwicklungsschwerpunkte',
    missionLabel: 'Mission',
  },
  experience: {
    title: 'Erfahrung',
    subtitle: 'Beruflicher Werdegang in KI und Softwareentwicklung',
  },
  projects: {
    title: 'Projekte',
    subtitle: 'Forschungsgetriebene KI-Systeme und Softwareentwicklung',
    all: 'Alle',
    details: 'Details',
    problem: 'Problemstellung',
    approach: 'Technischer Ansatz',
    outcome: 'Ergebnis',
    techStack: 'Technologien',
    categories: 'Kategorien',
    github: 'GitHub',
    liveDemo: 'Live-Demo',
  },
  research: {
    title: 'Forschung & Publikation',
    subtitle: 'Beiträge zum Wissensstand in KI und Computer Vision',
    publishedPaper: 'Veröffentlichter Artikel',
    readPaper: 'Artikel lesen',
    googleScholar: 'Google Scholar',
    moreComingSoon: 'Weitere Publikationen in Vorbereitung',
  },
  skills: {
    title: 'Kompetenzen & Technologien',
    subtitle: 'Technisches Repertoire über KI-Forschung und Softwareentwicklung hinweg',
  },
  aiLab: {
    title: 'KI- & Computer-Vision-Labor',
    subtitle: 'Interaktive Erkundungen in KI-Systemen, Erklärbarkeit und Forschung',
    tabs: {
      pipeline: 'CV-Pipeline',
      research: 'Forschungsideen',
      insight: 'Modellanalyse',
    },
  },
  blog: {
    title: 'Blog',
    subtitle: 'Gedanken zu KI-Forschung, Computer Vision und Softwareentwicklung',
    comingSoon: 'Demnächst verfügbar',
    comingSoonDescription: 'Ich arbeite derzeit an fundierten Artikeln über KI, Computer Vision und Forschungsmethodik. Bleiben Sie dran!',
    draft: 'Entwurf',
  },
  contact: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Lassen Sie uns über KI, Forschung oder Ingenieursprojekte sprechen',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    namePlaceholder: 'Ihr Name',
    emailPlaceholder: 'ihre.email@beispiel.de',
    messagePlaceholder: 'Erzählen Sie mir von Ihrem Projekt, Ihrer Forschungsidee oder Gelegenheit...',
    send: 'Nachricht senden',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
  common: {
    learnMore: 'Mehr erfahren',
  },
  cvPipeline: {
    title: 'Computer-Vision-Pipeline-Explorer',
    subtitle: 'Durchlaufen Sie eine typische CV-Inferenz-Pipeline Schritt für Schritt',
  },
  researchIdeas: {
    title: 'KI-Forschungsideen-Generator',
    subtitle: 'Kuratierte Forschungsrichtungen in KI und Computer Vision erkunden',
    generate: 'Ideen generieren',
    generating: 'Wird generiert...',
  },
  modelInsight: {
    title: 'Modellanalyse-Demo',
    subtitle: 'Verschiedene Erklärbarkeitstechniken für neuronale Netze erkunden',
  },

};

export const translations: Record<Language, Translations> = { en, de };
