import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import initHexo from '#/hexo/hexo'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import styles from './article.module.css'
import './theme.css'

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
  return {
    title: 'Clover\'sBlog - Rust 从入门到入土'
  }
}

export async function generateStaticParams() {
  return [{
    slug: 'java-base'
  }]
}

export default async function PostPage(props: Props) {
  const hexo = await initHexo()

  const [post] = hexo.database.model('Post').toArray()

  if (!post) {
    return notFound()
  }

  return <>
    <div id="article-container" className={styles.MarkdownBody}
      dangerouslySetInnerHTML={{ __html: post.content }}></div>
  </>
}