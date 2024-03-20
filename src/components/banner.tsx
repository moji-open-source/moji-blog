import { Image } from '@nextui-org/react'

export function Banner() {
  return (
    <div className="w-full h-[560px] z-[1]">
      <Image src="/cover.jpeg" alt="" className="z-[1] w-full h-full" removeWrapper />
    </div>
  )
}