export const resume = {
  name: 'Kevin M. Ong',
  title: 'Software Engineer',
  location: 'San Francisco, CA',
  summary:
    'Software engineer building education technology — currently at IvyBee architecting a gamified university learning platform, and independently developing PrepVerified, an adaptive AI tutoring system with Bayesian knowledge tracing, spaced repetition, and LLM-powered evaluation. Background in research-to-production engineering at Desktop Metal (3D printing R&D) and enterprise automation at Palo Alto Networks.',

  contact: {
    github: 'https://github.com/lobakbro',
    linkedin: 'https://linkedin.com/in/kevinong',
  },

  experience: [
    {
      company: 'IvyBee (fka Pedigree Studios)',
      role: 'Software Engineer & Project Lead',
      period: 'Mar 2024 – Present',
      highlights: [
        'Architecting a gamified university learning platform where professors deliver collegiate content in gaming format via web app',
        'Built entire cloud infrastructure and backend from scratch on Azure — CosmosDB, ACR, Azure file shares',
        'Designed MITM proxy routing users to Kubernetes pods with behavior controls',
        'Implemented 4-environment Kubernetes infrastructure (prod, QA, dev, canary)',
        'Backend development in Python and Go',
      ],
    },
    {
      company: 'Desktop Metal',
      role: 'Software Engineer, R&D',
      period: 'Sep 2021 – Mar 2024',
      highlights: [
        'Core member of 2–4 person R&D team building an experimental top-down DLP 3D printer with scrolling non-static projector system',
        'Solved overlap/artifacting where angled DLP projector regions intersected',
        'Segmented layer image files into synchronized video streams for scrolling print process',
        'Led initiatives moving experimental prototypes (Python) to production systems (C++ API)',
      ],
    },
    {
      company: 'Palo Alto Networks',
      role: 'Automation Developer',
      period: 'Aug 2020 – Sep 2021',
      highlights: [
        'Frontier effort bringing automation (UiPath + conventional) to a rapidly scaling company',
        'Built workflows automating processes across multiple departments',
        'Won company-wide hackathon with an automated security tool',
        'Developed NLP-based form extraction pipeline via GCP',
      ],
    },
    {
      company: 'Palo Alto Networks',
      role: 'Automation Intern',
      period: 'May – Sep 2019',
      highlights: [
        'Developed automation workflows for internal business processes',
      ],
    },
    {
      company: 'Citi Bank',
      role: 'Doctoral Internship',
      period: 'May – Dec 2019',
      highlights: [
        'ML for mortgage risk modeling',
        'Migrated legacy Fortran data pipelines to Python',
      ],
    },
  ],

  projects: [
    {
      name: 'PrepVerified',
      description:
        'Full-stack adaptive learning system inspired by ALEKS (McGraw-Hill)',
      tech: [
        'SvelteKit',
        'TypeScript',
        'SQLite',
        'Drizzle ORM',
        'Python',
        'Claude CLI',
      ],
      highlights: [
        'Bayesian Knowledge Tracing (BKT) for mastery estimation and FSRS for spaced repetition scheduling',
        '68-skill graph with 84 prerequisite edges as a validated DAG, loaded from YAML config',
        'Adaptive engine with 85% success rule, 5-tier recommendation priority, deadline proximity adaptation, leech detection, and calibration tracking',
        'Claude generates adaptive problems and grades answers via structured JSON prompts with behavioral protocol',
        '5 rubric types (coding, system design, ML/research, behavioral, CodeSignal) with error taxonomy, confidence calibration, and prediction-vs-actual divergence detection',
        'Interactive dashboard with Cytoscape.js skill graph, mastery heatmap, live practice sessions, and post-session debriefs',
      ],
      link: 'https://github.com/lobakbro/prepverified',
    },
    {
      name: 'EarWorm / Symphony',
      description:
        'Crossmodal music generation — multimodal architecture concept for classical music across sheet music, audio, and MIDI',
      tech: ['Python', 'PyTorch', 'Audio Processing'],
      highlights: [
        'Inspired the skill-space decomposition thinking that led to PrepVerified',
      ],
    },
    {
      name: 'Cardoza Law',
      description:
        'Legal RAG pipeline for hierarchical rule precedence in California civil procedure',
      tech: ['Python', 'LLaMA', 'LangChain'],
      highlights: [
        'Lessons on retrieval accuracy directly informed PrepVerified\'s approach to factual reliability',
      ],
    },
    {
      name: 'Omen Cyber Security',
      description:
        'ML pipeline for enterprise exposed secret key detection with NLP risk classification',
      tech: ['Python', 'NLP', 'ML Pipelines'],
      highlights: [
        'Built ML-powered detection and NLP-based risk classification for enterprise secret exposure',
      ],
    },
  ],

  education: [
    {
      institution: 'University of Texas at Dallas',
      degree: 'BS Electrical Engineering',
      period: 'May 2020',
      details: ['Eugene McDermott Scholar'],
    },
  ],

  skills: {
    Languages: ['Python', 'Go', 'C++', 'TypeScript', 'SQL'],
    Infrastructure: [
      'Kubernetes',
      'Azure (CosmosDB, ACR, File Shares)',
      'Docker',
      'GCP',
      'CI/CD',
    ],
    'AI & ML': [
      'PyTorch',
      'LLMs',
      'RAG',
      'NLP',
      'Deep Learning',
      'Bayesian Knowledge Tracing',
      'FSRS',
    ],
    Web: ['SvelteKit', 'Astro', 'TailwindCSS', 'REST APIs'],
  },

  certifications: [
    { name: 'Machine Learning with Python (MITx 6.86x)', issuer: 'MIT' },
    {
      name: 'Machine Learning, Modeling, and Simulation',
      issuer: 'MIT',
    },
    { name: 'Cloud Essentials', issuer: 'GCP' },
    { name: 'Machine Learning Specialization', issuer: 'Coursera' },
  ],
};
