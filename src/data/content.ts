import type {
  SiteContent,
  ResearchIdea,
  CVPipelineStep,
  RAGStage,
  ResearchTheme,
  EngineeringStep,
} from '../types/content';

export const siteContent: SiteContent = {
  name: 'Phuc Linh Ngo',
  title: 'AI Engineer & Computer Vision Researcher',
  shortSummary:
    'Master\'s student in AI & Machine Learning at TU Darmstadt. I build and research robust computer vision systems, bridging strong academic foundations with scalable software engineering.',
  longAbout:
    'I am an AI engineer and computer vision researcher, currently pursuing my Master\'s in AI and Machine Learning at TU Darmstadt. My work lives at the intersection of rigorous academic research and practical software engineering. I focus on visual representation learning, generative modeling, and physics-informed neural architectures. I believe the most impactful AI solutions occur when deep, research-backed insights are matched by clean, scalable implementation. I am driven to build systems that infer accurately, perform reliably, and scale gracefully.',
  missionStatement:
    'To advance visual perception and reasoning algorithms by combining rigorous academic research with world-class system engineering.',
  profileImage: '/profile.png',
  cvUrl: '/cv.pdf',
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
      label: 'Email',
      url: 'mailto:phuclinh9090@gmail.com',
      icon: 'email',
    },
  ],
  interests: [
    { label: 'Computer Vision' },
    { label: 'Representation Learning' },
    { label: 'Generative Models' },
    { label: 'Robustness' },
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Computer Vision Engineer',
      organization: 'Fraunhofer SIT',
      location: 'Darmstadt, Germany',
      dateRange: '04.2026',
      achievements: [
        'Researching and deploying security-critical computer vision systems, focusing on adversarial robustness and reliable visual inference.',
        'Developing production-grade visual age estimation algorithms, minimizing bias algorithms across diverse demographics.',
      ],
      technologies: ['PyTorch', 'OpenCV', 'Robustness Analysis', 'Python'],
    },
    {
      id: 'exp-2',
      role: 'Artificial Intelligence Engineer & IT Staff Working Student',
      organization: 'Fun Work GmbH',
      location: 'Dreieich, Germany',
      dateRange: '10.2024 - Present',
      achievements: [
        'Architected and deployed a highly scalable Retrieval-Augmented Generation (RAG) customer service pipeline into production environments.',
        'Engineered underlying cloud inference infrastructure and optimized on-premise deployment mechanisms, reducing system latency.',
        'Led end-to-end integration testing for internal logistics management software prior to enterprise rollout.',
      ],
      technologies: ['RAG', 'LLM Engineering', 'Cloud Infrastructure', 'Docker'],
    },
    {
      id: 'exp-3',
      role: 'Research Assistant',
      organization: 'Vietnamese German University',
      location: 'Binh Duong, Vietnam',
      dateRange: '01.2024 - Present',
      achievements: [
        'Spearheading applied research utilizing multi-spectral biological imaging and computer vision to model public health threats.',
        'Designed and trained Physics-Informed Neural Networks (PINNs) to mathematically constrain predictive epidemiological models.',
        'Co-authored research demonstrating the efficacy of Unmanned Aerial Vehicles combined with U-Net variations for automated habitat detection.',
      ],
      technologies: ['Remote Sensing', 'PINNs', 'U-Net', 'PyTorch'],
    },
    {
      id: 'exp-4',
      role: 'Application Developer Intern',
      organization: 'Vietnamese German University',
      location: 'Binh Duong, Vietnam',
      dateRange: '01.2023 - 05.2023',
      achievements: [
        'Conducted comprehensive architectural review of existing institutional portals, identifying optimization and security bottlenecks.',
        'Developed resilient UI/UX components and backend logic for the university\'s core digital platform utilizing robust web frameworks.',
      ],
      technologies: ['Web Architecture', 'PHP', 'UI/UX System Design'],
    },
  ],
  projects: [
    {
      id: 'proj-1',
      title: 'Dengue Outbreak Prediction using Disease-Informed Neural Networks',
      summary:
        'A physics-informed deep learning approach for predicting dengue outbreaks by embedding epidemiological domain knowledge into neural network architectures.',
      problem:
        'Traditional forecasting models struggle to capture the complex dynamics of dengue transmission influenced by climate, vector biology, and human mobility.',
      approach:
        'Developed a Disease-Informed Neural Network (DINN) that integrates compartmental epidemiological models with neural networks, allowing the model to learn from both data and domain-specific constraints.',
      techStack: ['Python', 'PyTorch', 'NumPy', 'Matplotlib', 'Scikit-learn'],
      outcome:
        'Achieved improved forecasting accuracy compared to baseline models, demonstrating the value of physics-informed constraints in public health AI.',
      categories: ['Forecasting', 'Research'],
      githubUrl: '#',
      demoUrl: '#',
      caseStudy: true,
      learnings: 'I learned how to mathematically constrain neural network loss functions using differential equations (SIR models), fundamentally changing how I approach domain-specific deep learning beyond standard data-driven methods.',
      future: 'Future iterations will incorporate vision-language models to dynamically analyze satellite imagery and fuse it with the PINN architecture in real-time.',
    },
    {
      id: 'proj-2',
      title: 'Mimic Nightshade Attack for Image Captioning Model CLIPCap',
      summary:
        'An adversarial robustness study exploring data poisoning attacks on vision-language models, specifically targeting the CLIPCap image captioning pipeline.',
      problem:
        'Vision-language models are vulnerable to data poisoning attacks that can subtly manipulate model outputs without detection.',
      approach:
        'Implemented a Nightshade-inspired attack strategy targeting CLIPCap, analyzing how poisoned training data affects captioning quality and model behavior.',
      techStack: ['Python', 'PyTorch', 'CLIP', 'Transformers', 'OpenCV'],
      outcome:
        'Demonstrated measurable degradation in caption quality under targeted poisoning, contributing to understanding of adversarial vulnerabilities in multimodal models.',
      categories: ['Multimodal AI', 'Computer Vision', 'Research'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-3',
      title: 'Classification of Real and Generated Human Faces',
      summary:
        'A deep learning system for distinguishing authentic photographs of human faces from AI-generated synthetic faces.',
      problem:
        'The proliferation of AI-generated faces poses challenges for trust, security, and misinformation detection.',
      approach:
        'Trained convolutional neural networks on datasets of real and GAN-generated faces, employing frequency analysis and attention mechanisms to detect subtle artifacts.',
      techStack: ['Python', 'PyTorch', 'OpenCV', 'Pillow', 'Scikit-learn'],
      outcome:
        'Achieved high classification accuracy, identifying key discriminative features between real and generated imagery.',
      categories: ['Computer Vision', 'Generative AI', 'Research'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-4',
      title: 'Generative VAE Model with MedMNIST',
      summary:
        'A Variational Autoencoder trained on medical imaging datasets from MedMNIST for generating synthetic medical images and learning latent representations.',
      problem:
        'Medical imaging datasets are often small and restricted, limiting model training and research reproducibility.',
      approach:
        'Built and trained a VAE architecture on multiple MedMNIST modalities, exploring latent space interpolation and conditional generation for data augmentation.',
      techStack: ['Python', 'PyTorch', 'MedMNIST', 'Matplotlib', 'NumPy'],
      outcome:
        'Successfully generated realistic synthetic medical images and demonstrated meaningful latent space structure across imaging modalities.',
      categories: ['Generative AI', 'Computer Vision', 'Research'],
      githubUrl: '#',
      demoUrl: '#',
    },
    {
      id: 'proj-5',
      title: 'Low-Cost Drones for Arbovirus Vector Habitat Mapping',
      summary:
        'Using drone-based aerial imaging and computer vision to identify and map mosquito breeding habitats for arbovirus surveillance.',
      problem:
        'Manual surveillance of mosquito breeding sites is labor-intensive, costly, and often insufficient for effective vector control programs.',
      approach:
        'Deployed low-cost drones equipped with cameras to capture aerial imagery of potential breeding sites, then applied object detection and segmentation models to identify water bodies and vegetation patterns.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'Drone SDK'],
      outcome:
        'Demonstrated feasibility of automated habitat detection, reducing survey time and cost while improving spatial coverage of surveillance.',
      categories: ['Computer Vision', 'Research', 'Software Systems'],
      githubUrl: '#',
      demoUrl: '#',
    },
  ],
  publication: {
    title: 'Detection of small water bodies for vector control using deep learning on multispectral imagery from unmanned aerial vehicles',
    authors: 'Phuc Linh Ngo et al.',
    venue: 'Discover Artificial Intelligence, Springer',
    year: 2025,
    summary:
      'A framework integrating UAV multispectral imagery with deep learning (U-Net, MSNet) to accurately detect small-to-medium-sized water bodies for targeted arbovirus vector control in tropical conditions.',
    url: 'https://link.springer.com/article/10.1007/s44163-025-00422-6',
    scholarUrl:
      'https://scholar.google.com/citations?user=oNDaKAQAAAAJ&hl=en',
  },
  skillCategories: [
    {
      name: 'Languages',
      skills: ['Python', 'C/C++', 'R', 'Bash', 'TypeScript'],
    },
    {
      name: 'AI & ML Frameworks',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'LangChain', 'Hugging Face'],
    },
    {
      name: 'Computer Vision & Research',
      skills: ['OpenCV', 'Pillow', 'CLIP', 'YOLO', 'Matplotlib', 'Weights & Biases', 'Jupyter'],
    },
    {
      name: 'Web & Software Engineering',
      skills: ['React', 'Node.js', 'MongoDB', 'HTML/CSS'],
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Linux', 'AWS', 'GitHub Actions', 'VSCode', 'LaTeX'],
    },
  ],
  contactEmail: 'phuclinh9090@gmail.com',
  contactMessage:
    'I am always open to discussing AI research, computer vision projects, software engineering collaborations, or graduate research opportunities. Feel free to reach out.',
};

