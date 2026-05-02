import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { ContentPageShell } from '@/features/content-pages/components/content-page-shell'
import { getContentPageTitle } from '@/features/content-pages/content-page-frontmatter'
import { loadContentPage } from '@/features/content-pages/content-page-loader'
import { listPublishedContentPageSegments } from '@/features/content-pages/content-page-source'

interface RootContentPageProps {
  params: Promise<{
    page: string
  }>
}

export const dynamicParams = false

/**
 * Public root content routes are generated from direct `content/*.md` files.
 */
export async function generateStaticParams() {
  const pages = await listPublishedContentPageSegments()

  return pages.map((page) => ({ page }))
}

export async function generateMetadata({ params }: RootContentPageProps): Promise<Metadata> {
  const { page } = await params
  const contentPage = await loadContentPage(page)

  if (!contentPage) {
    return {}
  }

  return {
    title: getContentPageTitle(contentPage.frontmatter, contentPage.page),
    description: contentPage.frontmatter.description,
  }
}

export default async function RootContentPage({ params }: RootContentPageProps) {
  const { page } = await params
  const contentPage = await loadContentPage(page)

  if (!contentPage) {
    notFound()
  }

  const { Content, frontmatter } = contentPage

  return (
    <ContentPageShell frontmatter={frontmatter} page={contentPage.page} className="m-auto max-w-[65ch] leading-7 text-base">
      <Content />
    </ContentPageShell>
  )
}
