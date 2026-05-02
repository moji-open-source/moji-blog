import type { ComponentType } from 'react'

/**
 * Normalized metadata for a root content page.
 * These fields are intentionally smaller than post metadata because pages such
 * as `/use` and `/about` do not need archive-oriented fields like tags.
 */
export interface ContentPageFrontmatter {
  /** Short summary used by route metadata and optional page introductions. */
  description?: string
  /** Draft pages are excluded from public routes unless explicitly included. */
  draft: boolean
  /** Language tag for the page content, for example "zh-CN" or "en". */
  lang?: string
  /** Optional display title; routes fall back to a title-cased file name. */
  title?: string
}

/** Metadata-only record used by static parameter generation. */
export interface ContentPageSummary {
  frontmatter: ContentPageFrontmatter
  /** URL segment derived from a direct `content/*.md` file name. */
  page: string
}

/** Fully loaded Markdown/MDX module prepared for route rendering. */
export interface ContentPageModule {
  /** The compiled Markdown/MDX React component exported as the module default. */
  Content: ComponentType
  frontmatter: ContentPageFrontmatter
  page: string
}

/** Raw shape exported by the Next MDX loader before local normalization. */
export interface MdxContentPageModule {
  default: ComponentType
  /** Exported by `remark-mdx-frontmatter`; absent when the file has no frontmatter block. */
  frontmatter?: Record<string, unknown>
}
