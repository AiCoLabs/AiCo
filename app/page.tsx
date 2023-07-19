import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Title from '@/components/Title'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'
import img1 from "../public/Card.png"
import img2 from "../public/Card2.png"
import img3 from "../public/Card3.png"

const cardarr1 = new Array(3).fill("1")
const cardarr2 = new Array(12).fill("2")
const cardarr3 = new Array(6).fill("3")

const Home = () => {
  return (
    <main>
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
        <Image className="absolute top-0 end-36 rounded-2xl" src={img1} alt='card' />
        <Image className="absolute top-56 end-0 rounded-2xl" src={img2} alt='card' />
        <Image className="absolute top-96 end-96 rounded-2xl" src={img3} alt='card' />
      </div>
      <Title>Live Co-Create</Title>
      <div className='flex justify-between py-8 px-10 mt-16 rounded-2xl'
        style={{
          background: 'linear-gradient(241deg, #031322 0%, rgba(151, 147, 198, 0.24) 71.35%)'
        }}>
        {cardarr1.map(card => <Card />)}
      </div>
      <div className='mt-40'>
        <Title>Featured Collections</Title>
        <div className='grid grid-cols-4 gap-5 py-8 px-10 mt-16 rounded-2xl bg-[#32365F]'>
          {cardarr2.map(card => <Card2 />)}
        </div>
      </div>
      <div className='mt-40'>
        <Title>Features</Title>
        <div className='grid grid-cols-3 gap-y-5 py-8 px-10 mt-16'>
          {cardarr3.map(card => <Card3 />)}
        </div>
      </div>
    </main>
  )
}

export default Home     