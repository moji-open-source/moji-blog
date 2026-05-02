import Link from 'next/link'

import { formatPostMonthDay, getPostDateTimeAttribute } from '@/features/posts/post-date'
import { listPublishedPosts } from '@/features/posts/post-source'
import { Badge } from '@/site/components'
import { cn } from '@/lib/utils'

export default async function PostsPage() {
  const posts = await listPublishedPosts()

  return (
    <article>
      <div className="m-auto max-w-[65ch] leading-7 text-base">
        <ul>
          {posts.map((post) => (
            <PostListItem
              key={post.slug}
              slug={post.slug}
              title={post.frontmatter.title}
              date={post.frontmatter.date}
              duration={post.frontmatter.duration}
            />
          ))}
        </ul>
      </div>
    </article>
  )
}

interface PostListItemProps {
  date?: string
  duration?: string
  slug: string
  title: string
}

function LanguageBadge({ language, className }: { language: string, className?: string }) {
  return (
    <Badge
      variant="secondary"
      className={cn('font-normal align-middle flex-none text-xs bg-zinc-200/10 text-zinc-500 rounded px-1 py-0.5', className)}
    >
      {language}
    </Badge>
  )
}

function PostListItem({ slug, title, date, duration }: PostListItemProps) {
  const formattedDate = formatPostMonthDay(date)

  return (
    <Link
      href={`/posts/${slug}`}
      className="opacity-60 hover:opacity-100 block font-normal mb-6 mt-2 no-underline transition-all duration-200 ease-out border-b-0 text-white"
    >
      <li className="md:flex-row flex-col flex gap-2 md:items-center">
        <div className="text-lg leading-5 flex gap-2 flex-wrap">
          <LanguageBadge language="English" className="-ml-12 mr-2 hidden md:block" />
          <span className="align-middle">{title}</span>
          <span className="align-middle opacity-50 flex-none text-xs -ml-1.5 icon-[carbon--arrow-up-right]" title="External" />
        </div>

        <div className="flex gap-2 items-center">
          {formattedDate ? <time className="text-sm whitespace-nowrap opacity-50" dateTime={getPostDateTimeAttribute(date)}>{formattedDate}</time> : null}
          {duration ? (
            <span className="text-sm whitespace-nowrap opacity-50">
              · {duration}
            </span>
          ) : null}
          <LanguageBadge language="English" className="md:hidden" />
        </div>
      </li>
    </Link>
  )
}