export const researchIdeas: ResearchIdea[] = [
  {
    id: 'idea-1',
    title: 'Self-Supervised Depth Estimation from Monocular Video',
    domain: 'Computer Vision',
    description:
      'Explore contrastive learning approaches for monocular depth estimation without ground-truth depth supervision, leveraging temporal consistency in video sequences.',
  },
  {
    id: 'idea-2',
    title: 'Cross-Modal Adversarial Robustness in Vision-Language Models',
    domain: 'Multimodal AI',
    description:
      'Investigate how adversarial perturbations transfer between visual and textual modalities in models like CLIP, and develop defense mechanisms.',
  },
  {
    id: 'idea-3',
    title: 'Certified Robustness for Medical Image Classifiers',
    domain: 'Adversarial Robustness',
    description:
      'Develop provably robust classification methods for medical imaging that maintain diagnostic accuracy under bounded perturbations.',
  },
  {
    id: 'idea-4',
    title: 'Satellite Imagery for Vector-Borne Disease Risk Mapping',
    domain: 'Public Health AI',
    description:
      'Combine remote sensing data with epidemiological models to create real-time risk maps for diseases like dengue and malaria.',
  },
  {
    id: 'idea-5',
    title: 'Controllable Medical Image Synthesis via Diffusion Models',
    domain: 'Generative AI',
    description:
      'Use conditional diffusion models to generate realistic medical images with specific pathological features for training data augmentation.',
  },
  {
    id: 'idea-6',
    title: 'Physics-Constrained Neural Radiance Fields for Scene Reconstruction',
    domain: 'Computer Vision',
    description:
      'Integrate physical priors (lighting, material properties) into NeRF architectures for more physically plausible 3D scene reconstruction.',
  },
  {
    id: 'idea-7',
    title: 'Attention-Guided Feature Distillation for Edge Deployment',
    domain: 'Computer Vision',
    description:
      'Develop knowledge distillation techniques that use attention maps to selectively transfer the most task-relevant features to compact student models.',
  },
  {
    id: 'idea-8',
    title: 'RAG-Enhanced Clinical Decision Support Systems',
    domain: 'Public Health AI',
    description:
      'Design retrieval-augmented generation systems that combine medical literature retrieval with LLM reasoning for evidence-based clinical recommendations.',
  },
];

