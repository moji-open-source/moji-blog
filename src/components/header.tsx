import { Avatar } from "@nextui-org/react"

import AvatarImg from "#/assets/avatar.jpg"

export function Header() {
  return (
    <header className="h-[80px] w-full bg-bg1 shadow rounded-[10px] z-10 fixed left-0 right-0
    card-decoration-mask after:content-['']">
      <div className="container mx-auto flex items-center h-full">
        <div className="left-0">
          <Avatar src={AvatarImg.src} />
        </div>
      </div>
    </header>
  )
}