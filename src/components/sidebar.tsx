import { Avatar } from '@nextui-org/avatar'
import Image from 'next/image'
import MyAvatar from '#/assets/avatar.jpg'

export function Sidbar() {
  return (
    <div className="bg-white w-full rounded-md h-screen p-10 box-border shadow-md translate-y-[-410px] z-[2] sticky top-[510px]
    card-decoration-mask before:content-['']">
      <Header />
      <div className="mb-10 mt-10 w-full h-[1px] border-dotted border-b-2 border-b-slate-300 outline-2 outline-offset-2"></div>
    </div>
  )
}


function Header() {
  return <>
    <div className="flex flex-col items-center mb-5">
      <Avatar src={MyAvatar.src} size="lg" className="w-[110px] h-[110px] mb-5" isBordered>
        <Image src={MyAvatar} alt="" />
      </Avatar>

      <h5 className="text-lg font-[800] text-gray-700 mb-5">CloverYou</h5>

      <span className="mb-5 text-sm text-default-700">童话只美在真实却从不续写</span>
    </div>
  </>
}