export const cvPipelineSteps: CVPipelineStep[] = [
  {
    id: 'step-1',
    title: 'Input Image',
    description:
      'Raw image data is captured from camera, file, or video stream. The system accepts various formats and resolutions.',
    icon: '📷',
  },
  {
    id: 'step-2',
    title: 'Preprocessing',
    description:
      'Image normalization, resizing, color space conversion, and augmentation. Ensures consistent input for downstream processing.',
    icon: '⚙️',
  },
  {
    id: 'step-3',
    title: 'Feature Extraction',
    description:
      'Convolutional backbone (ResNet, EfficientNet, ViT) extracts hierarchical feature representations from the preprocessed image.',
    icon: '🔬',
  },
  {
    id: 'step-4',
    title: 'Model Inference',
    description:
      'Task-specific head processes features for classification, detection, segmentation, or generation. Forward pass produces raw predictions.',
    icon: '🧠',
  },
  {
    id: 'step-5',
    title: 'Explainability',
    description:
      'Grad-CAM, attention maps, or saliency visualization reveals which regions influenced the model decision, supporting interpretability.',
    icon: '🔍',
  },
  {
    id: 'step-6',
    title: 'Final Prediction',
    description:
      'Post-processing, thresholding, and NMS refine raw outputs into actionable predictions with confidence scores.',
    icon: '✅',
  },
];

