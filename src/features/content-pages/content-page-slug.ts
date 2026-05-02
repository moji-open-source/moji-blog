const CONTENT_PAGE_EXTENSION = '.md'
const CONTENT_PAGE_SEGMENT_PATTERN = /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*$/

/**
 * Normalizes route params while blocking path traversal and nested file access.
 */
export function parseContentPageSegment(page: string) {
  const normalized = decodeURIComponent(page).trim()

  if (!CONTENT_PAGE_SEGMENT_PATTERN.test(normalized)) {
    return null
  }

  return normalized
}

/**
 * Converts a direct `content/*.md` file name into its public root route segment.
 */
export function getContentPageSegmentFromFileName(fileName: string) {
  if (!fileName.endsWith(CONTENT_PAGE_EXTENSION)) {
    return null
  }

  return parseContentPageSegment(fileName.slice(0, -CONTENT_PAGE_EXTENSION.length))
}

/**
 * Provides a readable fallback title when frontmatter omits `title`.
 */
export function getTitleFromContentPageSegment(page: string) {
  return page
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ')
}
