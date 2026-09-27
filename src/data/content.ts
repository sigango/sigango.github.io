import type {
  SiteContent,
  ResearchIdea,
  CVPipelineStep,
  ResearchTheme,
  EngineeringStep,
} from '../types/content';

export const siteContent: SiteContent = {
  name: 'Linh Phuc Ngo',
  title: 'AI Engineer & Computer Vision Researcher',
  shortSummary:
    'MSc student in Artificial Intelligence and Machine Learning at TU Darmstadt & Research Assistant at Fraunhofer SIT. Researching Explainable AI, robust computer vision, and dense visual prediction for safety-critical applications.',
  longAbout:
    'I am an MSc student in Artificial Intelligence and Machine Learning at TU Darmstadt and Research Assistant at Fraunhofer SIT. My research focuses on Explainable Artificial Intelligence for computer vision, with particular interests in evaluating explanation faithfulness, robustness under domain shift, and interpretable methods for object detection and dense visual prediction. I have first-author peer-reviewed publication experience and develop trustworthy AI systems for safety-critical applications in security, public health, and medical imaging.',
  missionStatement:
    'To advance visual perception and explainability algorithms by combining rigorous academic research with trustworthy, production-grade system engineering.',
  profileImage: '/profile.png',
  cvUrl: '/cv.pdf',
  location: 'Darmstadt, Germany',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/sigango', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/linhngo1012/',
      icon: 'linkedin',
    },
    {
      label: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=oNDaKAQAAAAJ&hl=en',
      icon: 'scholar',
    },
    {
      label: 'Website',
      url: 'https://sigango.github.io',
      icon: 'website',
    },
    {
      label: 'Email',
      url: 'mailto:linhph.ngo@gmail.com',
      icon: 'email',
    },
  ],
  interests: [
    { label: 'Explainable AI (XAI)' },
    { label: 'Computer Vision' },
    { label: 'Object Detection' },
    { label: 'Robustness & Domain Shift' },
    { label: 'Physics-Informed ML' },
    { label: 'Trustworthy AI' },
  ],
  education: [
    {
      id: 'edu-1',
      institution: 'Technische Universität Darmstadt',
      degree: 'M.Sc. Artificial Intelligence and Machine Learning',
      period: '04.2024 – 10.2027 (expected)',
      location: 'Darmstadt, Germany',
      details: [
        'Specialization in Computer Vision, Deep Learning, and Trustworthy AI Systems.',
        'Academic grounding in advanced machine learning, neural architectures, and statistical foundations.',
      ],
    },
    {
      id: 'edu-2',
      institution: 'Unite! Research School 2025',
      degree: 'Selected Participant — AI and Cybersecurity Research Bootcamp',
      period: '11.2025',
      location: 'Grenoble, France',
      details: [
        'Developed a unified AI-based framework for ransomware detection as part of the Ransomware use-case.',
      ],
    },
    {
      id: 'edu-3',
      institution: 'Frankfurt University of Applied Sciences',
      degree: 'B.Sc. Informatik',
      period: '10.2020 – 03.2024',
      location: 'Frankfurt am Main, Germany',
      details: [
        'Focused on core computer science foundations, algorithms, systems programming, and software engineering.',
      ],
    },
    {
      id: 'edu-4',
      institution: 'Vietnamese-German University',
      degree: 'B.Sc. Computer Science',
      period: '10.2019 – 12.2023',
      location: 'Binh Duong, Vietnam',
      details: [
        'Graduated with honors; conducted first-author applied computer vision research on remote sensing and aerial surveillance.',
      ],
    },
  ],
  academicEngagement: [
    {
      id: 'acad-1',
      program: 'AI Grid',
      role: 'Selected Member — Micro Focus Group: CV, Medical and Biological Imaging',
      period: '07.2026 – Present',
      location: 'Germany / Europe',
      details: [
        'Selected through a competitive application process for AI Grid, a prestigious network connecting emerging AI researchers with expert communities, mentoring, and interdisciplinary collaboration.',
        'Actively participating in the Micro Focus Group on Computer Vision, Medical and Biological Imaging.',
      ],
    },
    {
      id: 'acad-2',
      program: 'DAAD Programme: Verantwortung und Perspektive',
      role: 'University Representative, Vietnamese-German University',
      period: '04.2026',
      location: 'Berlin, Germany',
      details: [
        'Represented Vietnamese-German University at the programme "Transnationale Bildungsangebote im internationalen Vergleich" at the Berlin-Brandenburg Academy of Sciences and Humanities (BBAW), 13–15 April 2026.',
      ],
    },
    {
      id: 'acad-3',
      program: 'Unite! Research School 2025',
      role: 'Selected Participant — AI and Cybersecurity',
      period: '11.2025',
      location: 'Grenoble and Autrans, France',
      details: [
        'Collaborated on a ransomware-detection use case and developed a unified AI-based framework for ransomware detection.',
      ],
    },
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Research Assistant (Hilfswissenschaftler), AI and Security',
      organization: 'Fraunhofer Institute for Secure Information Technology SIT',
      location: 'Darmstadt, Germany',
      dateRange: '04.2026 – Present',
      achievements: [
        'Conduct computer-vision research for security applications within the AI and Security team, contributing to the DeCNeC project.',
        'Implement and evaluate object-detection models, including YOLO and RF-DETR, through systematic experiments covering dataset construction, preprocessing, training, and benchmarking.',
      ],
      technologies: ['PyTorch', 'YOLO', 'RF-DETR', 'OpenCV', 'DeCNeC', 'Evaluation Benchmarks'],
    },
    {
      id: 'exp-2',
      role: 'Research Assistant',
      organization: 'Vietnamese-German University',
      location: 'Binh Duong, Vietnam',
      dateRange: '01.2024 – Present',
      achievements: [
        'Conduct applied AI research at the intersection of computer vision, remote sensing, public health, and physics-informed neural networks.',
        'Led first-author research on deep-learning-based vector-control surveillance using multispectral UAV imagery.',
      ],
      technologies: ['Remote Sensing', 'PINNs', 'U-Net', 'Multispectral UAV', 'PyTorch'],
    },
    {
      id: 'exp-3',
      role: 'AI Engineer & IT Staff (Working Student)',
      organization: 'Fun Work GmbH',
      location: 'Dreieich, Germany',
      dateRange: '10.2024 – 04.2026',
      achievements: [
        'Developed and deployed a production customer-service chatbot using retrieval-augmented generation (RAG) and the ChatGPT API.',
        'Configured and maintained cloud and on-premise infrastructure supporting production services.',
      ],
      technologies: ['RAG', 'ChatGPT API', 'Cloud Infrastructure', 'Docker', 'Python'],
    },
    {
      id: 'exp-4',
      role: 'Application Administration and Developer Intern',
      organization: 'Vietnamese-German University',
      location: 'Binh Duong, Vietnam',
      dateRange: '01.2023 – 05.2023',
      achievements: [
        'Reviewed, redesigned, and implemented a new university website using PHP and WordPress.',
      ],
      technologies: ['PHP', 'WordPress', 'Web Architecture', 'UI/UX System Design'],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Verified Adaptive Explanations for Object Detection',
      role: 'Independent Research — First Author',
      dateRange: '03.2026 – Present',
      status: 'Manuscript in Preparation',
      summary:
        'A comprehensive evaluation and adaptive escalation framework benchmarking post-hoc explanation methods for object detection across architectures and domain shifts.',
      problem:
        'Post-hoc explanation methods for object detection (Grad-CAM, G-CAME, D-CLOSE, LIME) suffer from unfaithfulness, high computational costs, and systematic evaluation metric bias toward compact Gaussian-shaped saliency maps.',
      approach:
        'Benchmark explanation methods across two detector architectures and six visual domains using localization, perturbation-based faithfulness, saliency-map structure, and computational cost metrics. Designed a quality-verified evaluate-then-escalate pipeline.',
      techStack: ['PyTorch', 'Grad-CAM', 'G-CAME', 'D-CLOSE', 'LIME', 'Object Detection', 'OpenCV'],
      outcome:
        'Discovered critical evaluation metric biases and developed an adaptive explanation pipeline that escalates computationally heavy methods only when cheap initial approximations fail quality verification.',
      categories: ['Computer Vision', 'Research'],
      githubUrl: 'https://github.com/sigango',
      demoUrl: '#',
      caseStudy: true,
      learnings:
        'Discovered that standard faithfulness metrics favor smooth artificial Gaussian priors over true irregular detector reasoning, demonstrating why explanation methods must be verified adaptively before deployment.',
      future:
        'Expanding benchmark to transformer-based vision detectors (RF-DETR, Deformable-DETR) and multimodal vision-language explanation targets.',
    },
    {
      id: 'proj-2',
      title: 'NEC–DINNs: Physics-Informed Forecasting of Dengue Outbreaks',
      role: 'Research Project',
      dateRange: '09.2025 – Present',
      status: 'Ongoing Research',
      summary:
        'Physics-informed deep learning combining epidemiological compartmental dynamics with neural networks for robust, long-term dengue transmission forecasting.',
      problem:
        'Standard data-driven time-series forecasting fails during sudden climate shifts and vector population spikes due to lack of mechanistic physical and biological constraints.',
      approach:
        'Developed and benchmarked Neural Parameter Calibration (NPC), Disease-Informed Neural Networks (DINNs), and Neural Network Calibration–Emulation (NEC) for human–mosquito compartmental models.',
      techStack: ['Python', 'PyTorch', 'DINNs / PINNs', 'Differential Equations', 'NumPy', 'Matplotlib'],
      outcome:
        'Achieved superior forecasting accuracy, robustness, and computational efficiency using real-world dengue surveillance datasets across variable transmission regimes.',
      categories: ['Forecasting', 'Research'],
      githubUrl: 'https://github.com/sigango',
      demoUrl: '#',
      caseStudy: true,
      learnings:
        'Mathematically embedding SIR/SEIR differential equations into the loss landscape regularizes neural network optimization, preventing unrealistic physical forecasting artifacts.',
      future:
        'Fusing multi-spectral satellite imagery to dynamically model vector breeding surface water in real time with the compartmental emulator.',
    },
    {
      id: 'proj-3',
      title: 'Age-Aware Face and Person Detection for Minor-Inclusive Recognition',
      role: 'Fraunhofer SIT Research Project (DeCNeC)',
      dateRange: '04.2026 – Present',
      status: 'Active Security Project',
      summary:
        'Ethically grounded age-aware computer vision components for detecting unknown harmful content involving minors with high precision and demographic fairness.',
      problem:
        'Modern object detectors degrade severely on minor age groups due to acute dataset imbalance, subtle morphological shifts, and lack of fine-grained paired annotations.',
      approach:
        'Constructed a detection-ready dataset with paired face and body bounding boxes and fine-grained age annotations. Trained and benchmarked state-of-the-art YOLO and RF-DETR architectures.',
      techStack: ['PyTorch', 'YOLO', 'RF-DETR', 'OpenCV', 'DeCNeC', 'Benchmarking'],
      outcome:
        'Quantified the exact effects of dataset imbalance on age-aware visual recognition and established reproducible detection benchmarks for safety-critical applications.',
      categories: ['Computer Vision', 'Research'],
      githubUrl: 'https://github.com/sigango',
      demoUrl: '#',
      caseStudy: true,
      learnings:
        'Paired face-body topological constraints significantly stabilize age prediction under partial occlusions and severe perspective distortion.',
      future:
        'Investigating privacy-preserving federated detection pipelines for continuous on-device verification.',
    },
    {
      id: 'proj-4',
      title: 'Detection of Small Water Bodies for Vector Control (Springer 2025)',
      role: 'First Author — Published Research',
      dateRange: 'Published 2025',
      status: 'Peer-Reviewed Paper',
      summary:
        'Deep learning framework integrating UAV multispectral imagery with custom U-Net architectures for automated mosquito breeding habitat surveillance in tropical conditions.',
      problem:
        'Manual surveillance of tropical vector-breeding sites is labor-intensive, hazardous, and covers limited geographical ground.',
      approach:
        'Deployed low-cost UAVs equipped with multispectral sensors, trained customized U-Net and MSNet semantic segmentation models, and evaluated pixel-level water body identification.',
      techStack: ['Python', 'PyTorch', 'U-Net', 'Multispectral UAV', 'Remote Sensing', 'OpenCV'],
      outcome:
        'Published in Discover Artificial Intelligence, 5. Springer Nature (DOI: 10.1007/s44163-025-00422-6). Demonstrated automated habitat surveillance with high spatial precision.',
      categories: ['Computer Vision', 'Research', 'Software Systems'],
      githubUrl: 'https://github.com/sigango',
      demoUrl: 'https://doi.org/10.1007/s44163-025-00422-6',
    },
    {
      id: 'proj-5',
      title: 'Cross-Modal Adversarial Robustness in Vision-Language Models (CLIPCap)',
      role: 'Research Exploration',
      dateRange: '2024',
      status: 'Completed',
      summary:
        'Adversarial study exploring data poisoning and cross-modal perturbation transfer on multimodal image captioning pipelines.',
      problem:
        'Multimodal vision-language models like CLIPCap are susceptible to subtle poisoned visual artifacts that skew linguistic generation.',
      approach:
        'Implemented targeted data poisoning strategies and analyzed feature drift in the cross-modal embedding space.',
      techStack: ['Python', 'PyTorch', 'CLIP', 'Transformers', 'OpenCV'],
      outcome:
        'Demonstrated targeted caption degradation mechanisms and proposed defense heuristics for robust multimodal representations.',
      categories: ['Multimodal AI', 'Computer Vision', 'Research'],
      githubUrl: 'https://github.com/sigango',
      demoUrl: '#',
    },
    {
      id: 'proj-6',
      title: 'Generative VAE Latent Modeling on MedMNIST',
      role: 'Deep Learning Project',
      dateRange: '2024',
      status: 'Completed',
      summary:
        'Variational Autoencoder trained across multiple medical imaging modalities for synthetic data generation and latent space interpolation.',
      problem:
        'Medical imaging datasets are often heavily restricted, bottlenecking downstream classifier training.',
      approach:
        'Trained deep convolutional VAE architectures with smooth latent manifold regularization and conditional generation controls.',
      techStack: ['Python', 'PyTorch', 'MedMNIST', 'Matplotlib', 'NumPy'],
      outcome:
        'Generated high-fidelity synthetic samples and validated that latent distance correlations match anatomical variation.',
      categories: ['Generative AI', 'Computer Vision', 'Research'],
      githubUrl: 'https://github.com/sigango',
      demoUrl: '#',
    },
  ],
  publication: {
    title:
      'Detection of Small Water Bodies for Vector Control Using Deep Learning on Multispectral Imagery from Unmanned Aerial Vehicles',
    authors:
      'Ngo, P. L., Pham, V. H., Bui, N. L., Phan, H. A. T., Vo, H. B., Velavan, T. P., & Tran, D. K.',
    venue: 'Discover Artificial Intelligence, 5. Springer Nature',
    year: 2025,
    doi: '10.1007/s44163-025-00422-6',
    summary:
      'A deep learning framework integrating UAV multispectral remote sensing with modified U-Net and MSNet architectures to accurately detect small-to-medium-sized water bodies for targeted arbovirus vector control in tropical environments.',
    url: 'https://doi.org/10.1007/s44163-025-00422-6',
    scholarUrl:
      'https://scholar.google.com/citations?user=oNDaKAQAAAAJ&hl=en',
  },
  skillCategories: [
    {
      name: 'Research & Core Specialization',
      skills: [
        'Explainable AI (XAI)',
        'Computer Vision',
        'Object Detection',
        'Robustness Evaluation',
        'Physics-Informed Neural Networks (PINNs)',
        'Remote Sensing',
        'Faithfulness Benchmarking',
      ],
    },
    {
      name: 'Machine Learning & Deep Learning',
      skills: [
        'PyTorch',
        'TensorFlow',
        'OpenCV',
        'Pandas',
        'Matplotlib',
        'LangChain',
        'Scikit-learn',
        'YOLO',
        'RF-DETR',
      ],
    },
    {
      name: 'Programming Languages',
      skills: ['Python', 'C/C++', 'R', 'Bash', 'TypeScript', 'PHP'],
    },
    {
      name: 'Tools, DevOps & Platforms',
      skills: [
        'Git',
        'Docker',
        'Jupyter',
        'Linux',
        'ReactJS',
        'GitHub Actions',
        'AWS',
        'LaTeX',
      ],
    },
    {
      name: 'Spoken Languages',
      skills: ['Vietnamese (Native)', 'English (C1)', 'German (B1)'],
    },
  ],
  contactEmail: 'linhph.ngo@gmail.com',
  contactMessage:
    'I am always open to discussing AI research, computer vision projects, software engineering collaborations, or graduate and industrial research opportunities. Feel free to reach out.',
};

