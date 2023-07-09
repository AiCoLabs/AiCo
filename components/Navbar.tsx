import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AiWork from '@/app/AIWork/page'
import Create from '@/app/Create/page'
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-8">
        <div className="gap-2 flex items-center ">
            <Link href='/'>
                <Image className='rounded-full' src='/logo.png' width={30} height={30} alt='logo' />
            </Link>
            <h3 className='text-2xl font-mono'>AiCo</h3>
        </div>
        <div className="px-2 py-2 gap-20 flex items-center">
            <Create />
            <AiWork />
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