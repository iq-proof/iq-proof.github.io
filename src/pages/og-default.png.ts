import type { APIRoute } from 'astro';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ogTemplate } from '@/utils/og-template';
import { SITE } from '@/consts';

async function loadFonts() {
  const pretendard = await fetch(
    'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Medium.woff2',
  ).then((r) => r.arrayBuffer());

  const jetbrains = await fetch(
    'https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-500-normal.woff',
  ).then((r) => r.arrayBuffer());

  return [
    { name: 'Pretendard', data: pretendard, weight: 500 as const, style: 'normal' as const },
    { name: 'JetBrainsMono', data: jetbrains, weight: 500 as const, style: 'normal' as const },
  ];
}

export const GET: APIRoute = async () => {
  const fonts = await loadFonts();
  const element = ogTemplate({
    title: SITE.name,
    description: '표면적인 사용법이 아닌, 본질을 증명하는 기록.',
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
