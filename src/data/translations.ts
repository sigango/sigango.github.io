export type Language = 'en' | 'de';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    education: string;
    experience: string;
    projects: string;
    research: string;
    skills: string;
    aiLab: string;
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
  // Education
  education: {
    title: string;
    subtitle: string;
  };
  // Academic Engagement
  academicEngagement: {
    title: string;
    subtitle: string;
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
    themesTitle: string;
    themesSubtitle: string;
    publicationTitle: string;
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
  // Process
  process: {
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
  // HR / Executive View
  hrView: {
    badge: string;
    switchTitle: string;
    switchDesc: string;
    switchToInteractive: string;
    switchToHR: string;
    downloadCV: string;
    copyEmail: string;
    copied: string;
    print: string;
    executiveSummary: string;
    educationTitle: string;
    academicEngagementTitle: string;
    experienceTitle: string;
    researchProjectsTitle: string;
    publicationsTitle: string;
    skillsTitle: string;
    contactTitle: string;
    statusBadge: string;
    quickStats: {
      currentRole: string;
      degree: string;
      publications: string;
      focus: string;
    };
  };
}

// ——————————————————————————————————————————————————————————
// ENGLISH TEXT
// ——————————————————————————————————————————————————————————
const en: Translations = {
  nav: {
    about: 'About',
    education: 'Education',
    experience: 'Experience',
    projects: 'Projects',
    research: 'Research',
    skills: 'Skills',
    aiLab: 'AI Lab',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hello, I'm",
    summary:
      'MSc AI/ML student at TU Darmstadt and Computer Vision Researcher at Fraunhofer SIT. Pioneering explainable artificial intelligence, robust visual perception, and dense prediction models for safety-critical systems.',
    viewProjects: 'View Research & Projects',
    viewResearch: 'Research Focus',
    contactMe: 'Contact Me',
    downloadCV: 'Download Resume',
  },
  about: {
    title: 'Research Profile',
    subtitle: 'Advancing trustworthy visual intelligence through rigorous theory and scalable engineering',
    focusLabel: 'Core Research Areas',
    missionLabel: 'Research Philosophy',
  },
  education: {
    title: 'Education',
    subtitle: 'Academic foundation across leading European & international institutions',
  },
  academicEngagement: {
    title: 'Academic Engagement & Honors',
    subtitle: 'Selective researcher networks, international representation, and research bootcamps',
  },
  experience: {
    title: 'Work Experience',
    subtitle: 'Applied AI research, security engineering, and production systems',
  },
  projects: {
    title: 'Research Projects & Case Studies',
    subtitle: 'Novel architectures, benchmark investigations, and safety-critical vision systems',
    all: 'All',
    details: 'Details',
    problem: 'Problem Statement',
    approach: 'Methodology & Architecture',
    outcome: 'Key Results & Evaluation',
    techStack: 'Tech Stack',
    categories: 'Categories',
    github: 'GitHub',
    liveDemo: 'Paper / Project Link',
  },
  research: {
    title: 'Research Themes & Publications',
    subtitle: 'Explainable AI, metric faithfulness, demographic fairness, and physics-informed models',
    themesTitle: 'Core Research Pillars',
    themesSubtitle: 'Active theoretical and empirical directions',
    publicationTitle: 'Peer-Reviewed Publication',
    publishedPaper: 'Springer Nature Article',
    readPaper: 'Read on Springer',
    googleScholar: 'Google Scholar Profile',
    moreComingSoon: 'Additional manuscripts currently in preparation',
  },
  skills: {
    title: 'Technical Skills & Toolkit',
    subtitle: 'Comprehensive toolkit spanning deep learning research and scalable software engineering',
  },
  process: {
    title: 'Research & Engineering Pipeline',
    subtitle: 'Rigorous methodology from theoretical formulation to verifiable deployment',
  },
  aiLab: {
    title: 'Interactive 3D AI & Vision Lab',
    subtitle: 'Interactive 3D convolutional neural network, inference pipeline, and explainability exploration',
    tabs: {
      pipeline: 'CV Pipeline & 3D CNN',
      research: 'Research Directions',
      insight: 'Model Insight (XAI)',
    },
  },
  blog: {
    title: 'Research Notes & Writing',
    subtitle: 'Drafts, technical explorations, and thoughts on AI systems',
    comingSoon: 'Coming Soon',
    comingSoonDescription: 'Currently drafting technical deep-dives into explainable AI, robust vision models, and engineering infrastructure. Check back shortly.',
    draft: 'Draft in Progress',
  },
  contact: {
    title: 'Get in Touch',
    subtitle: "Let's discuss AI research, computer vision collaborations, or opportunities",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@example.com',
    messagePlaceholder: 'Tell me about your team, research idea, or opportunity...',
    send: 'Send Message',
  },
  footer: {
    rights: 'All rights reserved.',
  },
  common: {
    learnMore: 'Learn More',
  },
  cvPipeline: {
    title: 'Computer Vision Inference Pipeline',
    subtitle: 'Explore the internal layers, activations, and XAI verification of modern visual recognition',
  },
  researchIdeas: {
    title: 'AI Research Direction Explorer',
    subtitle: 'Explore curated forward-looking problems in explainability, robustness, and multimodal perception',
    generate: 'Generate Directions',
    generating: 'Synthesizing...',
  },
  modelInsight: {
    title: 'Model Insight & XAI Verification',
    subtitle: 'Compare Saliency Maps, Grad-CAM, and feature activations with live neural scanning',
  },
  hrView: {
    badge: 'HR / Recruiter Executive Mode',
    switchTitle: 'Streamlined Executive View',
    switchDesc: 'Fast, clean, high-density view tailored for hiring managers and recruiters without 3D animation overhead.',
    switchToInteractive: 'Switch to 3D Interactive Lab',
    switchToHR: 'HR / Executive View',
    downloadCV: 'Download Resume (PDF)',
    copyEmail: 'Copy Email',
    copied: 'Email Copied!',
    print: 'Print / Save PDF',
    executiveSummary: 'Executive Profile & Research Statement',
    educationTitle: 'Education',
    academicEngagementTitle: 'Academic Engagement & Honors',
    experienceTitle: 'Professional & Research Experience',
    researchProjectsTitle: 'Featured Research Projects & Preprints',
    publicationsTitle: 'Peer-Reviewed Publications',
    skillsTitle: 'Technical Toolkit & Competencies',
    contactTitle: 'Direct Contact Information',
    statusBadge: 'Open for research & engineering collaborations',
    quickStats: {
      currentRole: 'M.Sc. AI/ML @ TU Darmstadt & RA @ Fraunhofer SIT',
      degree: 'M.Sc. Artificial Intelligence & Machine Learning',
      publications: 'Discover AI (Springer Nature, 2025)',
      focus: 'Explainable AI, Computer Vision, Object Detection',
    },
  },
};

// ——————————————————————————————————————————————————————————
// GERMAN TEXT
// ——————————————————————————————————————————————————————————
const de: Translations = {
  nav: {
    about: 'Über mich',
    education: 'Ausbildung',
    experience: 'Erfahrung',
    projects: 'Projekte',
    research: 'Forschung',
    skills: 'Kompetenzen',
    aiLab: 'KI-Labor',
    contact: 'Kontakt',
  },
  hero: {
    greeting: 'Hallo, ich bin',
    summary:
      'MSc-Student in AI/ML an der TU Darmstadt und Computer Vision Researcher am Fraunhofer SIT. Forschung an erklärbarer KI, robuster visueller Wahrnehmung und dichten Vorhersagemodellen für sicherheitskritische Systeme.',
    viewProjects: 'Forschung & Projekte ansehen',
    viewResearch: 'Forschungsschwerpunkte',
    contactMe: 'Kontakt',
    downloadCV: 'Lebenslauf herunterladen',
  },
  about: {
    title: 'Forschungsprofil',
    subtitle: 'Entwicklung vertrauenswürdiger visueller Intelligenz durch Theorie und skalierbare Systeme',
    focusLabel: 'Zentrale Forschungsgebiete',
    missionLabel: 'Forschungsphilosophie',
  },
  education: {
    title: 'Akademische Ausbildung',
    subtitle: 'Wissenschaftliche Grundlage an führenden europäischen und internationalen Institutionen',
  },
  academicEngagement: {
    title: 'Akademisches Engagement & Auszeichnungen',
    subtitle: 'Forschungsnetzwerke, internationale Repräsentanz und Research Bootcamps',
  },
  experience: {
    title: 'Berufserfahrung',
    subtitle: 'Angewandte KI-Forschung, Sicherheitstechnik und produktive Systeme',
  },
  projects: {
    title: 'Forschungsprojekte & Fallstudien',
    subtitle: 'Neuartige Architekturen, Benchmark-Analysen und sicherheitskritische Bildverarbeitung',
    all: 'Alle',
    details: 'Details',
    problem: 'Problemstellung',
    approach: 'Methodik & Architektur',
    outcome: 'Wichtigste Ergebnisse & Evaluation',
    techStack: 'Technologien',
    categories: 'Kategorien',
    github: 'GitHub',
    liveDemo: 'Publikation / Projektlink',
  },
  research: {
    title: 'Forschungsschwerpunkte & Publikationen',
    subtitle: 'Erklärbare KI, Metrik-Zuverlässigkeit, demografische Fairness und physik-informierte Modelle',
    themesTitle: 'Zentrale Forschungssäulen',
    themesSubtitle: 'Aktive theoretische und empirische Richtungen',
    publicationTitle: 'Peer-Reviewed Publikation',
    publishedPaper: 'Springer Nature Artikel',
    readPaper: 'Bei Springer lesen',
    googleScholar: 'Google Scholar Profil',
    moreComingSoon: 'Weitere Manuskripte in Vorbereitung',
  },
  skills: {
    title: 'Kompetenzen & Technologien',
    subtitle: 'Umfassendes Repertoire über Deep-Learning-Forschung und skalierbare Softwareentwicklung hinweg',
  },
  process: {
    title: 'Forschungs- & Entwicklungsprozess',
    subtitle: 'Rigorose Methodik von der theoretischen Modellierung bis zum produktiven Einsatz',
  },
  aiLab: {
    title: 'Interaktives 3D-KI-Labor',
    subtitle: 'Interaktives 3D-CNN, Inferenz-Pipeline und Erklärbarkeits-Visualisierungen',
    tabs: {
      pipeline: 'CV-Pipeline & 3D-CNN',
      research: 'Forschungsrichtungen',
      insight: 'Modellanalyse (XAI)',
    },
  },
  blog: {
    title: 'Forschungsnotizen',
    subtitle: 'Entwürfe, technische Untersuchungen und Gedanken zu KI-Systemen',
    comingSoon: 'Demnächst verfügbar',
    comingSoonDescription: 'Derzeit entwerfe ich technische Deep-Dives zu erklärbarer KI, robusten Vision-Modellen und Software-Infrastruktur. Schauen Sie bald wieder vorbei.',
    draft: 'Entwurf in Bearbeitung',
  },
  contact: {
    title: 'Kontakt aufnehmen',
    subtitle: 'Lassen Sie uns über KI-Forschung, Computer-Vision-Projekte oder Möglichkeiten sprechen',
    name: 'Name',
    email: 'E-Mail',
    message: 'Nachricht',
    namePlaceholder: 'Ihr Name',
    emailPlaceholder: 'ihre.email@beispiel.de',
    messagePlaceholder: 'Erzählen Sie mir von Ihrem Team, Ihrer Forschungsidee oder Gelegenheit...',
    send: 'Nachricht senden',
  },
  footer: {
    rights: 'Alle Rechte vorbehalten.',
  },
  common: {
    learnMore: 'Mehr erfahren',
  },
  cvPipeline: {
    title: 'Computer-Vision-Inferenz-Pipeline',
    subtitle: 'Erkunden Sie Schichten, Aktivierungen und XAI-Verifikation moderner Bildverarbeitung',
  },
  researchIdeas: {
    title: 'KI-Forschungsrichtungen-Explorer',
    subtitle: 'Zukunftsweisende Fragestellungen in Erklärbarkeit, Robustheit und multimodaler Wahrnehmung',
    generate: 'Richtungen generieren',
    generating: 'Wird synthetisiert...',
  },
  modelInsight: {
    title: 'Modellanalyse & XAI-Verifikation',
    subtitle: 'Vergleichen Sie Saliency Maps, Grad-CAM und Aktivierungen mit Live-Neuronalem Scan',
  },
  hrView: {
    badge: 'HR / Recruiter Kompaktmodus',
    switchTitle: 'Optimierte Kompaktansicht',
    switchDesc: 'Schnelle, übersichtliche Darstellung speziell für Recruiter und Hiring Manager ohne 3D-Grafiken.',
    switchToInteractive: 'Zum interaktiven 3D-Labor wechseln',
    switchToHR: 'HR / Kompaktansicht',
    downloadCV: 'Lebenslauf (PDF) herunterladen',
    copyEmail: 'E-Mail kopieren',
    copied: 'E-Mail kopiert!',
    print: 'Drucken / PDF speichern',
    executiveSummary: 'Wissenschaftliches Profil & Zusammenfassung',
    educationTitle: 'Akademische Ausbildung',
    academicEngagementTitle: 'Akademisches Engagement & Auszeichnungen',
    experienceTitle: 'Berufs- & Forschungserfahrung',
    researchProjectsTitle: 'Ausgewählte Forschungsprojekte & Preprints',
    publicationsTitle: 'Peer-Reviewed Publikationen',
    skillsTitle: 'Technisches Profil & Kernkompetenzen',
    contactTitle: 'Direkter Kontakt',
    statusBadge: 'Offen für Forschungs- und Industrie-Kollaborationen',
    quickStats: {
      currentRole: 'M.Sc. AI/ML @ TU Darmstadt & WiMi @ Fraunhofer SIT',
      degree: 'M.Sc. Artificial Intelligence & Machine Learning',
      publications: 'Discover AI (Springer Nature, 2025)',
      focus: 'Erklärbare KI, Computer Vision, Objekterkennung',
    },
  },
};

export const translations: Record<Language, Translations> = { en, de };
