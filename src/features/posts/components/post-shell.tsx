import type { ReactNode } from 'react'

import { MarkdownWrapper } from '@/features/markdown/components/markdown-wrapper'

import { formatPostDate, getPostDateTimeAttribute } from '../post-date'
import type { PostFrontmatter } from '../post-types'

interface PostShellProps {
  children: ReactNode
  frontmatter: PostFrontmatter
  className?: string
}

export function PostShell({ children, frontmatter, className }: PostShellProps) {
  const formattedDate = formatPostDate(frontmatter.date)

  return (
    <article className={className}>
      <header className="mb-10 space-y-4">
        <h1 className="text-3xl font-semibold tracking-normal text-foreground sm:text-4xl">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground opacity-50">
          {formattedDate ? <time dateTime={getPostDateTimeAttribute(frontmatter.date)}>{formattedDate}</time> : null}
          {frontmatter.duration ? <span> · {frontmatter.duration}</span> : null}
          {/* {frontmatter.author ? <span>{frontmatter.author}</span> : null} */}
        </div>


        {frontmatter.description ? (
          <p className="text-lg text-muted-foreground">
            {frontmatter.description}
          </p>
        ) : null}

        {frontmatter.tags.length > 0 ? (
          <ul className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <li key={tag} className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      <MarkdownWrapper>
        {children}
      </MarkdownWrapper>
    </article>
  )
}
