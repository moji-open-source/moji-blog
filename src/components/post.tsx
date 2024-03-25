import { TitleWithDivider } from '#/components/title-with-divider'
import { Image } from '@nextui-org/react'
import Link from 'next/link'

export function PostList() {

  const categorieHref = 'www.baidu.com'
  const articleHref = '/article/java-base'

  const Node = <>
    <div className="w-full rounded-lg grid grid-cols-1 shadow-lg overflow-hidden bg-white">
      <Link href={articleHref}>
        <Image src="/cover.jpeg" alt="" isZoomed isBlurred className="w-full overflow-hidden rounded-t-lg" radius="none" />
      </Link>
      <div className="p-8 box-border">
        <div className="text-slate-400 text-tiny mb-4">
          <ul>
            <li>
              <Link href={categorieHref}>RUST</Link>
            </li>
          </ul>
        </div>
        <Link href={articleHref}>
          <h1 className="text-base font-medium"> Rust 从入门到精通 </h1>
        </Link>
        <div className="mb-4 mt-4 w-full h-[1px] border-dotted border-b-2 border-b-slate-300 outline-2 outline-offset-2"></div>
        <ul className="text-tiny text-slate-400 space-x-2 flex">
          <li>2024-03-08</li>
          <li>•</li>
          <li>20:58</li>
        </ul>
      </div>
    </div>
  </>

  return <>
    <TitleWithDivider title="Rust" number={6}></TitleWithDivider>
    <div className="grid grid-cols-2 gap-10">
      {Node}
      {Node}
      {Node}
      {Node}
      {Node}
      {Node}
      {Node}
    </div>
  </>
}