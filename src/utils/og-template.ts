import { CATEGORIES, SITE, type CategorySlug } from '@/consts';

interface OGTemplateArgs {
  title: string;
  description?: string;
  category?: CategorySlug;
}

/**
 * Returns a Satori-compatible React-flavored tree (as a plain object)
 * for rendering a 1200x630 OG card.
 *
 * Satori expects JSX-like nested objects with `type`, `props.style`, `props.children`.
 * We avoid the satori-html helper here to keep full control of layout.
 */
export function ogTemplate({ title, description, category }: OGTemplateArgs) {
  const accent = category ? CATEGORIES[category].accent : 'var(--color-accent-cyan)';
  const accentHex = category === 'ai' ? '#a78bfa' : '#00d9ff';
  const categoryLabel = category ? CATEGORIES[category].label.toUpperCase() : null;

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
        background: '#0a0e1a',
        fontFamily: 'Pretendard',
        color: '#f1f5f9',
      },
      children: [
        // Top row — site mark + category
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: '14px' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          border: `3px solid ${accentHex}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: {
                          type: 'div',
                          props: {
                            style: {
                              width: '18px',
                              height: '18px',
                              borderRadius: '50%',
                              background: accentHex,
                            },
                          },
                        },
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '28px',
                          fontWeight: 500,
                          letterSpacing: '-0.02em',
                        },
                        children: SITE.name,
                      },
                    },
                  ],
                },
              },
              categoryLabel && {
                type: 'div',
                props: {
                  style: {
                    fontFamily: 'JetBrainsMono',
                    fontSize: '20px',
                    color: accentHex,
                    padding: '8px 16px',
                    border: `1px solid ${accentHex}`,
                    borderRadius: '8px',
                    background: 'rgba(0,217,255,0.08)',
                  },
                  children: categoryLabel,
                },
              },
            ].filter(Boolean),
          },
        },

        // Body — title + description
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '1040px',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '60px',
                    fontWeight: 500,
                    letterSpacing: '-0.025em',
                    lineHeight: 1.25,
                    color: '#f1f5f9',
                  },
                  children: title,
                },
              },
              description && {
                type: 'div',
                props: {
                  style: {
                    fontSize: '26px',
                    color: '#94a3b8',
                    lineHeight: 1.5,
                  },
                  children: description,
                },
              },
            ].filter(Boolean),
          },
        },

        // Footer — tagline
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'JetBrainsMono',
              fontSize: '20px',
              color: accentHex,
              letterSpacing: '0.08em',
            },
            children: `// ${SITE.tagline}`,
          },
        },
      ],
    },
  };
}
