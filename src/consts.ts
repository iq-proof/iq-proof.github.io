/**
 * Site-wide constants: single source of truth.
 *
 * SITE.name        → user-facing brand name (shown in header, OG, etc.)
 * SITE.url         → canonical URL (GitHub Pages deployment target)
 * SITE.github.org  → GitHub organization that owns the repo
 *
 * Note: brand name ≠ GitHub org by design.
 *   - Brand "IQ Lab" is the umbrella identity shared with `iq-dev-lab` / `iq-ai-lab`.
 *   - GitHub org `iq-proof` is the technical home; the name `iq-lab` was already taken.
 *
 * Fill in Giscus `repoId` / `categoryId` and GoatCounter `code` in Step C.
 */

export const SITE = {
  name: 'IQ Lab',
  tagline: 'deep-dive.engineering(ai)',
  description:
      '백엔드 시스템과 AI의 수학적 기반을 파고드는 마스터의 딥다이브 로그. 표면적인 사용법이 아닌, 본질을 증명하는 기록.',
  url: 'https://iq-proof.github.io',
  lang: 'ko',
  locale: 'ko-KR',
  timezone: 'Asia/Seoul',
  author: {
    name: '마스터',
    handle: 'e9ua1',
    github: 'https://github.com/e9ua1',
  },
  github: {
    org: 'iq-proof',
    repo: 'iq-proof.github.io',
    url: 'https://github.com/iq-proof/iq-proof.github.io',
  },
} as const;

