import rss from '@astrojs/rss';
import { SITE, CATEGORIES } from '@/consts';
import { getPublishedPosts } from '@/utils/posts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();

  return rss({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: context.site ?? SITE.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}`,
      categories: [CATEGORIES[post.data.category].label, ...post.data.tags],
      author: SITE.author.name,
    })),
    customData: `<language>${SITE.locale}</language>`,
  });
}
