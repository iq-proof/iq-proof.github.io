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

export const SOCIAL = {
  github: 'https://github.com/e9ua1',
  devLab: 'https://github.com/iq-dev-lab',
  aiLab: 'https://github.com/iq-ai-lab',
  rss: '/rss.xml',
} as const;

/**
 * Giscus — configure at https://giscus.app using repo `iq-proof/iq-proof.github.io`
 * and paste the emitted repoId / categoryId below (Step C).
 */
export const GISCUS = {
  repo: 'iq-proof/iq-proof.github.io',
  repoId: '',
  category: 'Comments',
  categoryId: '',
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
  code: '',
} as const;
