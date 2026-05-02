import { parse as parseYaml } from 'yaml'

import { getTitleFromSlug } from './post-slug'
import type { PostFrontmatter } from './post-types'

// Matches the leading YAML frontmatter fence only; body fences must remain untouched.
const FRONTMATTER_PATTERN = /^---\s*\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/

/**
 * Reads frontmatter for server-side indexes without compiling the whole MDX file.
 */
export function extractRawFrontmatter(source: string) {
  const match = source.match(FRONTMATTER_PATTERN)

  if (!match) {
    return {}
  }

  const value = parseYaml(match[1])

  return isRecord(value) ? value : {}
}

/**
 * Converts loose author-provided frontmatter into the stable shape routes consume.
 */
export function parsePostFrontmatter(input: unknown, slug: string): PostFrontmatter {
  const record = isRecord(input) ? input : {}

  return {
    author: toOptionalString(record.author),
    categories: toStringArray(record.categories),
    date: toOptionalDateString(record.date),
    description: toOptionalString(record.description),
    draft: toBoolean(record.draft),
    duration: toOptionalString(record.duration),
    lang: toOptionalString(record.lang),
    lastEdit: toOptionalDateString(record.lastEdit ?? record['last-edit']),
    pid: toOptionalString(record.pid),
    tags: toStringArray(record.tags),
    title: toOptionalString(record.title) ?? getTitleFromSlug(slug),
  }
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

function toOptionalDateString(value: unknown) {
  // YAML parsers may materialize date-like values as Date instances.
  if (value instanceof Date) {
    return value.toISOString()
  }

  if (typeof value === 'number') {
    return String(value)
  }

  return toOptionalString(value)
}

function toStringArray(value: unknown) {
  if (Array.isArray(value)) {
    return value
      .map((item) => toOptionalString(item))
      .filter((item): item is string => Boolean(item))
  }

  const singleValue = toOptionalString(value)

  return singleValue ? [singleValue] : []
}
