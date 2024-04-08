import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import styles from './article.module.css'
import { getPostBySlug, getSlugs } from '#/core/post'

interface Props {
  params: {
    slug: string
  }
}

// 静态metadata
// export const metadata: Metadata = {
//   title: ''
// }

// dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  const { title } = post ?? {}

  if (title) {
    return {
      title: `Clover'sBlog - ${title}`,
    }
  }

  return {
    title: `Clover'sBlog`,
  }
}

export async function generateStaticParams() {
  const slugs = await getSlugs()
  return slugs.map(slug => ({ slug }))
}

export default async function PostPage(props: Props) {
  const post = await getPostBySlug(props.params.slug)

  if (!post)
    return notFound()

  return (
    <>
      <div
        id="article-container"
        className={styles.MarkdownBody}
        dangerouslySetInnerHTML={{ __html: post.content }}
      >
      </div>
    </>
  )
}
