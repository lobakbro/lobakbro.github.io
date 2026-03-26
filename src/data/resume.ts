export const resume = {
  name: 'Kevin M. Ong',
  title: 'Software Engineer',
  location: 'San Francisco, CA',
  summary:
    'I design and build production systems where nothing exists yet. Research background in neuroscience and ML. Three zero-to-one builds across experimental hardware, cloud infrastructure, and adaptive learning, each taken from prototype to production.',

  contact: {
    linkedin: 'https://www.linkedin.com/in/kevinmacong/',
  },

  experience: [
    {
      company: 'IvyBee',
      role: 'Software Engineer & Technical Lead',
      period: 'Mar 2024 – Present',
      highlights: [
        'Built all backend architecture for experiential gaming experiences: immersive learning environments like clean room simulations delivered as interactive game worlds',
        'Designed and built all cloud infrastructure from scratch: Azure Functions, CosmosDB, ACR, 4-environment Kubernetes (prod, QA, dev, canary)',
        'Architected proxy gateway serving as HTTP interface to game pods, handling auth, purchase gating, and seamless pod-to-pod player routing with state synchronization',
        'Low-latency pipe swapping in Go for invisible player transitions between experiences',
      ],
    },
    {
      company: 'Desktop Metal',
      role: 'Software Engineer, R&D',
      period: 'Sep 2021 – Mar 2024',
      highlights: [
        'Core member of 2–4 person R&D team building an experimental top-down DLP 3D printer with scrolling non-static projector system',
        'Solved overlap/artifacting where angled DLP projector regions intersected through signal processing at the hardware-software boundary',
        'Segmented layer image files into synchronized video streams for scrolling print process',
        'Converted experimental prototypes (Python) into production-ready C++ API for manufacturing hardware',
      ],
    },
    {
      company: 'Palo Alto Networks',
      role: 'Automation Developer',
      period: 'Aug 2020 – Sep 2021',
      highlights: [
        'Built automation tooling for a 10,000+ employee security company scaling rapidly post-IPO',
        'Won company-wide hackathon: built ML pipeline scoring secret exposure risk (leak probability × impact severity) across repos, surfacing production secrets leaking across multiple services',
        'Developed NLP-based form extraction pipeline via GCP',
        'Built workflows automating processes across multiple departments',
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
      company: 'Citi',
      role: 'Graduate Research Intern',
      period: 'May – Dec 2018',
      highlights: [
        'Evaluated linear regression vs. deep learning validation for CCAR mortgage stress testing',
        'Built ML automation to streamline the financial modeling pipeline',
      ],
    },
    {
      company: 'UTD Biomedical Engineering / Boyden Lab',
      role: 'Research Assistant',
      period: '2016 – 2019',
      highlights: [
        'Neural computer interface research: built and tested electrode arrays (Utah arrays) for brain-computer interfaces',
        'PCA-based 3D neuron localization from multi-electrode recordings',
        'Investigated glass transition polymer substrates for implantable probes; tested in vivo at MIT McGovern Institute',
      ],
    },
  ],

  projects: [
    {
      name: 'Constellation',
      description:
        'Adaptive learning system that models knowledge as a constellation of mastered nodes in a skill graph, targeting the frontier of what you\'re ready to learn next',
      tech: [
        'SvelteKit',
        'TypeScript',
        'SQLite',
        'Drizzle ORM',
        'Python',
        'Claude API',
      ],
      highlights: [
        'Interactive skill graph (Cytoscape.js) visualizing mastery progression and prerequisite relationships across a DAG of skills',
        'Claude generates problems adapted to current skill level and grades responses via structured evaluation',
        'Adaptive engine using knowledge tracing and spaced repetition to target practice at the frontier of ability',
        'Confidence calibration surfacing prediction-vs-actual divergence in session debriefs',
        'Session debriefs with mastery heatmaps and live practice sessions',
      ],
    },
    {
      name: 'EarWorm',
      description:
        'Hierarchical VQ-VAE trained on the ASAP dataset (professional piano MIDI) to decompose the skill space of piano performance, precursor to Constellation',
      tech: ['Python', 'VQ-VAE', 'MIDI Processing'],
      highlights: [
        'Learned codebook representing discrete skill states from professional piano performances',
        'Goal: infer a player\'s skill state from how they play (not MIDI synchronization) and generate targeted sheet music drills to close skill gaps',
        'Skill-space decomposition thinking became the foundation for Constellation\'s adaptive engine',
      ],
    },
  ],

  education: [
    {
      institution: 'University of Texas at Dallas',
      degree: 'BS Electrical Engineering',
      period: '2016 – 2020',
      details: [
        'Eugene McDermott Scholar: one of the most selective undergraduate merit awards in the nation; full scholarship with leadership training and cultural enrichment',
        'TAMS at UNT (Texas Academy of Math and Science): early college program; completed BS requirements early, program required graduate coursework and research internships',
        'Activities: IEEE, Biomedical Engineering Research, Management Consulting',
      ],
    },
  ],

  skills: {
    Languages: ['Python', 'Go', 'C++', 'TypeScript', 'SQL'],
    Infrastructure: [
      'Kubernetes',
      'Azure (CosmosDB, ACR, Functions)',
      'Docker',
      'GCP',
      'CI/CD',
    ],
    'AI & ML': ['LLMs', 'NLP', 'Deep Learning', 'Signal Processing'],
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
