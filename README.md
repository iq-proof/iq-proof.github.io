# IQ Lab Blog

> **Deep-dive logs on backend systems and AI.**
> 표면적인 사용법이 아닌, 본질을 증명하는 기록.
>
> https://iq-proof.github.io

## Stack

- **Framework**: Astro 5 + MDX + Tailwind 4
- **Hosting**: GitHub Pages (via GitHub Actions)
- **Comments & Reactions**: Giscus (GitHub Discussions)
- **Analytics**: GoatCounter (privacy-friendly, cookieless)
- **Search**: Pagefind (static full-text, ⌘K)
- **Math**: KaTeX · **Diagrams**: Mermaid · **Code**: Shiki (Night Owl)
- **Typography**: Pretendard + JetBrains Mono

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ + pagefind index
npm run preview
```

Node.js 22 권장 (`.nvmrc` 참고).

## Project structure

```
iq-proof.github.io/
├── .github/workflows/     # GitHub Actions (deploy)
├── public/                # static assets, favicon, robots.txt
├── src/
│   ├── components/        # UI + MDX components
│   ├── content/posts/     # blog posts (.md / .mdx)
│   ├── layouts/           # page shells
│   ├── pages/             # file-based routes
│   ├── styles/            # global.css + design tokens
│   ├── consts.ts          # site metadata, nav, social
│   └── content.config.ts  # content collections schema
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Naming

| 구분 | 값 | 설명 |
|:-----|:---|:-----|
| Brand | **IQ Lab** | 사용자 화면에 보이는 브랜드명 (`iq-dev-lab`/`iq-ai-lab`과 상위 브랜드 공유) |
| GitHub org | `iq-proof` | 기술적 저장소 경로 (`iq-lab`이 선점되어 있어 채택) |
| URL | `iq-proof.github.io` | GitHub Pages 배포 주소 |

`src/consts.ts`에서 `SITE.name`만 바꾸면 브랜드명은 언제든 교체 가능.

## Categories

| Slug | Label | Topic |
|:-----|:------|:------|
| `dev` | Dev | 백엔드 시스템, 아키텍처, 엔지니어링 실전 |
| `ai`  | AI  | 머신러닝 이론, 수학적 기반 |

## Writing a post

`src/content/posts/your-slug.mdx` 파일 생성:

```yaml
---
title: "포스트 제목"
description: "한 문장 요약"
pubDate: 2026-04-17
category: dev         # 'dev' | 'ai'
tags: [spring, aop, jvm]
series: null          # optional: 'spring-aop-series'
draft: false
---

본문은 마크다운 + MDX 컴포넌트 사용 가능.
```

## Related

- **iq-dev-lab** — Backend deep-dive studies: https://github.com/iq-dev-lab
- **iq-ai-lab** — AI / ML deep-dive studies: https://github.com/iq-ai-lab

## License

- **Code** — MIT
- **Content (posts)** — CC BY-NC-SA 4.0
