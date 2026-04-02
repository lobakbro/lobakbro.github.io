export const resume = {
  name: 'Kevin M. Ong',
  title: 'Software Engineer',
  location: 'San Francisco, CA',
  summary: 'Engineer who builds working systems in undefined problem spaces. Experimental 3D printing hardware, simulation training platforms, adaptive learning on Claude. Built Constellation because AI education is measuring the wrong thing.',

  contact: {
    email: 'kevin.mac.ong@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kevinmacong/',
    site: 'lobakbro.github.io',
  },

  projects: [
    {
      name: 'Constellation',
      description:
        'Adaptive learning system on Claude that models what a learner knows per skill, how fast it is fading, and selects both what to work on and how to engage with it',
      tech: [
        'SvelteKit',
        'TypeScript',
        'Python',
        'Claude API',
        'SQLite',
        'Drizzle ORM',
      ],
      highlights: [
        'Decomposes subjects into prerequisite skill graphs and selects a learning phase and scaffold level per node based on estimated mastery, withdrawing support as capability is demonstrated to push toward independence',
        'Predicts learner performance on novel transfer problems generated per skill, compares against actual outcomes, and recalibrates the mastery model on divergence so estimates converge on what the learner actually knows',
        'Every mastery change traces to the practice event that caused it. Session replay surfaces pedagogical failures fast enough to iterate on teaching approach in hours',
      ],
    },
  ],

  experience: [
    {
      company: 'IvyBee',
      role: 'Software Engineer and Technical Lead',
      period: 'Mar 2024 – Present',
      highlights: [
        'Sole architect on cloud infrastructure and backend for a gamified simulation training platform. Designed the full Kubernetes topology, proxy layer, and data pipeline from zero with no prior cloud infrastructure experience',
        'Proxy gateway routing player sessions across Minecraft game pods with live state synchronization, so learners transition between environments without losing progress',
        'Low-latency pipe swapping in Go for seamless player transitions between simulation environments',
      ],
    },
    {
      company: 'Desktop Metal',
      role: 'Software Engineer, R&D',
      period: 'Sep 2021 – Mar 2024',
      highlights: [
        'Two to four person R&D team building experimental DLP 3D printer; rapid prototyping through ambiguous hardware-software problems',
        'Solved overlap artifacting at angled projector boundaries using signal processing; segmented layers into synchronized video streams',
        'Converted experimental Python prototypes to production C++ API shipping on manufacturing hardware',
      ],
    },
    {
      company: 'Palo Alto Networks',
      role: 'Automation Developer',
      period: 'Aug 2020 – Sep 2021',
      highlights: [
        'Won company-wide hackathon: ML pipeline scoring secret exposure risk (leak probability x impact severity) across production repos',
      ],
    },
  ],

  education: [
    {
      institution: 'University of Texas at Dallas',
      degree: 'BS Electrical Engineering',
      period: '2016 – 2020',
      details: [
        'Eugene McDermott Scholar: full merit scholarship, one of the most selective undergraduate awards in the nation',
      ],
    },
  ],

  skills: {
    'Languages': ['Python', 'Go'],
    'AI and Learning': ['LLM Eval', 'RAG'],
    'Infrastructure': [
      'Kubernetes',
      'Azure (CosmosDB, ACR, Functions)',
      'Docker',
      'CI/CD',
      'Analytics pipelines',
    ],
  },

  certifications: [] as { name: string; issuer: string }[],
};
