# IQ Lab Blog

> **Deep-dive logs on backend systems and AI.**
> 표면적인 사용법이 아닌, 본질을 증명하는 기록.
>
> 🌐 **Live**: https://iq-universe.github.io/iq-blog

<br/>

<p align="center">
  <a href="https://github.com/iq-universe/iq-blog/actions/workflows/deploy.yml">
    <img src="https://github.com/iq-universe/iq-blog/actions/workflows/deploy.yml/badge.svg" alt="Deploy"/>
  </a>
  <img src="https://img.shields.io/badge/Astro-5-BC52EE?logo=astro&logoColor=white" alt="Astro 5"/>
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind 4"/>
  <img src="https://img.shields.io/badge/Node-22-339933?logo=node.js&logoColor=white" alt="Node 22"/>
  <img src="https://img.shields.io/badge/license-MIT%20%7C%20CC--BY--NC--SA-blue" alt="License"/>
</p>

---

## Table of Contents

- [Philosophy](#philosophy)
- [Features](#features)
- [Stack](#stack)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Development](#development)
- [Writing Posts](#writing-posts)
- [MDX Components](#mdx-components)
- [Design System](#design-system)
- [Deployment](#deployment)
- [Operations](#operations)
- [Troubleshooting](#troubleshooting)
- [Roadmap](#roadmap)
- [License](#license)

---

## Philosophy

IQ Lab은 **"어떻게 쓰는가"가 아니라 "왜 그렇게 작동하는가"**를 기록하는 블로그입니다. 튜토리얼이 아닌 제1원리 분석, 벤치마크가 있는 주장, 증명 가능한 설명을 지향합니다.

- **Dev** — 백엔드 시스템의 내부 구조, JVM/DB/네트워크 근본 원리, 아키텍처 의사결정
- **AI** — 머신러닝의 수학적 기반, 논문 재현, 알고리즘 유도 과정
- **Agent** — AI 자동화 인프라 회고, 양산 시스템 설계, 도구 사용 패턴

모든 포스트는 난이도 태그(`beginner` / `intermediate` / `advanced`)를 가지며, 정리(Theorem)와 증명(Proof)을 1급 시민으로 취급합니다.

---

## Features

### Reading Experience

- 🌙 **Dark theme first** — 코드 읽기 친화적인 고대비 팔레트 (시안 `#00d9ff` + 바이올렛 `#a78bfa`)
- 📖 **Reading time estimate** — 한국어 기준 자동 계산 (글자 수 / 분당 500자)
- 🧭 **Sticky Table of Contents** — 데스크톱에서 현재 섹션 자동 하이라이트
- ⬅️➡️ **Prev / Next navigation** — 같은 시리즈 또는 최근 포스트 자동 연결
- 📊 **Progress bar** — 스크롤 진행도 상단 고정 바
- 🔗 **Heading anchor links** — `h2`, `h3`에 hover 시 링크 아이콘 표시

### Content Features

- ✍️ **MDX support** — 마크다운 안에서 Astro 컴포넌트 직접 사용
- 🎨 **Shiki code highlighting** — Night Owl 테마, 65+ 언어, inline highlighting 지원
- 🧮 **KaTeX math** — `$inline$` 및 `$$block$$` 수식, 번호 자동 매김
- 📐 **Mermaid diagrams** — flowchart, sequence, class, ER, state, gantt 전부 지원
- 🖼️ **Auto OG images** — 포스트마다 Satori로 1200×630 이미지 자동 생성 (Pretendard + JetBrains Mono)
- 📰 **RSS feed** — 전문 포함, `/rss.xml`
- 🗺️ **Sitemap** — `@astrojs/sitemap`으로 자동 생성

### Discovery

- 🔍 **Full-text search** — Pagefind로 정적 인덱싱, `⌘K` / `Ctrl+K` 단축키
- 🏷️ **Categories** — `dev` / `ai` / `agent` 3종
- 🔖 **Tags** — 자유 태그, `/tags/[tag]` 개별 페이지
- 📚 **Series** — 시리즈 포스트 그룹핑, `/series/[slug]` 집합 페이지
- ⭐ **Featured posts** — 홈 화면 상단 강조
- 📅 **Archive** — 연도별 전체 포스트 타임라인
- 📂 **Difficulty filter** — 초급/중급/고급 필터링

### Community & Analytics

- 💬 **Giscus comments** — GitHub Discussions 기반 댓글, 반응 이모지 지원
- 📈 **GoatCounter analytics** — 쿠키리스, GDPR-friendly, 가벼운 JS (~4KB)
- ❤️ **GitHub Reactions** — Giscus 내에서 포스트에 반응 가능

### SEO & Social

- 🏷️ **Open Graph + Twitter Cards** — 모든 포스트 자동 메타 태그
- 🗂️ **JSON-LD structured data** — `BlogPosting`, `BreadcrumbList` 스키마
- 🤖 **robots.txt** — sitemap 링크 포함
- 📝 **Semantic HTML** — `article`, `time`, `nav`, `main`으로 명확한 구조

### Accessibility

- ♿ **WCAG AA 대비비** — 다크 테마에서 본문 7:1 이상
- ⌨️ **키보드 내비게이션** — Skip link, focus ring, logical tab order
- 🔊 **aria-label / aria-current** — 스크린 리더 호환

---

## Stack

| Layer | Technology | Version | Role |
|:------|:-----------|:--------|:-----|
| Framework | [Astro](https://astro.build) | 5.x | 정적 사이트 생성 |
| UI | [MDX](https://mdxjs.com/) + [Tailwind](https://tailwindcss.com) | v3 / v4 | 컨텐츠 + 스타일 |
| Runtime | Node.js | 22 | 빌드 타임 |
| Hosting | [GitHub Pages](https://pages.github.com) | — | 정적 호스팅 (무료) |
| CI/CD | GitHub Actions | — | 빌드 + 배포 자동화 |
| Comments | [Giscus](https://giscus.app) | — | GitHub Discussions 기반 |
| Analytics | [GoatCounter](https://www.goatcounter.com) | — | 프라이버시 친화 통계 |
| Search | [Pagefind](https://pagefind.app) | latest | 정적 풀텍스트 검색 |
| Math | [KaTeX](https://katex.org) | — | LaTeX → HTML |
| Diagrams | [Mermaid](https://mermaid.js.org) | — | 텍스트 → SVG |
| Code hl | [Shiki](https://shiki.style) | (내장) | Night Owl 테마 |
| OG images | [Satori](https://github.com/vercel/satori) + [resvg](https://github.com/yisibl/resvg-js) | — | JSX → SVG → PNG |
| Typography | [Pretendard](https://github.com/orioncactus/pretendard) + [JetBrains Mono](https://github.com/JetBrains/JetBrainsMono) | — | 본문 / 코드 |

---

## Architecture

```
                    ┌─────────────────────────────────────┐
                    │ src/content/posts/*.mdx             │
                    │  (Zod-validated frontmatter)        │
                    └───────────────┬─────────────────────┘
                                    │
                                    ▼
         ┌──────────────────────────────────────────────────┐
         │        Astro 5 Content Collections                │
         │  (type-safe query: filter/sort/group/paginate)   │
         └──────────────────────┬───────────────────────────┘
                                │
          ┌─────────────────────┼──────────────────────┐
          ▼                     ▼                      ▼
   ┌──────────────┐     ┌──────────────┐     ┌────────────────┐
   │  MDX Render  │     │ OG Generator │     │ Pagefind Index │
   │ (Shiki·KaTeX │     │  (Satori +   │     │ (post-build)   │
   │  ·Mermaid)   │     │   resvg)     │     │                │
   └──────┬───────┘     └──────┬───────┘     └────────┬───────┘
          │                    │                      │
          └────────────────────┼──────────────────────┘
                               ▼
                     ┌───────────────────┐
                     │    dist/          │
                     │  (static assets)  │
                     └─────────┬─────────┘
                               │
                               ▼
                  ┌─────────────────────────┐
                  │   GitHub Actions        │
                  │  build → upload → deploy│
                  └────────────┬────────────┘
                               ▼
                  ┌────────────────────────────────────┐
                  │ https://iq-universe.github.io/iq-blog │
                  └────────────────────────────────────┘
                               ▲
                    ┌──────────┼──────────┐
                    │          │          │
              Giscus    GoatCounter   Pagefind
              (iframe)  (beacon)      (runtime JS)
```

---

## Project Structure

```
iq-blog/
├── .github/
│   └── workflows/
│       └── deploy.yml             # GitHub Actions: build + Pages deploy
├── public/
│   ├── .nojekyll                  # GitHub Pages Jekyll 빌드 차단
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/                     # (optional) 로컬 폰트 복사본
├── src/
│   ├── components/
│   │   ├── mdx/                   # ← 포스트에서 직접 import하는 컴포넌트
│   │   │   ├── Callout.astro      # 박스형 알림 (info/tip/warning/danger/success)
│   │   │   ├── Theorem.astro      # 정리/정의/보조정리
│   │   │   ├── Proof.astro        # QED 증명 블록
│   │   │   ├── Figure.astro       # 이미지 + 캡션 + 번호
│   │   │   ├── Collapse.astro     # 접을 수 있는 details
│   │   │   ├── Aside.astro        # 사이드노트
│   │   │   └── Reference.astro    # 논문/도서 인용
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── PostCard.astro
│   │   ├── PostList.astro
│   │   ├── PostMeta.astro         # 날짜/카테고리/난이도/읽기시간
│   │   ├── TableOfContents.astro
│   │   ├── ReadingProgress.astro
│   │   ├── CategoryBadge.astro
│   │   ├── DifficultyBadge.astro
│   │   ├── TagPill.astro
│   │   ├── Giscus.astro
│   │   ├── GoatCounter.astro
│   │   ├── SearchModal.astro      # ⌘K 모달 (Pagefind UI)
│   │   ├── JsonLd.astro           # 구조화 데이터
│   │   └── SectionHeader.astro
│   ├── content/
│   │   └── posts/                 # ← 여기에 .md / .mdx 작성
│   ├── layouts/
│   │   ├── BaseLayout.astro       # HTML shell, meta, analytics
│   │   └── PostLayout.astro       # 포스트 전용 (TOC, Giscus, nav)
│   ├── pages/
│   │   ├── index.astro            # 홈 (featured + 최근)
│   │   ├── about.astro
│   │   ├── archive.astro          # 전체 포스트 타임라인
│   │   ├── projects.astro
│   │   ├── 404.astro
│   │   ├── posts/
│   │   │   ├── [slug].astro       # 개별 포스트
│   │   │   └── [...page].astro    # 페이지네이션
│   │   ├── categories/
│   │   │   ├── index.astro
│   │   │   └── [cat].astro
│   │   ├── tags/
│   │   │   ├── index.astro
│   │   │   └── [tag].astro
│   │   ├── series/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── og/
│   │   │   └── [slug].png.ts      # 포스트별 OG 이미지
│   │   ├── og-default.png.ts      # 기본 OG (비포스트 페이지)
│   │   └── rss.xml.ts
│   ├── styles/
│   │   └── global.css             # 디자인 토큰 + prose + Shiki + KaTeX
│   ├── utils/
│   │   ├── posts.ts               # filter/sort/aggregate/reading-time
│   │   └── og-template.ts         # Satori OG card JSX
│   ├── consts.ts                  # SITE meta, categories, nav, Giscus·GC config
│   └── content.config.ts          # Zod frontmatter schema
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Development

### Prerequisites

- Node.js **22.x** (`.nvmrc` 포함, `nvm use` 권장)
- npm 10+

### Commands

| Command | Description |
|:--------|:------------|
| `npm install` | 의존성 설치 |
| `npm run dev` | 개발 서버 → http://localhost:4321 |
| `npm run build` | `dist/` 빌드 + Pagefind 인덱싱 + OG 이미지 생성 |
| `npm run preview` | 빌드 결과를 로컬에서 서빙 (배포 전 검증) |
| `npm run format` | Prettier 실행 |
| `npm run lint` | ESLint 실행 |

### 개발 팁

- **즉시 반영**: `src/content/posts/*.mdx`는 HMR로 저장 즉시 리로드됩니다.
- **Frontmatter 변경** 또는 **새 포스트 생성** 시 간혹 dev 서버 재시작이 필요합니다 (Zod 스키마 재검증).
- **OG 이미지 로컬 확인**: `http://localhost:4321/og/your-post-slug.png`로 직접 확인.
- **Pagefind는 빌드 타임에만 실행**되므로 dev에서는 검색 모달이 비어 있습니다. 검색 테스트는 `npm run build && npm run preview`로.

---

## Writing Posts

### 1. 파일 생성

`src/content/posts/your-slug.mdx` — 파일명이 URL slug가 됩니다.

### 2. Frontmatter

```yaml
---
title: "Spring AOP 프록시 메커니즘"
description: "CGLIB vs JDK Dynamic Proxy 선택 기준과 내부 동작"
pubDate: 2026-04-18
updatedDate: 2026-04-20        # optional
category: dev                  # 'dev' | 'ai' | 'agent' (required)
tags: [spring, aop, jvm, proxy]
difficulty: intermediate       # 'beginner' | 'intermediate' | 'advanced' (optional)
series:                        # optional
  slug: spring-aop-internals
  title: "Spring AOP Internals"
  order: 1
draft: false                   # true면 빌드 제외
featured: false                # true면 홈 상단 강조
heroImage: "./hero.webp"       # optional, 같은 폴더의 이미지
---
```

Zod 스키마 (`src/content.config.ts`)가 빌드 타임에 검증합니다. 필수 필드 누락 시 즉시 에러.

### 3. 본문

표준 마크다운 + GFM(테이블, 체크박스, strikethrough) + KaTeX + 커스텀 MDX 컴포넌트.

```mdx
import Callout from '@/components/mdx/Callout.astro';
import Theorem from '@/components/mdx/Theorem.astro';
import Proof from '@/components/mdx/Proof.astro';

## 도입

Spring AOP는 런타임에 프록시 객체를 생성해 횡단 관심사를 분리한다.

<Callout type="tip" title="핵심">
JDK Dynamic Proxy는 인터페이스 기반, CGLIB는 클래스 상속 기반.
</Callout>

<Theorem kind="정리" number="1" title="프록시 선택 규칙">
타겟 빈이 하나 이상의 인터페이스를 구현하면 기본적으로 JDK Dynamic Proxy가 선택된다.
단, `proxy-target-class=true` 또는 `@EnableAspectJAutoProxy(proxyTargetClass=true)` 시 CGLIB 강제.
</Theorem>

<Proof>
`DefaultAopProxyFactory.createAopProxy()`의 로직 분석: ...
</Proof>

### 코드 예제

```java title="ProxyFactoryBean.java" {3,7-9}
public class ProxyFactoryBean {
    public Object getObject() {
        if (isAspectJ) return createAspectJProxy();
        return proxyFactory.getProxy();
    }
}
```

### 수식

인라인: $f(x) = x^2$

블록:

$$
\mathcal{L}(\theta) = -\sum_{i=1}^{N} y_i \log p_\theta(x_i)
$$
```

### 4. 로컬 확인

```bash
npm run dev
# 브라우저에서 http://localhost:4321/posts/your-slug 열기
```

### 5. 배포

```bash
git add src/content/posts/your-slug.mdx
git commit -m "post: spring aop proxy mechanics"
git push
```

푸시 후 ~2분이면 라이브 반영.

---

## MDX Components

| Component | Use | Props |
|:----------|:----|:------|
| `<Callout />` | 알림 박스 | `type`: `info` · `note` · `tip` · `warning` · `danger` · `success` <br/>`title?`: string |
| `<Theorem />` | 정리/정의/보조정리 | `kind`: `정리` · `정의` · `보조정리` · `따름정리` <br/>`number?`: string <br/>`title?`: string |
| `<Proof />` | QED 증명 | `title?`: string (default: "증명") |
| `<Figure />` | 캡션 있는 이미지 | `src`: string · `alt`: string · `caption?` · `number?` |
| `<Collapse />` | 접을 수 있는 상세 | `title`: string · `defaultOpen?`: boolean |
| `<Aside />` | 사이드 노트 | `label?`: string |
| `<Reference />` | 논문/도서 인용 | `title` · `authors` · `year` · `venue?` · `url?` · `arxiv?` |

### Callout 변형 예시

```mdx
<Callout type="info">일반 정보</Callout>
<Callout type="tip" title="프로 팁">...</Callout>
<Callout type="warning">주의가 필요한 내용</Callout>
<Callout type="danger">실수하면 안 되는 내용</Callout>
```

---

## Design System

### Color Tokens (`src/styles/global.css`)

| Token | Value | Usage |
|:------|:------|:------|
| `--bg-base` | `#0a0e1a` | 페이지 배경 |
| `--bg-surface` | `#111827` | 카드 배경 |
| `--bg-elevated` | `#1a1f2e` | 모달, hover |
| `--fg-primary` | `#f3f4f6` | 본문 |
| `--fg-secondary` | `#9ca3af` | 메타, 캡션 |
| `--fg-muted` | `#6b7280` | 비활성 |
| `--accent-dev` | `#00d9ff` | Dev 카테고리, 링크 |
| `--accent-ai` | `#a78bfa` | AI 카테고리 |
| `--border-subtle` | `#374151` | 구분선 |

### Typography Scale

- 본문: Pretendard 400 / 1.75 line-height / 17px
- 제목: Pretendard 700 / tight letter-spacing
- 코드: JetBrains Mono 400 / 15px / ligatures on

### Spacing

Tailwind 기본 스케일 (4px 단위). 포스트 본문은 `prose` 클래스로 통합 제어.

---

## Deployment

### How it works

1. `git push origin main` 발생
2. `.github/workflows/deploy.yml` 트리거
3. **Build job** (Ubuntu, Node 22):
   - Checkout
   - `rm -f package-lock.json && npm install` *(npm bug #4828 우회)*
   - `npm run build` → `dist/`
   - Pagefind 인덱스 생성
   - OG 이미지 생성 (Satori + resvg)
   - `dist/`를 Pages artifact로 업로드
4. **Deploy job**:
   - `actions/deploy-pages@v4`로 GitHub Pages에 배포
5. ~2분 내 `https://iq-universe.github.io/iq-blog` 반영

### GitHub Pages 설정

- Repository → Settings → Pages
- **Source**: GitHub Actions (❌ Deploy from a branch 아님)

### 배포 실패 시

Actions 탭에서 빨간 X 클릭 → 실패한 step 펼쳐 로그 확인. 일반적 원인은 [Troubleshooting](#troubleshooting) 섹션 참조.

---

## Operations

### 🔐 Secrets & Config

모든 외부 서비스 설정은 `src/consts.ts` 한 곳에 모여 있습니다.

```ts
export const SITE = {
  name: 'IQ Lab',
  url: 'https://iq-universe.github.io/iq-blog',
  description: '...',
  author: { name: '한동희', github: 'e9ua1' },
};

export const GISCUS = {
  repo: 'iq-universe/iq-blog',
  repoId: 'R_kgDOxxxxxxx',        // giscus.app에서 생성
  category: 'Comments',
  categoryId: 'DIC_kwDOxxxxxxx',  // giscus.app에서 생성
  mapping: 'pathname',
  theme: 'dark',
};

export const GOATCOUNTER = {
  code: 'iq-proof',                // https://iq-proof.goatcounter.com
};
```

### 📊 Analytics 확인

- **GoatCounter 대시보드**: https://iq-proof.goatcounter.com
- **트래픽**: 페이지뷰, 리퍼러, 브라우저, 국가 (쿠키 없이)
- **GitHub Insights**: Repo → Insights → Traffic (2주 제한)

### 💬 댓글 관리

- **위치**: GitHub Discussions → `Comments` 카테고리
- **moderation**: Repository owner로서 삭제/고정/잠금 가능
- **알림**: GitHub Watch 설정 시 이메일

### 🔄 콘텐츠 업데이트

```bash
# 새 포스트
git checkout -b post/new-topic
# ... 편집 ...
git commit -m "post: new topic"
git push -u origin post/new-topic
# PR → merge → 자동 배포

# 기존 포스트 수정
git commit -m "post: update frontmatter updatedDate"
# updatedDate를 바꾸면 RSS/OG에 반영
```

### 🗑️ 포스트 비공개 전환

frontmatter에 `draft: true` 설정 후 푸시. 빌드에서 제외됩니다 (삭제 X).

---

## Troubleshooting

이 섹션은 초기 배포에서 실제로 겪은 문제들을 기록한 것입니다.

### 1. `npm ci` 또는 `npm run build`에서 `@rollup/rollup-linux-x64-gnu` 못 찾음

**증상**:
```
Error: Cannot find module @rollup/rollup-linux-x64-gnu
```

**원인**: `package-lock.json`이 macOS ARM에서 생성되어 Linux용 optional dependency가 기록되지 않음. [npm 버그 #4828](https://github.com/npm/cli/issues/4828).

**해결**: 워크플로우에서 `rm -f package-lock.json && npm install` 사용. 이미 `deploy.yml`에 반영됨.

### 2. Satori: `Unsupported OpenType signature wOF2` / `Coul`

**원인**:
- `wOF2` → WOFF2 폰트 fetch (Satori는 TTF/OTF만 지원)
- `Coul` → 404 HTML 페이지를 폰트로 파싱 시도 ("Couldn't find..." 첫 바이트)

**해결**: `src/pages/og/[slug].png.ts`와 `src/pages/og-default.png.ts`에서:
- Pretendard: `https://cdn.jsdelivr.net/gh/fonts-archive/Pretendard/Pretendard-Medium.otf`
- JetBrains Mono: `https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono@master/fonts/ttf/JetBrainsMono-Medium.ttf`

### 3. Jekyll이 제멋대로 빌드됨

**원인**: `.github/workflows/deploy.yml`이 없거나 Pages 설정이 "Deploy from a branch".

**해결**:
- Settings → Pages → Source를 **GitHub Actions**로
- `public/.nojekyll` 빈 파일 존재 확인 (파일명 앞 점 주의!)

### 4. PAT로 push 시 `refusing to allow a Personal Access Token to create or update workflow`

**원인**: PAT에 `workflow` 스코프 없음.

**해결**: https://github.com/settings/tokens → 해당 토큰 → `workflow` 체크박스 활성화.

### 5. `node_modules`를 실수로 커밋

**증상**: push 시 50MB 초과 파일 거부.

**해결**:
```bash
git rm -r --cached node_modules
echo "node_modules/" >> .gitignore
git add .gitignore
git commit -m "chore: remove node_modules from tracking"
```

### 6. Giscus 댓글이 안 뜸

- Repository가 **Public**인지 확인 (Private는 Giscus 불가)
- Repository → Settings → General → Features → **Discussions** 켜져 있는지
- `Comments` 카테고리가 존재하는지
- `GISCUS.repoId`, `GISCUS.categoryId`가 현재 repo의 것인지

### 7. 검색이 비어있음

Pagefind는 빌드 타임에 실행됩니다. Dev 서버에선 작동 안 합니다. `npm run build && npm run preview`로 확인.

### 8. MDX 빌드 실패: `ReferenceError: <name> is not defined` 또는 `Could not parse expression with acorn`

**증상**:
```
[@mdx-js/rollup] Could not parse expression with acorn
file: src/content/posts/spel.mdx:41:6
```
또는
```
ReferenceError: cipher is not defined
```

**원인**: 본문/헤더의 literal `{...}` 가 JSX expression으로 해석됨. 자주 발생하는 패턴: `${env}`, `#{ref}`, `V{n+1}`, `{cipher}`.

**해결**: 백틱으로 감싸 literal 처리. 예: `## {cipher} 접두사` → `` ## `{cipher}` 접두사 ``. iq-blogger 양산 시 이 패턴은 system prompt #14 룰로 차단됨 (수동 작성 시 주의).

### 9. MDX 빌드 실패: `Unexpected end of file in attribute value` (출력 절단)

**증상**: 마지막 `<Reference />`의 `url` / `venue` / `title` attribute가 잘림. 같은 파일에서 결정적으로 재발.

**원인**: 양산 LLM의 `max_tokens`가 본문 + retry 누적에 부족해 마지막 줄이 절단됨.

**해결**: iq-blogger의 `max_tokens` 16384로 상향됨 (이미 적용). 양산 후에도 실패하면 troubleshooting 가이드 참조해 마지막 attribute를 손으로 채움. 자주 등장하는 논문의 정확한 메타데이터는 `iq-blogger/docs`에 정리됨.

### 10. GHA 빌드 OOM: `Reached heap limit Allocation failed - JavaScript heap out of memory`

**증상**: 페이지 800+ 일 때 GHA runner가 4GB heap 한계 초과로 빌드 죽음. 로컬에선 멀쩡한 빌드가 GHA에서만 실패.

**원인**: Node 기본 heap 4GB. Astro가 모든 mdx를 메모리에 로딩하면서 한계 도달.

**해결**: `package.json` build script에 NODE_OPTIONS 박아 GHA/로컬 양쪽 적용:
```json
"build": "NODE_OPTIONS='--max-old-space-size=8192' astro build && pagefind --site dist"
```
이미 적용됨.

---

## Roadmap

계획은 있지만 강제는 아닙니다.

- [ ] **Sidebar tree navigation** — 카테고리(dev/ai/agent) → 시리즈/레포 → 글 목록(1, 2, 3...) 트리 펼침/접기. 글 수가 늘어 카테고리 → 시리즈 단위 탐색 필요
- [ ] **i18n** — 영문 버전 (`/en` prefix)
- [ ] **Dark/Light toggle** — 현재는 다크 고정
- [ ] **Post reactions** — Giscus 외 별도 좋아요 카운터
- [ ] **Related posts** — 태그 유사도 기반 추천
- [ ] **Reading list** — 브라우저 localStorage 기반 "읽을거리"
- [ ] **Copy link to heading** — 섹션별 공유 URL
- [ ] **Citation export** — BibTeX / Markdown 링크 복사
- [ ] **Series progress** — 시리즈 내 읽은 위치 표시

---

## Related

- **iq-blogger** — 양산 자동화 도구 (이 사이트의 컨텐츠 입력원): https://github.com/iq-agent-lab/iq-blogger
- **iq-dev-lab** — Backend deep-dive studies: https://github.com/iq-dev-lab
- **iq-ai-lab** — AI / ML deep-dive studies: https://github.com/iq-ai-lab

---

## Contributing

외부 PR은 받지 않지만 **오탈자 / 사실 오류 / 증명 오류** 신고는 언제나 환영합니다.

- GitHub Issues: https://github.com/iq-universe/iq-blog/issues
- Giscus 댓글로 직접

---

## License

- **Code** (all `.ts`, `.astro`, `.css`, config files) — [MIT License](./LICENSE)
- **Content** (all `.md` / `.mdx` in `src/content/posts/`) — [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
   - Share & adapt OK, but **비상업적**, **동일조건변경허락**, **출처 명시** 필수
- **Fonts**:
   - Pretendard — [SIL OFL 1.1](https://github.com/orioncactus/pretendard/blob/main/LICENSE)
   - JetBrains Mono — [SIL OFL 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt)

---

<p align="center">
  <em>Built with ❤️ and a lot of debugging.</em><br/>
  <sub>한동희 · 2026</sub>
</p>
