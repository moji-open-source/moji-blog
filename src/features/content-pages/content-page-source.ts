import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

import { extractRawContentPageFrontmatter, parseContentPageFrontmatter } from './content-page-frontmatter'
import { getContentPageSegmentFromFileName } from './content-page-slug'
import type { ContentPageSummary } from './content-page-types'

const CONTENT_DIRECTORY = path.join(process.cwd(), 'content')

interface ListContentPagesOptions {
  /** Include drafts for preview or authoring surfaces. Public routes omit them. */
  includeDrafts?: boolean
}

/**
 * Reads direct `content/*.md` page summaries from disk without importing modules.
 * Nested files, including `content/posts/*`, are intentionally ignored here.
 */
export const listContentPages = cache(async ({ includeDrafts = false }: ListContentPagesOptions = {}) => {
  const fileNames = await readContentPageFileNames()
  const pages = await Promise.all(fileNames.map(readContentPageSummary))

  return pages
    .filter((page): page is ContentPageSummary => Boolean(page))
    .filter((page) => includeDrafts || !page.frontmatter.draft)
    .sort((left, right) => left.page.localeCompare(right.page))
})

/** Returns root content pages that should be visible on public routes. */
export async function listPublishedContentPages() {
  return listContentPages()
}

/** Returns public root route segments for Next static generation. */
export async function listPublishedContentPageSegments() {
  const pages = await listPublishedContentPages()

  return pages.map((page) => page.page)
}

async function readContentPageFileNames() {
  try {
    const entries = await readdir(CONTENT_DIRECTORY, { withFileTypes: true })

    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => getContentPageSegmentFromFileName(fileName))
  } catch (error) {
    // A fresh template may not have content yet; treat that as an empty page index.
    if (isMissingDirectoryError(error)) {
      return []
    }

    throw error
  }
}

async function readContentPageSummary(fileName: string) {
  const page = getContentPageSegmentFromFileName(fileName)

  if (!page) {
    return null
  }

  const source = await readFile(path.join(CONTENT_DIRECTORY, fileName), 'utf8')
  const frontmatter = parseContentPageFrontmatter(extractRawContentPageFrontmatter(source))

  return { frontmatter, page } satisfies ContentPageSummary
}

function isMissingDirectoryError(error: unknown) {
  return isNodeError(error) && error.code === 'ENOENT'
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error
}
