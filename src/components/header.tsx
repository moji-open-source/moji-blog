import { Avatar } from '@nextui-org/react'

import AvatarImg from '#/assets/avatar.jpg'

export function Header() {
  return (
    <header className="h-[80px] w-full bg-bg1 shadow rounded-[10px] z-10 fixed left-0 right-0
    after:absolute
    after:left-[30px]
    after:h-2
    after:w-[calc(100%-60px)]
    after:rounded-b-md
    after:opacity-30
    after:bg-bg1
    after:content-['']">
      <div className="container mx-auto flex items-center h-full">
        <div className="left-0">
          <Avatar src={AvatarImg.src} />
        </div>
      </div>
    </header>
  )
}