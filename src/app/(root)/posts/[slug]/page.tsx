import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { PostShell } from '@/features/posts/components/post-shell'
import { loadPost } from '@/features/posts/post-loader'
import { listPublishedPostSlugs } from '@/features/posts/post-source'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export const dynamicParams = false

/**
 * Public post routes are generated at build time from non-draft MDX files.
 */
export async function generateStaticParams() {
  const slugs = await listPublishedPostSlugs()

  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await loadPost(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: post.frontmatter.author ? [{ name: post.frontmatter.author }] : undefined,
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await loadPost(slug)

  if (!post) {
    notFound()
  }

  const { Content, frontmatter } = post

  return (
    <PostShell frontmatter={frontmatter} className="m-auto max-w-[65ch] leading-7 text-base" >
      <Content />
    </PostShell>
  )
}