export const researchIdeas: ResearchIdea[] = [
  {
    id: 'idea-1',
    title: 'Verified Adaptive Post-Hoc Explanations for Dense Object Detection',
    domain: 'Explainable AI',
    description:
      'Benchmark Grad-CAM, G-CAME, D-CLOSE, and LIME on dense bounding box targets. Investigate metric bias toward Gaussian maps and implement an evaluate-then-escalate pipeline.',
  },
  {
    id: 'idea-2',
    title: 'Minor-Inclusive Face and Person Detection Under Dataset Imbalance',
    domain: 'Computer Vision',
    description:
      'Pair face and body bounding boxes across fine-grained age demographics in RF-DETR and YOLO to evaluate demographic robustness in ethical security systems.',
  },
  {
    id: 'idea-3',
    title: 'Physics-Informed Neural Calibrator-Emulators (NEC–DINNs)',
    domain: 'Physics-Informed ML',
    description:
      'Embed SIR/SEIR compartmental dynamics into loss functions to simultaneously calibrate epidemiological parameters and emulate disease transmission trajectories.',
  },
  {
    id: 'idea-4',
    title: 'Cross-Modal Adversarial Perturbations in Vision-Language Models',
    domain: 'Adversarial Robustness',
    description:
      'Analyze how subtle visual poisoning transfers across textual representations in multimodal architectures like CLIP and develops certified defense boundaries.',
  },
  {
    id: 'idea-5',
    title: 'Multispectral UAV Semantic Segmentation for Vector Habitat Mapping',
    domain: 'Remote Sensing AI',
    description:
      'Combine near-infrared UAV imagery with specialized U-Net variants for real-time aerial vector-borne disease vector habitat detection in tropical zones.',
  },
  {
    id: 'idea-6',
    title: 'Generative Latent Manifold Interpolation for Medical Imaging',
    domain: 'Generative AI',
    description:
      'Train variational autoencoders on MedMNIST with controlled latent space constraints to generate synthetic data for rare pathological cases.',
  },
];

