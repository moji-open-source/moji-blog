import { cache } from 'react'

import { parseContentPageFrontmatter } from './content-page-frontmatter'
import { parseContentPageSegment } from './content-page-slug'
import type { ContentPageModule, MdxContentPageModule } from './content-page-types'

interface LoadContentPageOptions {
  /** Include drafts for preview routes. Public routes should leave this disabled. */
  includeDrafts?: boolean
}

/**
 * Loads and normalizes a single root Markdown page for route rendering.
 */
export const loadContentPage = cache(async (
  page: string,
  options: LoadContentPageOptions = {},
): Promise<ContentPageModule | null> => {
  const safePage = parseContentPageSegment(page)

  if (!safePage) {
    return null
  }

  const module = await importContentPageModule(safePage)

  if (!module) {
    return null
  }

  const frontmatter = parseContentPageFrontmatter(module.frontmatter)

  if (frontmatter.draft && !options.includeDrafts) {
    return null
  }

  return {
    Content: module.default,
    frontmatter,
    page: safePage,
  }
})

async function importContentPageModule(page: string) {
  try {
    // Keep this import scoped to direct content files so Turbopack does not scan nested trees.
    return await import(`@content/${page}.md`) as MdxContentPageModule
  } catch (error) {
    if (isMissingContentPageModuleError(error)) {
      return null
    }

    throw error
  }
}

function isMissingContentPageModuleError(error: unknown) {
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