export const CATEGORIES = {
  dev: {
    slug: 'dev',
    label: 'Dev',
    description: 'Backend systems, architecture, and engineering practice.',
    color: 'cyan',
    accent: 'var(--color-accent-cyan)',
    accentDim: 'var(--color-accent-cyan-dim)',
    accentLine: 'var(--color-accent-cyan-line)',
  },
  ai: {
    slug: 'ai',
    label: 'AI',
    description: 'Machine learning theory and mathematical foundations.',
    color: 'violet',
    accent: 'var(--color-accent-violet)',
    accentDim: 'var(--color-accent-violet-dim)',
    accentLine: 'var(--color-accent-violet-line)',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/categories/dev', label: 'Dev' },
  { href: '/categories/ai', label: 'AI' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const;

/**
 * External links.
 * - `github`       : personal profile (the author)
 * - `devLab` / `aiLab`       : GitHub organization (source repos)
 * - `devLabSite` / `aiLabSite`: GitHub Pages site (rendered knowledge map)
 */
export const SOCIAL = {
  github: 'https://github.com/e9ua1',
  devLab: 'https://github.com/iq-dev-lab',
  aiLab: 'https://github.com/iq-ai-lab',
  devLabSite: 'https://iq-dev-lab.github.io',
  aiLabSite: 'https://iq-ai-lab.github.io',
  rss: '/rss.xml',
} as const;

/**
 * Giscus — configure at https://giscus.app using repo `iq-proof/iq-proof.github.io`
 * and paste the emitted repoId / categoryId below (Step C).
 */
export const GISCUS = {
  repo: 'iq-proof/iq-proof.github.io',
  repoId: 'R_kgDOSE5sbQ',
  category: 'Comments',
  categoryId: 'DIC_kwDOSE5sbc4C7CBO',
  mapping: 'pathname',
  strict: '0',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'bottom',
  theme: 'noborder_dark',
  lang: 'ko',
  loading: 'lazy',
} as const;

/**
 * GoatCounter — create an account at goatcounter.com, then set `code` (Step C).
 * e.g. code: 'iq-proof'  →  https://iq-proof.goatcounter.com
 */
export const GOATCOUNTER = {
  code: 'iq-proof',
} as const;

/* ─────────────────────────────────────────────────────────────
   PROJECTS — companion repositories (iq-dev-lab + iq-ai-lab)
   Single source of truth for the /projects page.
   To add a new repo: append to the matching group's `repos` array.
   ───────────────────────────────────────────────────────────── */

export type RepoEntry = {
  slug: string; // GitHub repo name (used in URL)
  title: string; // display title
};

export type DevGroup = {
  title: string;
  slug: string; // for anchor links
  repos: RepoEntry[];
};

export type AiLayer = {
  layer: string; // "0" | "1" | ... | "4-A" | "6"
  title: string;
  slug: string;
  repos: RepoEntry[];
};

/* ── iq-dev-lab: 9 groups, 38 repos ───────────────────────── */
export const DEV_LAB_GROUPS: DevGroup[] = [
  {
    title: 'Java Core',
    slug: 'java-core',
    repos: [
      { slug: 'object', title: '오브젝트 (Objects)' },
      { slug: 'modern-java-in-action', title: 'Modern Java in Action' },
      { slug: 'java-api-reference', title: 'Java API Reference' },
      { slug: 'java-design-patterns', title: 'Java Design Patterns' },
      { slug: 'unit-testing', title: 'Unit Testing' },
      { slug: 'java-concurrency-deep-dive', title: 'Java Concurrency Deep Dive' },
      { slug: 'jvm-deep-dive', title: 'JVM Deep Dive' },
    ],
  },
  {
    title: 'Spring Ecosystem',
    slug: 'spring-ecosystem',
    repos: [
      { slug: 'spring-core-deep-dive', title: 'Spring Core Deep Dive' },
      { slug: 'spring-data-transaction', title: 'Spring Data & Transaction' },
      { slug: 'spring-boot-internals', title: 'Spring Boot Internals' },
      { slug: 'spring-mvc-deep-dive', title: 'Spring MVC Deep Dive' },
      { slug: 'spring-security-deep-dive', title: 'Spring Security Deep Dive' },
      { slug: 'spring-batch-deep-dive', title: 'Spring Batch Deep Dive' },
      { slug: 'spring-cloud-deep-dive', title: 'Spring Cloud Deep Dive' },
      { slug: 'spring-webflux-deep-dive', title: 'Spring WebFlux Deep Dive' },
    ],
  },
  {
    title: 'Architecture & Design',
    slug: 'architecture-design',
    repos: [
      { slug: 'architecture-patterns-deep-dive', title: 'Architecture Patterns Deep Dive' },
      { slug: 'ddd-deep-dive', title: 'DDD Deep Dive' },
      { slug: 'cqrs-event-sourcing-deep-dive', title: 'CQRS + Event Sourcing Deep Dive' },
      { slug: 'msa-deep-dive', title: 'MSA Deep Dive' },
      { slug: 'system-design-deep-dive', title: 'System Design Deep Dive' },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    slug: 'infrastructure-devops',
    repos: [
      { slug: 'linux-for-backend-deep-dive', title: 'Linux for Backend Deep Dive' },
      { slug: 'network-deep-dive', title: 'Network Deep Dive' },
      { slug: 'git-in-depth', title: 'Git In-Depth' },
      { slug: 'docker-deep-dive', title: 'Docker Deep Dive' },
      { slug: 'kubernetes-deep-dive', title: 'Kubernetes Deep Dive' },
      { slug: 'observability-deep-dive', title: 'Observability Deep Dive' },
      { slug: 'cicd-deep-dive', title: 'CI/CD Pipeline Deep Dive' },
    ],
  },
  {
    title: 'Database',
    slug: 'database',
    repos: [
      { slug: 'database-internals', title: 'Database Internals Deep Dive' },
      { slug: 'mysql-deep-dive', title: 'MySQL Deep Dive' },
      { slug: 'postgresql-deep-dive', title: 'PostgreSQL Deep Dive' },
      { slug: 'redis-deep-dive', title: 'Redis Deep Dive' },
      { slug: 'elasticsearch-deep-dive', title: 'Elasticsearch Deep Dive' },
      { slug: 'db-migration-deep-dive', title: 'DB Migration Deep Dive' },
    ],
  },
  {
    title: 'Messaging & Streaming',
    slug: 'messaging-streaming',
    repos: [
      { slug: 'kafka-deep-dive', title: 'Kafka Deep Dive' },
      { slug: 'rabbitmq-deep-dive', title: 'RabbitMQ Deep Dive' },
    ],
  },
  {
    title: 'API & Communication',
    slug: 'api-communication',
    repos: [
      { slug: 'grpc-deep-dive', title: 'gRPC + Protocol Buffers Deep Dive' },
    ],
  },
  {
    title: 'Security Engineering',
    slug: 'security-engineering',
    repos: [
      { slug: 'security-engineering-deep-dive', title: 'Security Engineering Deep Dive' },
    ],
  },
  {
    title: 'Performance & Quality',
    slug: 'performance-quality',
    repos: [
      { slug: 'performance-testing-deep-dive', title: 'Performance Testing Deep Dive' },
    ],
  },
];

/* ── iq-ai-lab: 11 layers, 48 repos ───────────────────────── */
export const AI_LAB_LAYERS: AiLayer[] = [
  {
    layer: '0',
    title: 'Mathematics',
    slug: 'mathematics',
    repos: [
      { slug: 'linear-algebra-deep-dive', title: 'Linear Algebra Deep Dive' },
      { slug: 'probability-theory-deep-dive', title: 'Probability Theory Deep Dive' },
      { slug: 'mathematical-statistics-deep-dive', title: 'Mathematical Statistics Deep Dive' },
      { slug: 'calculus-optimization-deep-dive', title: 'Calculus & Optimization Deep Dive' },
      { slug: 'convex-optimization-deep-dive', title: 'Convex Optimization Deep Dive' },
      { slug: 'information-theory-deep-dive', title: 'Information Theory Deep Dive' },
      { slug: 'stochastic-processes-deep-dive', title: 'Stochastic Processes Deep Dive' },
      { slug: 'sde-deep-dive', title: 'Stochastic Differential Equations Deep Dive' },
      { slug: 'functional-analysis-deep-dive', title: 'Functional Analysis Deep Dive' },
      { slug: 'information-geometry-deep-dive', title: 'Information Geometry Deep Dive' },
    ],
  },
  {
    layer: '1',
    title: 'ML Theory',
    slug: 'ml-theory',
    repos: [
      { slug: 'ml-fundamentals-deep-dive', title: 'ML Fundamentals Deep Dive' },
      { slug: 'statistical-learning-theory-deep-dive', title: 'Statistical Learning Theory Deep Dive' },
      { slug: 'kernel-methods-deep-dive', title: 'Kernel Methods Deep Dive' },
      { slug: 'bayesian-ml-deep-dive', title: 'Bayesian ML Deep Dive' },
      { slug: 'graphical-models-deep-dive', title: 'Graphical Models Deep Dive' },
    ],
  },
  {
    layer: '2',
    title: 'Neural Network Theory',
    slug: 'neural-network-theory',
    repos: [
      { slug: 'neural-network-theory-deep-dive', title: 'Neural Network Theory Deep Dive' },
      { slug: 'optimization-theory-deep-dive', title: 'Optimization Theory Deep Dive' },
      { slug: 'generalization-theory-deep-dive', title: 'Generalization Theory Deep Dive' },
      { slug: 'regularization-theory-deep-dive', title: 'Regularization Theory Deep Dive' },
    ],
  },
  {
    layer: '3',
    title: 'Architectures',
    slug: 'architectures',
    repos: [
      { slug: 'cnn-deep-dive', title: 'CNN Deep Dive' },
      { slug: 'rnn-lstm-deep-dive', title: 'RNN & LSTM Deep Dive' },
      { slug: 'transformer-deep-dive', title: 'Transformer Deep Dive' },
      { slug: 'gnn-deep-dive', title: 'Graph Neural Network Deep Dive' },
      { slug: 'generative-model-deep-dive', title: 'Generative Model Deep Dive' },
    ],
  },
  {
    layer: '4-A',
    title: 'Reinforcement Learning',
    slug: 'reinforcement-learning',
    repos: [
      { slug: 'rl-foundations-deep-dive', title: 'RL Foundations Deep Dive' },
      { slug: 'model-free-rl-deep-dive', title: 'Model-Free RL Deep Dive' },
      { slug: 'deep-rl-deep-dive', title: 'Deep RL Deep Dive' },
      { slug: 'policy-gradient-deep-dive', title: 'Policy Gradient Deep Dive' },
      { slug: 'advanced-rl-deep-dive', title: 'Advanced RL Deep Dive' },
      { slug: 'rl-theory-deep-dive', title: 'RL Theory Deep Dive' },
    ],
  },
  {
    layer: '4-B',
    title: 'Large Language Models',
    slug: 'large-language-models',
    repos: [
      { slug: 'llm-pretraining-deep-dive', title: 'LLM Pretraining Deep Dive' },
      { slug: 'llm-alignment-deep-dive', title: 'LLM Alignment Deep Dive' },
      { slug: 'llm-efficiency-deep-dive', title: 'LLM Efficiency Deep Dive' },
      { slug: 'llm-inference-deep-dive', title: 'LLM Inference Deep Dive' },
    ],
  },
  {
    layer: '4-C',
    title: 'Computer Vision & 3D',
    slug: 'computer-vision-3d',
    repos: [
      { slug: 'vision-transformer-deep-dive', title: 'Vision Transformer Deep Dive' },
      { slug: 'object-detection-deep-dive', title: 'Object Detection Deep Dive' },
      { slug: 'diffusion-model-deep-dive', title: 'Diffusion Model Deep Dive' },
      { slug: '3d-neural-rendering-deep-dive', title: '3D & Neural Rendering Deep Dive' },
    ],
  },
  {
    layer: '4-D',
    title: 'NLP',
    slug: 'nlp',
    repos: [
      { slug: 'nlp-foundations-deep-dive', title: 'NLP Foundations Deep Dive' },
      { slug: 'pretrained-lm-deep-dive', title: 'Pretrained LM Deep Dive' },
    ],
  },
  {
    layer: '4-E',
    title: 'Audio & Speech',
    slug: 'audio-speech',
    repos: [
      { slug: 'audio-speech-deep-dive', title: 'Audio & Speech Deep Dive' },
    ],
  },
  {
    layer: '5',
    title: 'Systems',
    slug: 'systems',
    repos: [
      { slug: 'pytorch-internals-deep-dive', title: 'PyTorch Internals Deep Dive' },
      { slug: 'distributed-training-deep-dive', title: 'Distributed Training Deep Dive' },
      { slug: 'efficient-ml-deep-dive', title: 'Efficient ML Deep Dive' },
      { slug: 'mlops-deep-dive', title: 'MLOps Deep Dive' },
    ],
  },
  {
    layer: '6',
    title: 'Frontier LLM',
    slug: 'frontier-llm',
    repos: [
      { slug: 'mechanistic-interpretability-deep-dive', title: 'Mechanistic Interpretability Deep Dive' },
      { slug: 'llm-reasoning-agents-deep-dive', title: 'LLM Reasoning & Agents Deep Dive' },
      { slug: 'retrieval-rag-deep-dive', title: 'Retrieval & RAG Deep Dive' },
    ],
  },
];
