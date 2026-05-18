/**
 * URL helpers for base-path-aware internal links.
 *
 * Astro's `base` config does NOT auto-prefix string literals like `href="/foo"`.
 * Use these helpers for every internal absolute path.
 */

/** Trailing-slash-free base, e.g. "/iq-blog" or "". */
const RAW_BASE = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');

/**
 * Prefix an absolute internal path with the configured base.
 *
 * - `withBase('/posts/foo')` → `/iq-blog/posts/foo`
 * - `withBase('posts/foo')`  → `/iq-blog/posts/foo`
 * - At dev/root deploy (base="/"), returns the path unchanged: `/posts/foo`.
 *
 * Idempotent for absolute external URLs (returned as-is).
 */
export function withBase(path: string): string {
  if (/^[a-z]+:\/\//i.test(path) || path.startsWith('//') || path.startsWith('mailto:')) {
    return path;
  }
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${RAW_BASE}${p}`;
}

/**
 * Test whether `pathname` (from `Astro.url.pathname`, which includes the base
 * at build time) matches an unprefixed nav href. Used for active-link styling.
 *
 * - `isActivePath('/iq-blog/categories/ai', '/categories/ai')` → true
 * - `isActivePath('/iq-blog/', '/')` → true (root-exact)
 */
export function isActivePath(pathname: string, href: string): boolean {
  const target = withBase(href);
  if (href === '/') {
    return pathname === target || pathname === `${target}/` || pathname === RAW_BASE || pathname === `${RAW_BASE}/`;
  }
  return pathname === target || pathname.startsWith(`${target}/`);
}

/**
 * Strip the base prefix from a build-time pathname. Useful when parsing the
 * current post slug from `Astro.url.pathname`.
 */
export function stripBase(pathname: string): string {
  if (RAW_BASE && pathname.startsWith(RAW_BASE)) {
    return pathname.slice(RAW_BASE.length) || '/';
  }
  return pathname;
}
