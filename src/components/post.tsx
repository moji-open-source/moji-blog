import { Image } from '@nextui-org/react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { getPostList } from '#/core/post'
import { TitleWithDivider } from '#/components/title-with-divider'

export async function PostList() {
  const categorieHref = 'www.baidu.com'

  const posts = await getPostList()

  function parseDate(date?: Date | string) {
    return dayjs(date).format('YYYY-MM-DD')
  }

  function parseTime(date?: Date | string) {
    return dayjs(date).format('HH:MM')
  }

  return (
    <>
      <TitleWithDivider title="Rust" number={6}></TitleWithDivider>
      <div className="grid grid-cols-2 gap-10">
        {posts.map((it, index) => {
          return (
            <div key={index} className="w-full rounded-lg grid grid-cols-1 shadow-lg overflow-hidden bg-white">
              <Link href={`article/${it.slug}`}>
                <Image src="/cover.jpeg" alt="" isZoomed isBlurred className="w-full overflow-hidden rounded-t-lg" radius="none" />
              </Link>
              <div className="p-8 box-border">
                <div className="text-slate-400 text-tiny mb-4">
                  <ul>
                    {it.categories.map((categorie, index) => {
                      return (
                        <li key={index}>
                          <Link href={categorieHref}>{categorie}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
                <Link href={`article/${it.slug}`}>
                  <h1 className="text-base font-medium">
                    {' '}
                    {it.title}
                    {' '}
                  </h1>
                </Link>
                <div className="mb-4 mt-4 w-full h-[1px] border-dotted border-b-2 border-b-slate-300 outline-2 outline-offset-2"></div>
                <ul className="text-tiny text-slate-400 space-x-2 flex">
                  <li>{parseDate(it.date)}</li>
                  <li>•</li>
                  <li>{parseTime(it.date)}</li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
