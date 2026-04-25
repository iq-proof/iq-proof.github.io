import type { SatoriOptions } from 'satori';
import { SITE } from '../consts';

/**
 * Satori requires TTF or OTF fonts — WOFF2 is NOT supported.
 * We fetch Pretendard TTF from jsDelivr (mirrors the official GitHub repo).
 */
const PRETENDARD_REGULAR =
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/public/static/Pretendard-Regular.ttf';
const PRETENDARD_BOLD =
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard/packages/pretendard/dist/public/static/Pretendard-Bold.ttf';

let cachedFonts: SatoriOptions['fonts'] | null = null;

export async function getOGFonts(): Promise<SatoriOptions['fonts']> {
  if (cachedFonts) return cachedFonts;

  const [regular, bold] = await Promise.all([
    fetch(PRETENDARD_REGULAR).then((r) => {
      if (!r.ok) throw new Error(`Failed to fetch Pretendard Regular: ${r.status}`);
      return r.arrayBuffer();
    }),
    fetch(PRETENDARD_BOLD).then((r) => {
      if (!r.ok) throw new Error(`Failed to fetch Pretendard Bold: ${r.status}`);
      return r.arrayBuffer();
    }),
  ]);

  cachedFonts = [
    { name: 'Pretendard', data: regular, weight: 400, style: 'normal' },
    { name: 'Pretendard', data: bold, weight: 700, style: 'normal' },
  ];

  return cachedFonts;
}

export interface OGTemplateProps {
  title: string;
  category?: 'dev' | 'ai' | 'agent';
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
  description?: string;
}

const CATEGORY_COLORS = {
  dev: '#00d9ff',
  ai: '#a78bfa',
  agent: '#cc785c',
} as const;

const CATEGORY_LABELS = {
  dev: 'DEV',
  ai: 'AI',
  agent: 'AGENT',
} as const;

/**
 * Returns a JSX-like object tree consumable by Satori.
 * 1200x630 dimensions — standard Open Graph image size.
 */
export function ogTemplate({ title, category, difficulty, description }: OGTemplateProps) {
  const accent = category ? CATEGORY_COLORS[category] : '#00d9ff';
  const categoryLabel = category ? CATEGORY_LABELS[category] : '';

  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '80px',
        background:
            'linear-gradient(135deg, #0a0e1a 0%, #111827 50%, #1a1f2e 100%)',
        fontFamily: 'Pretendard',
        color: '#e5e7eb',
      },
      children: [
        // Top: category badge
        {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center', gap: '20px' },
            children: categoryLabel
                ? [
                  {
                    type: 'div',
                    props: {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        padding: '8px 20px',
                        borderRadius: '8px',
                        border: `2px solid ${accent}`,
                        color: accent,
                        fontSize: '24px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                      },
                      children: categoryLabel,
                    },
                  },
                  difficulty
                      ? {
                        type: 'div',
                        props: {
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            color: '#9ca3af',
                            fontSize: '22px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                          },
                          children: difficulty,
                        },
                      }
                      : null,
                ].filter(Boolean)
                : [],
          },
        },
        // Middle: title
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginTop: 'auto',
              marginBottom: 'auto',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '72px',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: '#f3f4f6',
                    letterSpacing: '-0.02em',
                  },
                  children: title,
                },
              },
              description
                  ? {
                    type: 'div',
                    props: {
                      style: {
                        fontSize: '28px',
                        lineHeight: 1.5,
                        color: '#9ca3af',
                      },
                      children: description,
                    },
                  }
                  : null,
            ].filter(Boolean),
          },
        },
        // Bottom: brand
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid #374151',
              paddingTop: '32px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: accent,
                          color: '#0a0e1a',
                          fontSize: '28px',
                          fontWeight: 700,
                        },
                        children: 'IQ',
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '28px',
                          fontWeight: 700,
                          color: '#f3f4f6',
                        },
                        children: SITE.name,
                      },
                    },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '22px',
                    color: '#6b7280',
                    fontFamily: 'Pretendard',
                  },
                  children: SITE.url.replace(/^https?:\/\//, ''),
                },
              },
            ],
          },
        },
      ],
    },
  };
}
