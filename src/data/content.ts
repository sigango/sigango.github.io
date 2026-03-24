import type {
  SiteContent,
  ResearchIdea,
  CVPipelineStep,
  RAGStage,
} from '../types/content';

export const siteContent: SiteContent = {
  name: 'Phuc Linh Ngo',
  title: 'AI Engineer & Computer Vision Researcher',
  shortSummary:
    'Building intelligent systems at the intersection of computer vision, multimodal AI, and research-driven software engineering. Focused on turning deep technical insight into impactful, deployable solutions.',
  longAbout:
    'I am an AI engineer with a strong focus on computer vision and deep learning research. My work bridges the gap between academic research and production engineering — from designing novel neural architectures for visual understanding to building robust software systems that bring AI capabilities to real-world applications. I am driven by the belief that the most impactful AI work happens when rigorous research meets clean, scalable engineering.',
  missionStatement:
    'To advance the frontiers of computer vision and AI through research-minded engineering — building systems that are not only technically sound but also responsible, interpretable, and deployable at scale.',
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
    { label: 'Generative AI' },
    { label: 'Physics-Informed Machine Learning' },
    { label: 'AI for Public Health' },
  ],
  experiences: [
    {
      id: 'exp-1',
      role: 'Computer Vision Engineer',
      organization: 'Fraunhofer SIT',
      location: 'Darmstadt, Germany',
      dateRange: '04.2026',
      achievements: [
        'Implementation and application of computer vision approaches.',
        'Application of methods from security-relevant areas such as visual age estimation.',
      ],
      technologies: ['Computer Vision', 'Python', 'PyTorch'],
    },
    {
      id: 'exp-2',
      role: 'Artificial Intelligence Engineer & IT Staff Working Student',
      organization: 'Fun Work GmbH',
      location: 'Dreieich, Germany',
      dateRange: '10.2024 - Present',
      achievements: [
        'Developed and deployed an AI chatbot for customer service using Retrieval-Augmented Generation (RAG) techniques, integrated ChatGPT API, and deployed the product to production.',
        'Configured cloud infrastructure and on-premise servers system.',
        'Tested and deployed new internal software applications for logistics management, ensuring seamless operation.',
      ],
      technologies: ['RAG', 'ChatGPT API', 'Cloud Infrastructure', 'On-Premise Servers'],
    },
    {
      id: 'exp-3',
      role: 'Research Assistant',
      organization: 'Vietnamese German University',
      location: 'Binh Duong, Vietnam',
      dateRange: '01.2024 - Present',
      achievements: [
        'Engaged in cutting-edge research in Artificial Intelligence and Machine Learning, developing innovative solutions to complex public health problems.',
        'Focused on Computer Vision and Remote Sensing applications for disease control.',
        'Developed Physics-Informed Neural Networks (PINNs) for forecasting and solving public health challenges.',
      ],
      technologies: ['Machine Learning', 'Remote Sensing', 'PINNs', 'Public Health AI'],
    },
    {
      id: 'exp-4',
      role: 'Application Administration and Developer Intern',
      organization: 'Vietnamese German University',
      location: 'Binh Duong, Vietnam',
      dateRange: '01.2023 - 05.2023',
      achievements: [
        'Developed a new webpage for the Vietnamese-German University as a Web Developer Intern. Conducted a comprehensive review and evaluation of the existing website.',
        'Designed a new UI and programmed the new website using PHP and WordPress, ensuring responsiveness and brand consistency.',
      ],
      technologies: ['PHP', 'WordPress', 'Web Development', 'UI Design'],
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

