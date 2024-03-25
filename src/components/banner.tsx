import { Image } from '@nextui-org/react'

interface Props {
  pathname?: string
}

export function Banner(props: Props) {
  return (
    <div className="w-full h-[560px] z-[1] border rounded-3xl bg-red-100 relative banner">
      <Image src="https://pic.imgdb.cn/item/63ba7f5cbe43e0d30ed4dad0.jpeg" alt=""
        className="z-[1] w-full h-full" removeWrapper />

      <div className="pt-20 z-[999] absolute bottom-0 w-full h-full flex items-center">
        <div className="container pl-5 pr-5 mx-auto">
          <div className="grid grid-rows-1 grid-cols-[320px_1fr] w-full">
            <div className="pl-5 pr-5">s</div>
            <div className="banner-text pl-5 pr-5">
              <h1 className="text-4xl text-white mb-8 text-shadow-title"> 树深时见鹿，<br /> 溪午不闻钟。</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}