export const cvPipelineSteps: CVPipelineStep[] = [
  {
    id: 'step-1',
    title: 'Input Image',
    description:
      'High-resolution RGB or multispectral image captured from camera, UAV sensor, or video stream.',
    icon: '📷',
  },
  {
    id: 'step-2',
    title: 'Preprocessing & Augmentation',
    description:
      'Image normalization, resizing, color calibration, and photometric transformations to ensure uniform input dimensions.',
    icon: '⚙️',
  },
  {
    id: 'step-3',
    title: 'Feature Extraction Backbone',
    description:
      'Deep convolutional backbone (ResNet, YOLO backbone, RF-DETR transformer encoder) extracts multi-scale hierarchical feature maps.',
    icon: '🔬',
  },
  {
    id: 'step-4',
    title: 'Inference & Detection Head',
    description:
      'Task head processes spatial feature maps for bounding box regression, class probability distribution, and mask generation.',
    icon: '🧠',
  },
  {
    id: 'step-5',
    title: 'Explainability (XAI Verification)',
    description:
      'Grad-CAM, saliency maps, or perturbation attribution verify that the prediction relies on faithful object semantics rather than background artifacts.',
    icon: '🔍',
  },
  {
    id: 'step-6',
    title: 'Verified Prediction & Output',
    description:
      'Non-Maximum Suppression (NMS), confidence thresholding, and quality-verified predictions ready for production deployment.',
    icon: '✅',
  },
];

