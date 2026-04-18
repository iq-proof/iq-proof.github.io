import { getCollection, type CollectionEntry } from 'astro:content';
import readingTimeLib from 'reading-time';

export type Post = CollectionEntry<'posts'>;

/**
 * Load all published posts, newest first.
 * Drafts are hidden in production but visible in dev.
 */
export async function getPublishedPosts(): Promise<Post[]> {
  const isProd = import.meta.env.PROD;
  const posts = await getCollection('posts', ({ data }) =>
    isProd ? data.draft !== true : true,
  );
  return posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
}

/** Filter posts by category slug. */
export async function getPostsByCategory(
  category: 'dev' | 'ai',
): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.category === category);
}

/** Filter posts by tag. */
export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts.filter((p) => p.data.tags.includes(tag));
}

/** Filter posts by series slug, sorted by series order ascending. */
export async function getPostsBySeries(seriesSlug: string): Promise<Post[]> {
  const posts = await getPublishedPosts();
  return posts
    .filter((p) => p.data.series?.slug === seriesSlug)
    .sort((a, b) => (a.data.series?.order ?? 0) - (b.data.series?.order ?? 0));
}

/** Unique tag list with post counts, sorted by frequency desc. */
export async function getAllTags(): Promise<
  { tag: string; count: number }[]
> {
  const posts = await getPublishedPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.data.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));
}

/** Unique series with post counts, sorted by most recent post desc. */
export async function getAllSeries(): Promise<
  { slug: string; title: string; count: number; latest: Date }[]
> {
  const posts = await getPublishedPosts();
  const map = new Map<
    string,
    { slug: string; title: string; count: number; latest: Date }
  >();
  for (const post of posts) {
    if (!post.data.series) continue;
    const { slug, title } = post.data.series;
    const existing = map.get(slug);
    if (existing) {
      existing.count += 1;
      if (post.data.pubDate > existing.latest) existing.latest = post.data.pubDate;
    } else {
      map.set(slug, { slug, title, count: 1, latest: post.data.pubDate });
    }
  }
  return Array.from(map.values()).sort(
    (a, b) => b.latest.valueOf() - a.latest.valueOf(),
  );
}

/** Group posts by year and month for archive view. */
export async function getArchive(): Promise<
  { year: number; months: { month: number; posts: Post[] }[] }[]
> {
  const posts = await getPublishedPosts();
  const grouped = new Map<number, Map<number, Post[]>>();
  for (const post of posts) {
    const year = post.data.pubDate.getUTCFullYear();
    const month = post.data.pubDate.getUTCMonth() + 1;
    if (!grouped.has(year)) grouped.set(year, new Map());
    const months = grouped.get(year)!;
    if (!months.has(month)) months.set(month, []);
    months.get(month)!.push(post);
  }
  return Array.from(grouped.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, months]) => ({
      year,
      months: Array.from(months.entries())
        .sort((a, b) => b[0] - a[0])
        .map(([month, posts]) => ({ month, posts })),
    }));
}

/** Estimate reading time from body text. Korean-aware: roughly 500 chars/min. */
export function getReadingTime(body: string): { minutes: number; text: string } {
  // reading-time uses ~225 WPM for English; for Korean we estimate char-based.
  const koreanCharCount = (body.match(/[\uac00-\ud7af]/g) ?? []).length;
  const base = readingTimeLib(body);
  const koreanMinutes = koreanCharCount / 500;
  const totalMinutes = Math.max(1, Math.ceil(base.minutes + koreanMinutes));
  return { minutes: totalMinutes, text: `${totalMinutes} min` };
}

/** Format a Date as YYYY.MM.DD. */
export function formatDate(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}.${m}.${d}`;
}

/** Get previous and next posts within the same series. */
export async function getSeriesNeighbors(post: Post): Promise<{
  prev: Post | null;
  next: Post | null;
}> {
  if (!post.data.series) return { prev: null, next: null };
  const siblings = await getPostsBySeries(post.data.series.slug);
  const idx = siblings.findIndex((p) => p.id === post.id);
  return {
    prev: idx > 0 ? siblings[idx - 1] : null,
    next: idx < siblings.length - 1 ? siblings[idx + 1] : null,
  };
}
