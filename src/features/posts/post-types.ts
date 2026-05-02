import type { ComponentType } from 'react'

/**
 * Normalized metadata for a post.
 * Raw MDX frontmatter is parsed into this shape before it reaches routes.
 */
export interface PostFrontmatter {
  /** Display name of the post author. */
  author?: string
  /** Broad content buckets, usually used for archive or navigation views. */
  categories: string[]
  /** Publish date as an ISO date, ISO datetime, or legacy local datetime string. */
  date?: string
  /** Short summary used by metadata tags, feeds, and list previews. */
  description?: string
  /** Draft posts are hidden from public SSG routes unless explicitly included. */
  draft: boolean
  /** Human-readable reading time, for example "10min" or "5 min read". */
  duration?: string
  /** Language tag for the post content, for example "zh-CN" or "en". */
  lang?: string
  /** Last edited date. Supports both `lastEdit` and legacy `last-edit` frontmatter keys. */
  lastEdit?: string
  /** Stable external identifier for migrations from older blog systems. */
  pid?: string
  /** Lightweight labels used for filtering and display. */
  tags: string[]
  /** Human-readable post title. Falls back to a title-cased slug when omitted. */
  title: string
}

/** Metadata-only post record used by list pages and static parameter generation. */
export interface PostSummary {
  frontmatter: PostFrontmatter
  /** URL-safe file stem, for example `markdown-example` from `markdown-example.mdx`. */
  slug: string
}

/** Fully loaded MDX module prepared for rendering inside a route. */
export interface PostModule {
  /** The compiled MDX React component exported as the module default. */
  Content: ComponentType
  frontmatter: PostFrontmatter
  slug: string
}

/** Raw shape exported by the Next MDX loader before local normalization. */
export interface MdxPostModule {
  default: ComponentType
  /** Exported by `remark-mdx-frontmatter`; absent when the MDX file has no frontmatter block. */
  frontmatter?: Record<string, unknown>
}
