import Link from 'next/link'
import dayjs from 'dayjs'
import { getPostList } from '#/core/post'

export async function PostList() {
  const postsRaw = await getPostList()

  const posts = Object.groupBy(postsRaw, (item) => {
    if (!item.date)
      return ''
    const year = dayjs(item.date).format('YYYY')
    return year
  })

  const group = Object.entries(posts)

  function getLocaleString(date: Date | string, lang: string) {
    return dayjs(date).toDate().toLocaleString(lang, { month: 'long', day: 'numeric' })
  }

  return (
    <>
      <ul>
        {group.map(([year, posts], index) => {
          if (!year)
            return <></>
          return (
            <>
              <div className="h-20 relative">
                <span className="absolute -left-12 top-4 font-bold text-9xl text-transparent text-stroke-hex-aaa opacity-10">{year}</span>
              </div>
              {posts?.map((post) => {
                return (
                  <Link href={`posts/${post.slug}`} key={index}>
                    <li className="mt-2 mb-6 opacity-60 flex gap-2">
                      <div className="leading-5 text-lg">
                        <span>{post.title}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <span className="whitespace-nowrap text-sm">{getLocaleString(post.date, 'en')}</span>
                        <span className="whitespace-nowrap text-sm">{post.duration}</span>
                      </div>
                    </li>
                  </Link>
                )
              })}
            </>
          )
        })}
      </ul>
    </>
  )
}
