import rss from '@astrojs/rss';
import { SITE, CATEGORIES } from '@/consts';
import { withBase } from '@/lib/url';
import { getPublishedPosts } from '@/utils/posts';

export async function GET() {
  const posts = await getPublishedPosts();

  return rss({
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    // Channel <link> = full project URL (origin + base). Items use base-prefixed paths
    // which @astrojs/rss resolves against this site value.
    site: SITE.url,
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: withBase(`/posts/${post.id}`),
      categories: [CATEGORIES[post.data.category].label, ...post.data.tags],
      author: SITE.author.name,
    })),
    customData: `<language>${SITE.locale}</language>`,
  });
}
