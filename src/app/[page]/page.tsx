import { notFound } from 'next/navigation'
import { getPageByName, getPageMap } from '#/core/post'
import { PostView } from '#/components/post-view'

interface Props {
  params: {
    page: string
  }
}

export async function generateStaticParams() {
  const pageMap = await getPageMap()
  return Object.keys(pageMap).map(page => ({ page }))
}

export default async function Page(props: Props) {
  const page = await getPageByName(props.params.page)

  if (!page)
    return notFound()

  return (
    <div className="mx-auto px-6 container">
      <PostView html={page.content} />
    </div>
  )
}
