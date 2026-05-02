// Restrict slugs to file-system-friendly post names and block path traversal.
const POST_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const MDX_EXTENSION = '.mdx'

/**
 * Normalizes user input from route params while preserving case-sensitive file names.
 */
export function parsePostSlug(slug: string) {
  const normalized = decodeURIComponent(slug).trim()

  if (!POST_SLUG_PATTERN.test(normalized)) {
    return null
  }

  return normalized
}

/**
 * Converts a `content/posts/*.mdx` file name into its public route slug.
 */
export function getPostSlugFromFileName(fileName: string) {
  if (!fileName.endsWith(MDX_EXTENSION)) {
    return null
  }

  return parsePostSlug(fileName.slice(0, -MDX_EXTENSION.length))
}

/**
 * Provides a readable fallback title when frontmatter omits `title`.
 */
export function getTitleFromSlug(slug: string) {
  return slug
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
}