export const researchThemes: ResearchTheme[] = [
  {
    id: 'theme-1',
    title: 'Explainable Computer Vision',
    description:
      'Developing methods to evaluate explanation faithfulness, benchmark saliency maps (Grad-CAM, G-CAME, D-CLOSE, LIME), and build quality-verified evaluate-then-escalate pipelines.',
    icon: '🔍',
    tags: ['Grad-CAM', 'G-CAME', 'Faithfulness', 'Object Detection'],
  },
  {
    id: 'theme-2',
    title: 'Trustworthy & Ethical Visual Recognition',
    description:
      'Researching age-aware face and person detection (DeCNeC project at Fraunhofer SIT) to address acute dataset imbalances and safeguard underrepresented populations.',
    icon: '🛡️',
    tags: ['DeCNeC', 'YOLO', 'RF-DETR', 'Demographic Fairness'],
  },
  {
    id: 'theme-3',
    title: 'Physics-Informed Neural Networks',
    description:
      'Embedding physical and epidemiological compartmental equations (SIR/SEIR models in NEC-DINNs) into deep learning loss landscapes for data-efficient forecasting.',
    icon: '⚛️',
    tags: ['PINNs', 'DINNs', 'Dengue Forecasting', 'Dynamical Systems'],
  },
  {
    id: 'theme-4',
    title: 'Remote Sensing & Applied Vision',
    description:
      'Translating deep learning into real-world environmental and public health impact, using multispectral UAV aerial surveillance to automate vector-control detection (Springer 2025).',
    icon: '🛰️',
    tags: ['Multispectral UAV', 'U-Net', 'Public Health', 'Springer 2025'],
  },
];

