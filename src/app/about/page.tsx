import { notFound } from 'next/navigation'
import { getPageByName } from '#/core/post'
import { PostView } from '#/components/post-view'

export default async function Page() {
  const page = await getPageByName('about')

  if (!page)
    return notFound()

  return (
    <PostView html={page.content} />
  )
}
