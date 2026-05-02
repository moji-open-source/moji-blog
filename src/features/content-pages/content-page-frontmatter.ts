import { parse as parseYaml } from 'yaml'

import { getTitleFromContentPageSegment } from './content-page-slug'
import type { ContentPageFrontmatter } from './content-page-types'

// Matches only a leading YAML frontmatter fence; body fences must remain content.
const FRONTMATTER_PATTERN = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/

/**
 * Reads frontmatter for server-side indexes without compiling the whole file.
 */
export function extractRawContentPageFrontmatter(source: string) {
  const match = source.match(FRONTMATTER_PATTERN)

  if (!match) {
    return {}
  }

  const value = parseYaml(match[1])

  return isRecord(value) ? value : {}
}

/**
 * Converts author-provided frontmatter into the stable shape routes consume.
 */
export function parseContentPageFrontmatter(input: unknown): ContentPageFrontmatter {
  const record = isRecord(input) ? input : {}

  return {
    description: toOptionalString(record.description),
    draft: toBoolean(record.draft),
    lang: toOptionalString(record.lang),
    title: toOptionalString(record.title),
  }
}

/**
 * Resolves the display title without forcing every content page to define one.
 */
export function getContentPageTitle(frontmatter: ContentPageFrontmatter, page: string) {
  return frontmatter.title ?? getTitleFromContentPageSegment(page)
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function toBoolean(value: unknown) {
  return typeof value === 'boolean' ? value : false
}

function toOptionalString(value: unknown) {
  if (typeof value !== 'string') {
    return undefined
  }

  const trimmed = value.trim()

  return trimmed.length > 0 ? trimmed : undefined
}
