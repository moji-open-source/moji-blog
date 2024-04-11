import { notFound } from 'next/navigation'
import { getPageByName } from '#/core/post'
import { PostView } from '#/components/post-view'

export default async function Page() {
  const page = await getPageByName('about')

  if (!page)
    return notFound()

  return (
    <div className="mx-auto px-6 container">
      <PostView html={page.content} />
    </div>
  )
}
