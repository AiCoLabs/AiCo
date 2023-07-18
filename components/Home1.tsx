import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Title from '@/components/Title'

const Home1 = () => {
  return (
    <div>
      <div className='flex text-white py-40 relative'>
        <div className='w-7/12 z-10'>
          <h1 className="text-4xl uppercase font-500">Unlock the power of creators
            through <span className='text-[#A318D3]'>AI Coo</span>perate</h1>
          <h1 className="text-2xl mt-[68px]">Co-create  in one collection by AIGC, <br />
            Show your creativity & Share Royalty of collection</h1>
          <div className='flex gap-8 mt-24'>
            <Button className="bg-[#cff800] text-black">View on OpenSea</Button>
            <Button>Create Collection</Button>
          </div>
        </div>
        <Image className="absolute top-0 end-36 rounded-2xl w-64" src='/Card.png' width={464} height={340} alt='card' />
        <Image className="absolute top-56 end-0 rounded-2xl w-40" src='/Card2.png' width={165} height={236} alt='card' />
        <Image className="absolute top-96 end-96 rounded-2xl w-40" src='/Card3.png' width={165} height={236} alt='card' />
      </div>
      <Title>Live Co-Create</Title>
      <div className='py-8 px-10 mt-16 rounded-2xl'
        style={{
          background: 'linear-gradient(241deg, #031322 0%, rgba(151, 147, 198, 0.24) 71.35%)'
        }}>
          
        <Image className="absolute top-96 end-96 rounded-2xl w-40" src='/Card3.png' width={165} height={236} alt='card' />

      </div>
      <div className='mt-40'>
        <Title>Featured Collections</Title>
        <div className='py-8 px-10 mt-16 rounded-2xl bg-[#32365F]'>
          <Image className="absolute top-96 end-96 rounded-2xl w-40" src='/Card3.png' width={165} height={236} alt='card' />
        </div>
      </div>
      <div className='mt-40'>
        <Title>Features</Title>
        <div className='py-8 px-10 mt-16 rounded-2xl'>

        </div>
      </div>
    </div>

  )
}

export default Home1