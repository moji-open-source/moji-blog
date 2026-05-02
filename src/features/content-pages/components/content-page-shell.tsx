import type { ReactNode } from 'react'

import { MarkdownWrapper } from '@/features/markdown/components/markdown-wrapper'

import { getContentPageTitle } from '../content-page-frontmatter'
import type { ContentPageFrontmatter } from '../content-page-types'

interface ContentPageShellProps {
  children: ReactNode
  frontmatter: ContentPageFrontmatter
  page: string
  className?: string
}

export function ContentPageShell({ children, frontmatter, page, className }: ContentPageShellProps) {
  const title = getContentPageTitle(frontmatter, page)

  return (
    <article className={className}>
      <header className="mb-10 space-y-4">
        <h1 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          {title}
        </h1>

        {frontmatter.description ? (
          <p className="text-lg text-muted-foreground">
            {frontmatter.description}
          </p>
        ) : null}
      </header>

      <MarkdownWrapper>
        {children}
      </MarkdownWrapper>
    </article>
  )
}
