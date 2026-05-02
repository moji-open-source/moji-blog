import { cache } from 'react'

import { parsePostFrontmatter } from './post-frontmatter'
import { parsePostSlug } from './post-slug'
import type { MdxPostModule, PostModule } from './post-types'

interface LoadPostOptions {
  /** Include drafts for preview routes. Public routes should leave this disabled. */
  includeDrafts?: boolean
}

/**
 * Loads and normalizes a single MDX post module for route rendering.
 */
export const loadPost = cache(async (slug: string, options: LoadPostOptions = {}): Promise<PostModule | null> => {
  const safeSlug = parsePostSlug(slug)

  if (!safeSlug) {
    return null
  }

  const module = await importPostModule(safeSlug)

  if (!module) {
    return null
  }

  const frontmatter = parsePostFrontmatter(module.frontmatter, safeSlug)

  if (frontmatter.draft && !options.includeDrafts) {
    return null
  }

  return {
    Content: module.default,
    frontmatter,
    slug: safeSlug,
  }
})

async function importPostModule(slug: string) {
  try {
    // Keep the import pattern narrow so Turbopack can build a bounded MDX module graph.
    return await import(`@content/posts/${slug}.mdx`) as MdxPostModule
  } catch (error) {
    if (isMissingPostModuleError(error)) {
      return null
    }

    throw error
  }
}

function isMissingPostModuleError(error: unknown) {
  if (!(error instanceof Error)) {
    return false
  }

  // Different Next/Turbopack phases format missing dynamic imports slightly differently.
  return (
    error.message.includes('Cannot find module')
    || error.message.includes('Module not found')
    || error.message.includes('does not exist')
  )
}
