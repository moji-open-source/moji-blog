import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import { cache } from 'react'

import { getPostDateTimestamp } from './post-date'
import { extractRawFrontmatter, parsePostFrontmatter } from './post-frontmatter'
import { getPostSlugFromFileName } from './post-slug'
import type { PostSummary } from './post-types'

const POSTS_DIRECTORY = path.join(process.cwd(), 'content', 'posts')

interface ListPostsOptions {
  /** Include drafts for preview or authoring surfaces. Public indexes omit them. */
  includeDrafts?: boolean
}

/**
 * Reads post summaries from disk without importing MDX modules.
 * This keeps list pages and `generateStaticParams` lightweight.
 */
export const listPosts = cache(async ({ includeDrafts = false }: ListPostsOptions = {}) => {
  const fileNames = await readPostFileNames()
  const posts = await Promise.all(fileNames.map(readPostSummary))

  return posts
    .filter((post): post is PostSummary => Boolean(post))
    .filter((post) => includeDrafts || !post.frontmatter.draft)
    .sort((left, right) => getPostDateTimestamp(right.frontmatter.date) - getPostDateTimestamp(left.frontmatter.date))
})

/** Returns posts that should be visible on public routes. */
export async function listPublishedPosts() {
  return listPosts()
}

/** Returns public slugs for Next static generation. */
export async function listPublishedPostSlugs() {
  const posts = await listPublishedPosts()

  return posts.map((post) => post.slug)
}

async function readPostFileNames() {
  try {
    const entries = await readdir(POSTS_DIRECTORY, { withFileTypes: true })

    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((fileName) => getPostSlugFromFileName(fileName))
  } catch (error) {
    // A fresh template may not have content yet; treat that as an empty post index.
    if (isMissingDirectoryError(error)) {
      return []
    }

    throw error
  }
}

async function readPostSummary(fileName: string) {
  const slug = getPostSlugFromFileName(fileName)

  if (!slug) {
    return null
  }

  const source = await readFile(path.join(POSTS_DIRECTORY, fileName), 'utf8')
  const frontmatter = parsePostFrontmatter(extractRawFrontmatter(source), slug)

  return { frontmatter, slug } satisfies PostSummary
}

function isMissingDirectoryError(error: unknown) {
  return isNodeError(error) && error.code === 'ENOENT'
}

function isNodeError(error: unknown): error is NodeJS.ErrnoException {
  return error instanceof Error && 'code' in error
}
