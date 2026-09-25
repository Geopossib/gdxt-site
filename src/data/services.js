export const services = [
  {
    slug: 'it-project-management',
    icon: '📊',
    title: 'IT Project Management',
    tagline: 'PLANNING. COORDINATION. DELIVERY.',
    summary: 'Planning, coordination, execution, and delivery of technology projects.',
    description:
      'We manage technology projects end-to-end — from scoping and resourcing through execution and go-live — so your initiatives land on time, on budget, and aligned with business goals.',
    capabilities: [
      'Project scoping, planning & roadmapping',
      'Agile & hybrid delivery frameworks',
      'Vendor and stakeholder coordination',
      'Risk, budget & timeline management',
      'Change management & rollout support',
      'Post-launch review and optimization',
    ],
    stats: [
      { end: 120, suffix: '+', label: 'Projects Delivered' },
      { end: 98, suffix: '%', label: 'On-Time Delivery' },
      { end: 15, suffix: '+', label: 'Industries Served' },
    ],
    quote: {
      text: 'GDXT brought structure to a project that had stalled twice before. They delivered on schedule and kept every stakeholder aligned.',
      name: 'Operations Director',
      org: 'Regional Logistics Firm',
    },
  },
  {
    slug: 'technology-consulting',
    icon: '🧭',
    title: 'Technology Consulting',
    tagline: 'STRATEGY. DECISIONS. IMPLEMENTATION.',
    summary: 'Helping organizations make informed technology decisions and implement effective solutions.',
    description:
      'Our consultants assess your current technology landscape and chart a practical path forward — balancing cost, risk, and business impact so every recommendation is one you can actually execute.',
    capabilities: [
      'Technology audits & readiness assessments',
      'Digital transformation strategy',
      'Vendor and tool selection guidance',
      'Architecture & systems planning',
      'Cost optimization reviews',
      'Executive advisory & roadmapping',
    ],
    stats: [
      { end: 60, suffix: '+', label: 'Organizations Advised' },
      { end: 40, suffix: '%', label: 'Avg. Cost Reduction' },
      { end: 10, suffix: '+', label: 'Years Combined Expertise' },
    ],
    quote: {
      text: 'Their assessment cut through years of technical debt conversation and gave us a roadmap we could actually act on.',
      name: 'VP of Technology',
      org: 'Mid-Market SaaS Company',
    },
  },
  {
    slug: 'ai-machine-learning',
    icon: '🤖',
    title: 'Artificial Intelligence & Machine Learning',
    tagline: 'INTELLIGENT SYSTEMS. REAL RESULTS.',
    summary: 'Developing intelligent systems and applying AI to real-world problems.',
    description:
      'We design and build AI and machine learning systems that solve concrete business problems — from predictive models to intelligent automation — grounded in your data and your goals.',
    capabilities: [
      'Predictive modeling & forecasting',
      'Natural language processing solutions',
      'Computer vision applications',
      'ML pipeline design & deployment',
      'Data strategy & preparation',
      'Model monitoring & retraining',
    ],
    stats: [
      { end: 35, suffix: '+', label: 'AI Models Deployed' },
      { end: 92, suffix: '%', label: 'Model Accuracy Avg.' },
      { end: 8, suffix: '+', label: 'Industries Applied' },
    ],
    quote: {
      text: 'GDXT built a forecasting model that outperformed our legacy system within the first month of deployment.',
      name: 'Head of Data',
      org: 'E-commerce Platform',
    },
  },
  {
    slug: 'cybersecurity',
    icon: '🛡️',
    title: 'Cybersecurity',
    tagline: 'PROTECT. DETECT. RESPOND.',
    summary: 'Helping organizations protect systems, data, and digital infrastructure.',
    description:
      'We help organizations build resilient security postures — identifying vulnerabilities, hardening infrastructure, and preparing teams to detect and respond to threats before they become incidents.',
    capabilities: [
      'Security assessments & penetration testing',
      'Infrastructure hardening',
      'Identity & access management',
      'Incident response planning',
      'Compliance readiness (SOC 2, ISO 27001)',
      'Security awareness training',
    ],
    stats: [
      { end: 200, suffix: '+', label: 'Vulnerabilities Remediated' },
      { end: 99, suffix: '.9%', label: 'Client Uptime' },
      { end: 24, suffix: '/7', label: 'Monitoring Available' },
    ],
    quote: {
      text: 'Their penetration test found issues our previous vendor missed entirely — and they helped us fix every one.',
      name: 'IT Director',
      org: 'Financial Services Firm',
    },
  },
  {
    slug: 'cloud-devops',
    icon: '☁️',
    title: 'Cloud & DevOps',
    tagline: 'SCALABLE. AUTOMATED. RELIABLE.',
    summary: 'Building scalable infrastructure and improving software delivery through modern cloud and DevOps practices.',
    description:
      'We architect cloud infrastructure and CI/CD pipelines that scale with your business — reducing deployment friction and giving your team the confidence to ship faster.',
    capabilities: [
      'Cloud migration & architecture (AWS, Azure, GCP)',
      'CI/CD pipeline design',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Containerization & orchestration (Docker, Kubernetes)',
      'Cost monitoring & optimization',
      'Site reliability engineering',
    ],
    stats: [
      { end: 50, suffix: '+', label: 'Cloud Migrations' },
      { end: 70, suffix: '%', label: 'Faster Deployments' },
      { end: 30, suffix: '%', label: 'Avg. Infra. Savings' },
    ],
    quote: {
      text: 'Deployment time went from hours to minutes. Our engineers finally trust the pipeline.',
      name: 'Engineering Manager',
      org: 'Fintech Startup',
    },
  },
  {
    slug: 'software-development',
    icon: '📁',
    title: 'Software Development',
    tagline: 'BUILD. SHIP. SCALE.',
    summary: 'Creating modern digital products, applications, platforms, and technology solutions.',
    description:
      'From MVPs to enterprise platforms, we design and build software that fits your business — full-stack engineering with an emphasis on maintainability and long-term ownership.',
    capabilities: [
      'Web & mobile application development',
      'API design & integration',
      'Legacy system modernization',
      'Custom platform engineering',
      'Quality assurance & testing',
      'Ongoing maintenance & support',
    ],
    stats: [
      { end: 80, suffix: '+', label: 'Applications Shipped' },
      { end: 95, suffix: '%', label: 'Client Retention' },
      { end: 12, suffix: '+', label: 'Tech Stacks Supported' },
    ],
    quote: {
      text: 'They didn\u2019t just build what we asked for — they pushed back on requirements that would have hurt us long-term.',
      name: 'Product Lead',
      org: 'Healthcare Technology Company',
    },
  },
];

export const processSteps = [
  { num: '01', title: 'Discover', body: 'We learn your systems, goals, and constraints before recommending anything.' },
  { num: '02', title: 'Plan', body: 'A clear scope, timeline, and success criteria — agreed before work begins.' },
  { num: '03', title: 'Build', body: 'Execution with regular check-ins, so there are no surprises at delivery.' },
  { num: '04', title: 'Deliver', body: 'Handover, documentation, and support to make sure it keeps working.' },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slug, count = 3) {
  return services.filter((s) => s.slug !== slug).slice(0, count);
}
