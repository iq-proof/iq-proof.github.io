/**
 * Site-wide constants: single source of truth.
 *
 * SITE.name        → user-facing brand name (shown in header, OG, etc.)
 * SITE.url         → canonical URL including base path (project page under iq-universe)
 * SITE.github.org  → GitHub organization that owns the repo
 *
 * Note: brand name ≠ GitHub org by design.
 *   - Brand "IQ Blog" is the publishing identity for this project.
 *   - The repo now lives under `iq-universe` org as a project page (base: /iq-blog).
 */

export const SITE = {
  name: 'IQ Blog',
  tagline: 'deep-dive.engineering(ai)',
  description:
      '시스템과 이론, 코드와 수식을 오가는 딥다이브 로그. 표면의 사용법이 아닌, 본질을 증명하는 기록.',
  url: 'https://iq-universe.github.io/iq-blog',
  lang: 'ko',
  locale: 'ko-KR',
  timezone: 'Asia/Seoul',
  author: {
    name: '아이큐',
    handle: 'e9ua1',
    github: 'https://github.com/e9ua1',
  },
  github: {
    org: 'iq-universe',
    repo: 'iq-blog',
    url: 'https://github.com/iq-universe/iq-blog',
  },
} as const;

export const CATEGORIES = {
  dev: {
    slug: 'dev',
    label: 'Dev',
    description: '백엔드 시스템·아키텍처·엔지니어링 실무 — 내부 원리를 파헤치는 기록.',
    color: 'cyan',
    accent: 'var(--color-accent-cyan)',
    accentDim: 'var(--color-accent-cyan-dim)',
    accentLine: 'var(--color-accent-cyan-line)',
  },
  ai: {
    slug: 'ai',
    label: 'AI',
    description: '머신러닝 이론과 수학적 기반 — 수식이 왜 그렇게 쓰였는가를 증명하는 공간.',
    color: 'violet',
    accent: 'var(--color-accent-violet)',
    accentDim: 'var(--color-accent-violet-dim)',
    accentLine: 'var(--color-accent-violet-line)',
  },
  agent: {
    slug: 'agent',
    label: 'Agent',
    description: 'AI 에이전트 시스템과 자동화 인프라 — 자율 시스템의 설계와 운영 기록.',
    color: 'coral',
    accent: 'var(--color-accent-coral)',
    accentDim: 'var(--color-accent-coral-dim)',
    accentLine: 'var(--color-accent-coral-line)',
  },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/categories/dev', label: 'Dev' },
  { href: '/categories/ai', label: 'AI' },
  { href: '/categories/agent', label: 'Agent' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const;

export const SOCIAL = {
  github: 'https://github.com/e9ua1',
  devLab: 'https://github.com/iq-dev-lab',
  aiLab: 'https://github.com/iq-ai-lab',
  devLabSite: 'https://iq-dev-lab.github.io',
  aiLabSite: 'https://iq-ai-lab.github.io',
  rss: '/rss.xml',
} as const;

export const GISCUS = {
  repo: 'iq-universe/iq-blog',
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

export const GOATCOUNTER = {
  code: 'iq-proof',
} as const;

/* ─────────────────────────────────────────────────────────────
   PROJECTS — companion repositories (iq-dev-lab + iq-ai-lab)
   Single source of truth for the /projects page.
   ───────────────────────────────────────────────────────────── */

export type RepoEntry = {
  slug: string;
  title: string;
  description: string;
  docs?: number;
};

export type DevGroup = {
  title: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  repos: RepoEntry[];
};

export type AiLayer = {
  layer: string;
  title: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  repos: RepoEntry[];
};

/* ── iq-dev-lab: 9 groups, 38 repos ───────────────────────── */
export const DEV_LAB_GROUPS: DevGroup[] = [
  {
    title: 'Java Core',
    slug: 'java-core',
    icon: 'coffee',
    color: '#F59E0B',
    description: '언어와 JVM 내부 — 객체지향부터 가상 스레드까지',
    repos: [
      { slug: 'object', title: '오브젝트', description: '객체지향 설계의 역할·책임·협력 원칙' },
      { slug: 'modern-java-in-action', title: 'Modern Java in Action', description: '람다·스트림·CompletableFuture 함수형 프로그래밍' },
      { slug: 'java-api-reference', title: 'Java API Reference', description: '표준 라이브러리 원리와 실무 패턴' },
      { slug: 'java-design-patterns', title: 'Java Design Patterns', description: 'GoF·아키텍처·동시성 패턴 47가지 Before/After' },
      { slug: 'unit-testing', title: 'Unit Testing', description: '단위 테스트 설계 원칙과 Mocking 전략' },
      { slug: 'java-concurrency-deep-dive', title: 'Java Concurrency Deep Dive', description: 'JVM 락 메커니즘·CAS·AQS·가상 스레드', docs: 40 },
      { slug: 'jvm-deep-dive', title: 'JVM Deep Dive', description: '클래스 로딩·GC·JIT·메모리 모델 완전 해부', docs: 69 },
    ],
  },
  {
    title: 'Spring Ecosystem',
    slug: 'spring-ecosystem',
    icon: 'leaf',
    color: '#22C55E',
    description: '백엔드의 핵심 프레임워크 완전 해부',
    repos: [
      { slug: 'spring-core-deep-dive', title: 'Spring Core Deep Dive', description: 'IoC·DI·Bean 생명주기·AOP Proxy', docs: 51 },
      { slug: 'spring-data-transaction', title: 'Spring Data & Transaction', description: 'JPA 내부 구조·트랜잭션·Hibernate', docs: 45 },
      { slug: 'spring-boot-internals', title: 'Spring Boot Internals', description: 'Auto-configuration·Actuator·Property', docs: 45 },
      { slug: 'spring-mvc-deep-dive', title: 'Spring MVC Deep Dive', description: 'DispatcherServlet·HandlerMapping·Async', docs: 45 },
      { slug: 'spring-security-deep-dive', title: 'Spring Security Deep Dive', description: 'FilterChainProxy·JWT·OAuth2 Flow', docs: 45 },
      { slug: 'spring-batch-deep-dive', title: 'Spring Batch Deep Dive', description: 'ChunkOrientedTasklet·Partitioning', docs: 35 },
      { slug: 'spring-cloud-deep-dive', title: 'Spring Cloud Deep Dive', description: 'Config·Eureka·Gateway·Circuit Breaker', docs: 40 },
      { slug: 'spring-webflux-deep-dive', title: 'Spring WebFlux Deep Dive', description: 'Reactive Streams·Reactor·Netty·R2DBC', docs: 40 },
    ],
  },
  {
    title: 'Architecture & Design',
    slug: 'architecture-design',
    icon: 'layers',
    color: '#06B6D4',
    description: '도메인 설계부터 분산 아키텍처까지',
    repos: [
      { slug: 'architecture-patterns-deep-dive', title: 'Architecture Patterns', description: 'Layered→Hexagonal→Clean, Uncle Bob 4원칙', docs: 39 },
      { slug: 'ddd-deep-dive', title: 'DDD Deep Dive', description: 'Bounded Context·Aggregate·Domain Event', docs: 43 },
      { slug: 'cqrs-event-sourcing-deep-dive', title: 'CQRS + Event Sourcing', description: 'CQS·Event Store·Projection 원리', docs: 40 },
      { slug: 'msa-deep-dive', title: 'MSA Deep Dive', description: 'Saga 분산 트랜잭션·서비스 경계·Circuit Breaker', docs: 41 },
      { slug: 'system-design-deep-dive', title: 'System Design Deep Dive', description: '대규모 시스템 설계 원칙·케이스 스터디', docs: 42 },
    ],
  },
  {
    title: 'Infrastructure & DevOps',
    slug: 'infrastructure-devops',
    icon: 'server',
    color: '#A78BFA',
    description: '코드가 운반되고 실행되는 모든 것',
    repos: [
      { slug: 'linux-for-backend-deep-dive', title: 'Linux for Backend', description: '커널 I/O·메모리·스케줄러·epoll', docs: 38 },
      { slug: 'network-deep-dive', title: 'Network Deep Dive', description: 'TCP·TLS 1.3·HTTP/2 멀티플렉싱', docs: 37 },
      { slug: 'git-in-depth', title: 'Git In-Depth', description: 'Object Model·Rebase 심화·트러블슈팅' },
      { slug: 'docker-deep-dive', title: 'Docker Deep Dive', description: 'Namespaces·Cgroups·UnionFS·네트워킹' },
      { slug: 'kubernetes-deep-dive', title: 'Kubernetes Deep Dive', description: 'Control Plane·etcd·Scheduler·HPA', docs: 40 },
      { slug: 'cicd-deep-dive', title: 'CI/CD Pipeline', description: 'GitHub Actions·Docker 캐시·ArgoCD·카나리', docs: 40 },
      { slug: 'observability-deep-dive', title: 'Observability', description: 'Java Agent·Prometheus·OpenTelemetry', docs: 35 },
    ],
  },
  {
    title: 'Database',
    slug: 'database',
    icon: 'database',
    color: '#3B82F6',
    description: '데이터가 저장되고 조회되는 엔진 내부',
    repos: [
      { slug: 'database-internals', title: 'Database Internals', description: 'Buffer Pool·B-Tree·MVCC·Gap Lock', docs: 40 },
      { slug: 'mysql-deep-dive', title: 'MySQL Deep Dive', description: '실행계획·Binary Log·Replication Lag', docs: 38 },
      { slug: 'postgresql-deep-dive', title: 'PostgreSQL Deep Dive', description: 'MVCC·VACUUM·SSI·Index-Only Scan', docs: 41 },
      { slug: 'redis-deep-dive', title: 'Redis Deep Dive', description: '자료구조·RDB/AOF·클러스터·Stream', docs: 37 },
      { slug: 'elasticsearch-deep-dive', title: 'Elasticsearch Deep Dive', description: 'Lucene 역색인·BM25·Shard 분산', docs: 38 },
      { slug: 'db-migration-deep-dive', title: 'DB Migration', description: 'Flyway·Online DDL·Expand-Contract 무중단', docs: 38 },
    ],
  },
  {
    title: 'Messaging & Streaming',
    slug: 'messaging-streaming',
    icon: 'radio',
    color: '#F97316',
    description: '비동기 통신과 이벤트 스트리밍',
    repos: [
      { slug: 'kafka-deep-dive', title: 'Kafka Deep Dive', description: '파티션·ISR·acks·Exactly-Once 구현', docs: 37 },
      { slug: 'rabbitmq-deep-dive', title: 'RabbitMQ Deep Dive', description: 'Exchange 라우팅·Quorum Queue·Outbox', docs: 38 },
    ],
  },
  {
    title: 'API & Communication',
    slug: 'api-communication',
    icon: 'arrow-left-right',
    color: '#38BDF8',
    description: '서비스 간 통신 프로토콜의 내부',
    repos: [
      { slug: 'grpc-deep-dive', title: 'gRPC + Protocol Buffers', description: 'Protobuf TLV·HTTP/2 스트림·Deadline 전파', docs: 38 },
    ],
  },
  {
    title: 'Security Engineering',
    slug: 'security-engineering',
    icon: 'shield',
    color: '#F43F5E',
    description: '공격의 근본 원인과 방어 설계',
    repos: [
      { slug: 'security-engineering-deep-dive', title: 'Security Engineering', description: 'STRIDE·SQLi/XSS/CSRF·JWT 공격·SSRF·OWASP', docs: 41 },
    ],
  },
  {
    title: 'Performance & Quality',
    slug: 'performance-quality',
    icon: 'gauge',
    color: '#34D399',
    description: '시스템을 더 빠르고 투명하게',
    repos: [
      { slug: 'performance-testing-deep-dive', title: 'Performance Testing', description: 'k6 부하·p95/p99·Flame Graph·GC STW', docs: 39 },
    ],
  },
];

/* ── iq-ai-lab: 11 layers, 48 repos ───────────────────────── */
export const AI_LAB_LAYERS: AiLayer[] = [
  {
    layer: '0',
    title: 'Mathematics',
    slug: 'mathematics',
    icon: 'function-square',
    color: '#3B82F6',
    description: '모든 AI 수식의 출발점 — 미분·확률·정보의 언어',
    repos: [
      { slug: 'linear-algebra-deep-dive', title: 'Linear Algebra', description: '벡터공간·고유값·SVD·PCA 증명·텐서' },
      { slug: 'probability-theory-deep-dive', title: 'Probability Theory', description: '측도 기반 확률론·마팅게일·수렴 4종' },
      { slug: 'mathematical-statistics-deep-dive', title: 'Mathematical Statistics', description: 'MLE/MAP 유도·가설검정·점근이론' },
      { slug: 'calculus-optimization-deep-dive', title: 'Calculus & Optimization', description: '편미분·야코비안·헤시안·라그랑주' },
      { slug: 'convex-optimization-deep-dive', title: 'Convex Optimization', description: '볼록 집합/함수·KKT 조건·쌍대이론' },
      { slug: 'information-theory-deep-dive', title: 'Information Theory', description: 'Shannon Entropy·KL-Divergence·상호정보량' },
      { slug: 'stochastic-processes-deep-dive', title: 'Stochastic Processes', description: '마르코프 체인·브라운 운동·MCMC' },
      { slug: 'sde-deep-dive', title: 'Stochastic Differential Equations', description: '이토 적분·SDE·Fokker-Planck 방정식' },
      { slug: 'functional-analysis-deep-dive', title: 'Functional Analysis', description: '힐베르트 공간·스펙트럴 이론·RKHS' },
      { slug: 'information-geometry-deep-dive', title: 'Information Geometry', description: '통계다양체·Fisher 정보·Natural Gradient' },
    ],
  },
  {
    layer: '1',
    title: 'ML Theory',
    slug: 'ml-theory',
    icon: 'brain',
    color: '#8B5CF6',
    description: '고전 ML의 수학적 토대 — 왜 일반화되는가',
    repos: [
      { slug: 'ml-fundamentals-deep-dive', title: 'ML Fundamentals', description: '선형회귀 Normal Eq·SVM·앙상블 수렴' },
      { slug: 'statistical-learning-theory-deep-dive', title: 'Statistical Learning Theory', description: 'PAC 학습·VC 차원·Rademacher 복잡도' },
      { slug: 'kernel-methods-deep-dive', title: 'Kernel Methods', description: '커널 트릭·Mercer 정리·RKHS' },
      { slug: 'bayesian-ml-deep-dive', title: 'Bayesian ML', description: 'Variational Inference·MCMC·GP' },
      { slug: 'graphical-models-deep-dive', title: 'Graphical Models', description: 'Bayesian/Markov Network·Inference' },
    ],
  },
  {
    layer: '2',
    title: 'Neural Network Theory',
    slug: 'neural-network-theory',
    icon: 'network',
    color: '#EF4444',
    description: '신경망이 왜 작동하는가 — 이론적 기반',
    repos: [
      { slug: 'neural-network-theory-deep-dive', title: 'Neural Network Theory', description: '역전파·보편 근사 정리·표현력' },
      { slug: 'optimization-theory-deep-dive', title: 'Optimization Theory', description: 'SGD 수렴·Adam·Second-order 방법' },
      { slug: 'generalization-theory-deep-dive', title: 'Generalization Theory', description: 'Double Descent·NTK·Lottery Ticket' },
      { slug: 'regularization-theory-deep-dive', title: 'Regularization Theory', description: 'Dropout·BatchNorm·Weight Decay 이론' },
    ],
  },
  {
    layer: '3',
    title: 'Architectures',
    slug: 'architectures',
    icon: 'layers-3',
    color: '#22C55E',
    description: '현대 AI의 벽돌들 — 아키텍처 해부',
    repos: [
      { slug: 'cnn-deep-dive', title: 'CNN Deep Dive', description: 'Convolution·Pooling·ResNet·EfficientNet' },
      { slug: 'rnn-lstm-deep-dive', title: 'RNN & LSTM', description: '시퀀스 모델링·Vanishing Gradient·Gate 메커니즘' },
      { slug: 'transformer-deep-dive', title: 'Transformer Deep Dive', description: 'Self-Attention·Multi-Head·Positional Encoding' },
      { slug: 'gnn-deep-dive', title: 'Graph Neural Network', description: 'Message Passing·GCN·GAT·GraphSAGE' },
      { slug: 'generative-model-deep-dive', title: 'Generative Model', description: 'VAE·GAN·Flow·Score-based' },
    ],
  },
  {
    layer: '4-A',
    title: 'Reinforcement Learning',
    slug: 'reinforcement-learning',
    icon: 'target',
    color: '#EC4899',
    description: '의사결정의 수학 — MDP부터 PPO까지',
    repos: [
      { slug: 'rl-foundations-deep-dive', title: 'RL Foundations', description: 'MDP·Bellman Equation·DP·Monte Carlo' },
      { slug: 'model-free-rl-deep-dive', title: 'Model-Free RL', description: 'Q-Learning·SARSA·TD Learning' },
      { slug: 'deep-rl-deep-dive', title: 'Deep RL', description: 'DQN·Double/Dueling·Rainbow' },
      { slug: 'policy-gradient-deep-dive', title: 'Policy Gradient', description: 'REINFORCE·Actor-Critic·PPO·GRPO' },
      { slug: 'advanced-rl-deep-dive', title: 'Advanced RL', description: 'Model-based·Offline RL·Meta-RL' },
      { slug: 'rl-theory-deep-dive', title: 'RL Theory', description: '수렴 증명·Sample Complexity·Regret' },
    ],
  },
  {
    layer: '4-B',
    title: 'Large Language Models',
    slug: 'large-language-models',
    icon: 'message-square',
    color: '#6366F1',
    description: 'LLM의 학습과 추론 — Scaling과 Alignment',
    repos: [
      { slug: 'llm-pretraining-deep-dive', title: 'LLM Pretraining', description: 'Scaling Law·Chinchilla·Data Curation' },
      { slug: 'llm-alignment-deep-dive', title: 'LLM Alignment', description: 'RLHF·DPO·Constitutional AI' },
      { slug: 'llm-efficiency-deep-dive', title: 'LLM Efficiency', description: 'LoRA·QLoRA·Quantization·Distillation' },
      { slug: 'llm-inference-deep-dive', title: 'LLM Inference', description: 'KV Cache·Speculative Decoding·vLLM' },
    ],
  },
  {
    layer: '4-C',
    title: 'Computer Vision & 3D',
    slug: 'computer-vision-3d',
    icon: 'eye',
    color: '#14B8A6',
    description: '이미지·3D의 수학적 구조',
    repos: [
      { slug: 'vision-transformer-deep-dive', title: 'Vision Transformer', description: 'ViT·DINO·MAE·CLIP' },
      { slug: 'object-detection-deep-dive', title: 'Object Detection', description: 'R-CNN·YOLO·DETR·Segment Anything' },
      { slug: 'diffusion-model-deep-dive', title: 'Diffusion Model', description: 'DDPM·Score Matching·Stable Diffusion' },
      { slug: '3d-neural-rendering-deep-dive', title: '3D & Neural Rendering', description: 'NeRF·Gaussian Splatting·SDF' },
    ],
  },
  {
    layer: '4-D',
    title: 'NLP',
    slug: 'nlp',
    icon: 'languages',
    color: '#F59E0B',
    description: '언어 처리의 전통적 기반',
    repos: [
      { slug: 'nlp-foundations-deep-dive', title: 'NLP Foundations', description: 'Tokenization·Word Embedding·Parsing' },
      { slug: 'pretrained-lm-deep-dive', title: 'Pretrained LM', description: 'BERT·GPT·T5 아키텍처와 학습' },
    ],
  },
  {
    layer: '4-E',
    title: 'Audio & Speech',
    slug: 'audio-speech',
    icon: 'mic',
    color: '#F97316',
    description: '음성·오디오 신호의 딥러닝',
    repos: [
      { slug: 'audio-speech-deep-dive', title: 'Audio & Speech', description: 'Whisper·wav2vec·Spectrogram·TTS' },
    ],
  },
  {
    layer: '5',
    title: 'Systems',
    slug: 'systems',
    icon: 'cpu',
    color: '#A78BFA',
    description: '수학을 실제 시스템으로 — 학습 엔진과 배포',
    repos: [
      { slug: 'pytorch-internals-deep-dive', title: 'PyTorch Internals', description: 'Autograd·Dispatcher·Tensor 메모리' },
      { slug: 'distributed-training-deep-dive', title: 'Distributed Training', description: 'DDP·FSDP·Pipeline/Tensor Parallel' },
      { slug: 'efficient-ml-deep-dive', title: 'Efficient ML', description: 'Pruning·Quantization·Flash Attention' },
      { slug: 'experimental-statistics-mlops-deep-dive', title: 'Experimental Statistics & MLOps', description: 'A/B Test·실험 설계·Model Registry·Serving' },
    ],
  },
  {
    layer: '6',
    title: 'Frontier LLM',
    slug: 'frontier-llm',
    icon: 'sparkles',
    color: '#06B6D4',
    description: '현재 진행형 연구 — 해석·추론·검색',
    repos: [
      { slug: 'mechanistic-interpretability-deep-dive', title: 'Mechanistic Interpretability', description: 'Sparse Autoencoder·Circuit 분석' },
      { slug: 'llm-reasoning-deep-dive', title: 'LLM Reasoning', description: 'CoT·Tree of Thoughts·Self-Consistency·추론 체인' },
      { slug: 'retrieval-rag-deep-dive', title: 'Retrieval & RAG', description: 'Dense Retrieval·RAG·Multi-Vector' },
    ],
  },
];
