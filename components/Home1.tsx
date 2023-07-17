import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'

const Home1 = () => {
  return (
    <div className='flex text-white pt-40'>
      <div className='w-5/12'>
        <h1 className="text-4xl uppercase">Unlock the power of creators
          through <span className='text-[#A318D3]'>AI Coo</span>perate</h1>
        <h1 className="text-2xl mt-[68px]">Co-create  in one collection by AIGC,
          Show your creativity & Share Royalty of collection</h1>
          <div className='flex gap-8 mt-24'>
            <Button className="bg-[#CFF800] text-black">View on OpenSea</Button>
            <Button>Create Collection</Button>
          </div>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <Image className="rounded-2xl" src='/home.png' width={400} height={300} alt='logo' />
      </div>
    </div>
  )
}
    
export default Home1