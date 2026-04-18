import type { APIRoute, InferGetStaticPropsType } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getPublishedPosts } from '@/utils/posts';
import { ogTemplate } from '@/utils/og-template';
import { SITE } from '@/consts';

/**
 * Fetches a Google Fonts TTF at build time for Satori.
 * Satori cannot read variable fonts; we use Pretendard static + JetBrains Mono.
 */
async function loadFonts() {
  const pretendard = await fetch(
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/public/static/Pretendard-Medium.ttf',
  ).then((r) => r.arrayBuffer());

  const jetbrains = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-500-normal.ttf',
  ).then((r) => r.arrayBuffer());

  return [
    { name: 'Pretendard', data: pretendard, weight: 500 as const, style: 'normal' as const },
    { name: 'JetBrainsMono', data: jetbrains, weight: 500 as const, style: 'normal' as const },
  ];
}

export async function getStaticPaths() {
  const posts = await getPublishedPosts();
  return posts.map((post) => ({
    params: { slug: post.id },
    props: {
      title: post.data.title,
      description: post.data.description,
      category: post.data.category,
    },
  }));
}

type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute<Props> = async ({ props }) => {
  const fonts = await loadFonts();
  const element = ogTemplate({
    title: props.title,
    description: props.description,
    category: props.category,
  });

  const svg = await satori(element as any, {
    width: 1200,
    height: 630,
    fonts: fonts as any,
  });

  const png = new Resvg(svg).render().asPng();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
