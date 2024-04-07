import { Avatar } from "@nextui-org/avatar"
import Image from "next/image"
import Link from "next/link"
import MyAvatar from "#/assets/avatar.jpg"
import { Button } from "@nextui-org/react"
import { MarkerIcon } from "#/components/marker"

import Styles from './sidebar.module.css'
import { OrganizationIcon } from "#/components/icons/organization-icon"
import { GitHubIcon } from "#/components/icons/github-icon"

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
      <Button color="primary" variant="faded" className="w-full mb-5" size="md">Follow</Button>

      <div className="w-full">

        <ul className={Styles.VcardDetails}>
          <li className={`pl-6 text-sm pt-1 ${Styles.VcardDetail}`}>
            <OrganizationIcon className={`float-left w-[16px] mt-1 -ml-6 text-center ${Styles.Octicon}`} />
            <span>广州云纺科技</span>
          </li>
          <li className={`pl-6 text-sm pt-1 ${Styles.VcardDetail}`}>
            <MarkerIcon className={`float-left w-[16px] mt-1 -ml-6 text-center ${Styles.Octicon}`} />
            <span>中国-广州</span>
          </li>
          <li className={`pl-6 text-sm pt-1 ${Styles.VcardDetail}`}>
            <GitHubIcon className={`float-left w-[16px] mt-1 -ml-6 text-center ${Styles.Octicon}`} />
            <span>
              <Link href={"https://github.com/Clover-You"} target="_blank">
                https://github.com/Clover-You
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </div >
  </>
}