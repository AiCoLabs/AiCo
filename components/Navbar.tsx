import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const navs = [
  {
    link: "AIWork",
    label: "AIWork"
  },
  {
    link: "Create",
    label: "Create"
  },
  {
    link: "About",
    label: "About"
  },
  {
    link: "Roadmap",
    label: "Roadmap"
  },
]

const Navbar = () => {
  return (
    <nav className="h-20 flex justify-between items-center text-white">
      <div className="gap-2 flex items-center ">
        <Link href='/'>
          <Image className='rounded-full' src='/logo.png' width={30} height={30} alt='logo' />
        </Link>
        <h3 className='text-2xl font-mono'>AiCo</h3>
      </div>
      <div className="w-[420px] py-2 flex justify-between text-xl">
        {navs.map(nav => (
          <Link href={`/${nav.link}`}>
            {nav.label}
          </Link>
        ))}
      </div>
      <div>
        <ConnectButton
          label='Connect Web3'
          accountStatus={"address"}
          chainStatus={"none"}
          showBalance={false}
        />
      </div>
    </nav>
  )
}
export default Navbar