export const researchThemes: ResearchTheme[] = [
  {
    id: 'theme-1',
    title: 'Explainable Computer Vision',
    description: 'Developing methods to peer inside the "black box" of deep visual models, ensuring high-stakes predictions are interpretable, trustworthy, and mathematically sound.',
    icon: '🔍',
    tags: ['Grad-CAM', 'Feature Attribution', 'Saliency Maps']
  },
  {
    id: 'theme-2',
    title: 'Generative Visual Models',
    description: 'Exploring the latent spaces of Variational Autoencoders and Diffusion models to synthesize training data, augment medical imaging datasets, and detect synthetic artifacts.',
    icon: '✨',
    tags: ['Diffusion', 'VAEs', 'Synthetic Images']
  },
  {
    id: 'theme-3',
    title: 'Adversarial Robustness',
    description: 'Investigating vulnerabilities in state-of-the-art vision models against data poisoning and adversarial perturbations to build more resilient architectures.',
    icon: '🛡️',
    tags: ['Data Poisoning', 'Defense Mechanisms', 'Security']
  },
  {
    id: 'theme-4',
    title: 'Physics-Informed ML',
    description: 'Bridging deep learning with physical and biological laws. Encoding domain knowledge as strict mathematical constraints within neural network loss functions.',
    icon: '⚛️',
    tags: ['PINNs', 'Epidemiology', 'Dynamical Systems']
  }
];

export const engineeringProcess: EngineeringStep[] = [
  {
    id: 'proc-1',
    step: '01',
    title: 'Problem Framing',
    description: 'Translating ambiguous, real-world objectives into precise mathematical constraints and clearly defined machine learning tasks.',
    icon: '🎯'
  },
  {
    id: 'proc-2',
    step: '02',
    title: 'Data & Representation',
    description: 'Curating, cleaning, and structuring the dataset. Selecting the optimal feature representations and defining robust augmentation pipelines.',
    icon: '📊'
  },
  {
    id: 'proc-3',
    step: '03',
    title: 'Modeling & Experiments',
    description: 'Iteratively designing neural architectures, implementing baselines, tuning hyperparameters, and rigorously tracking experimental metrics.',
    icon: '🔬'
  },
  {
    id: 'proc-4',
    step: '04',
    title: 'Validation & Interpretation',
    description: 'Poking holes in the model. Deploying adversarial testing and explainability tools (XAI) to ensure the model makes decisions for the right reasons.',
    icon: '⚖️'
  },
  {
    id: 'proc-5',
    step: '05',
    title: 'Deployment',
    description: 'Optimizing the final architecture for inference speed, packaging into containerized services, and deploying robustly to the cloud or edge devices.',
    icon: '🚀'
  }
];