export const engineeringProcess: EngineeringStep[] = [
  {
    id: 'proc-1',
    step: '01',
    title: 'Problem Framing',
    description:
      'Translating ambiguous real-world research objectives into precise mathematical constraints, hypothesis benchmarks, and evaluation metrics.',
    icon: '🎯',
  },
  {
    id: 'proc-2',
    step: '02',
    title: 'Data & Representation',
    description:
      'Curating paired bounding-box annotations, multispectral imagery bands, and addressing dataset imbalances with systematic augmentation.',
    icon: '📊',
  },
  {
    id: 'proc-3',
    step: '03',
    title: 'Modeling & Experiments',
    description:
      'Iteratively training state-of-the-art vision architectures (YOLO, RF-DETR, U-Net, DINNs), tracking loss metrics, and benchmarking baselines.',
    icon: '🔬',
  },
  {
    id: 'proc-4',
    step: '04',
    title: 'Validation & Interpretation',
    description:
      'Auditing model behavior with post-hoc XAI tools (Grad-CAM, perturbation faithfulness, adversarial evaluation) to guarantee trustworthy decisions.',
    icon: '⚖️',
  },
  {
    id: 'proc-5',
    step: '05',
    title: 'Deployment & Reproduction',
    description:
      'Packaging code with Docker and reproducible pipelines for academic release, peer-reviewed publication, and production inference.',
    icon: '🚀',
  },
];
