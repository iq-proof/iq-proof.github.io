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
- **OG images**: auto-generated per post (Satori + resvg)
- **Typography**: Pretendard + JetBrains Mono

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ + pagefind index + OG images
npm run preview
```

Node.js 22 권장 (`.nvmrc` 참고).

## Project structure

```
iq-proof.github.io/
├── .github/workflows/deploy.yml   # GitHub Actions (build + deploy)
├── public/                        # static assets, favicon, robots.txt
├── src/
│   ├── components/
│   │   ├── mdx/                   # Callout, Theorem, Proof, Figure, Collapse, Aside, Reference
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── CategoryBadge.astro  · DifficultyBadge.astro · TagPill.astro
│   │   ├── Giscus.astro         · GoatCounter.astro
│   │   ├── SearchModal.astro    · JsonLd.astro
│   │   └── SectionHeader.astro
│   ├── content/posts/             # blog posts (.md / .mdx)
│   ├── layouts/                   # BaseLayout, PostLayout
│   ├── pages/
│   │   ├── index.astro           · posts/ · categories/ · tags/ · series/
│   │   ├── about · archive · projects · 404
│   │   ├── rss.xml.ts
│   │   └── og/[slug].png.ts     · og-default.png.ts
│   ├── styles/global.css          # design tokens + prose + Shiki + KaTeX
│   ├── utils/
│   │   ├── posts.ts               # filter/sort/aggregate/reading-time
│   │   └── og-template.ts         # Satori OG card layout
│   ├── consts.ts                  # SITE meta, categories, nav, Giscus/GoatCounter config
│   └── content.config.ts          # Zod schema
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Launch checklist

블로그를 실제로 온라인에 띄우려면 다음 순서로 진행.

### 1. GitHub Pages 활성화

1. `https://github.com/iq-proof/iq-proof.github.io/settings/pages` 이동
2. Source → **GitHub Actions** 선택
3. 이 설정만 하면 됨. 브랜치 선택 없음.

### 2. Giscus 설정

1. https://giscus.app 접속
2. **Repository**: `iq-proof/iq-proof.github.io` 입력
3. **Page ↔ Discussions Mapping**: `pathname` 선택
4. **Discussion Category**: `Comments` 선택
5. **Features**: `Enable reactions for main post` 체크 (좋아요 기능)
6. **Theme**: `Dark (No Border)` 선택
7. 페이지 하단에 생성된 코드에서 두 값 복사:
   - `data-repo-id="R_..."`
   - `data-category-id="DIC_..."`
8. `src/consts.ts` 열어 `GISCUS.repoId`, `GISCUS.categoryId`에 붙여넣기

### 3. GoatCounter 설정

1. https://www.goatcounter.com/signup 이동
2. **Site code**: `iq-proof` 입력 (→ `https://iq-proof.goatcounter.com`)
3. **Email**: 본인 이메일
4. 계정 생성 후, `src/consts.ts` 열어 `GOATCOUNTER.code = 'iq-proof'` 수정
5. Dashboard → Settings → Sites → **Add domain**: `iq-proof.github.io` 등록

### 4. 첫 배포

```bash
git add .
git commit -m "chore: configure giscus + goatcounter"
git push
```

푸시하면 Actions 탭에서 빌드/배포가 자동으로 시작. 2~3분 후 `https://iq-proof.github.io` 접속 가능.

## Naming

| 구분 | 값 | 설명 |
|:-----|:---|:-----|
| Brand | **IQ Lab** | 사용자 화면에 보이는 브랜드명 |
| GitHub org | `iq-proof` | 기술적 저장소 경로 (`iq-lab` 선점됨) |
| URL | `iq-proof.github.io` | GitHub Pages 배포 주소 |

`src/consts.ts`에서 `SITE.name`만 바꾸면 브랜드명 교체 가능.

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
updatedDate: 2026-04-20     # optional
category: dev               # 'dev' | 'ai'
tags: [spring, aop, jvm]
difficulty: intermediate    # 'beginner' | 'intermediate' | 'advanced' · optional
series:                     # optional
  slug: spring-aop-internals
  title: Spring AOP Internals
  order: 1
draft: false
featured: false
---

import Callout from '@/components/mdx/Callout.astro';
import Theorem from '@/components/mdx/Theorem.astro';
import Proof from '@/components/mdx/Proof.astro';

본문은 마크다운 + 위 컴포넌트 자유 사용.

<Callout type="tip" title="핵심">
...
</Callout>

$$E = mc^2$$
```

### MDX 컴포넌트

| 컴포넌트 | 용도 | Props |
|:---------|:-----|:------|
| `<Callout />` | 정보/경고/팁 박스 | `type`: info/note/warning/danger/success/tip |
| `<Theorem />` | 정리/정의/보조정리 | `kind`, `number`, `title` |
| `<Proof />` | QED 증명 블록 | `title` |
| `<Figure />` | 이미지 + 캡션 | `src`, `alt`, `caption`, `number` |
| `<Collapse />` | 접을 수 있는 상세 | `title`, `defaultOpen` |
| `<Aside />` | 사이드 노트 | `label` |
| `<Reference />` | 논문 인용 | `title`, `authors`, `year`, `venue`, `url` |

## Related

- **iq-dev-lab** — Backend deep-dive studies: https://github.com/iq-dev-lab
- **iq-ai-lab** — AI / ML deep-dive studies: https://github.com/iq-ai-lab

## License

- **Code** — MIT
- **Content (posts)** — CC BY-NC-SA 4.0
