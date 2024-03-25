import { Image } from '@nextui-org/react'

export function Banner() {
  return (
    <div className="w-full h-[560px] z-[1] border rounded-3xl bg-red-100">
      <Image src="https://pic.imgdb.cn/item/63ba7f5cbe43e0d30ed4dad0.jpeg" alt=""
        className="z-[1] w-full h-full" removeWrapper />
    </div>
  )
}