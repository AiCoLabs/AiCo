import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Title from '@/components/Title'
import FeaturesCards from '@/components/FeaturesCards'
import CollectionCards from '@/components/CollectionCards'
import CoCreateCards from '@/components/CoCreateCards'
import img1 from "../public/Card.png"
import img2 from "../public/Card2.png"
import img3 from "../public/Card3.png"
import img4 from "../public/Card7.png"
import logo from "../public/logo.svg"

const Home = () => {
  return (
    <main>
      <div className='container mx-auto'>
        <div className='flex text-white py-40 relative'>
          <div className='w-9/12 z-10'>
            <h1 className="text-4xl uppercase font-500 tracking-wider">Unlock the power of creators
              through <span className='text-[#A318D3]'>AI Coo</span>perate</h1>
            <h1 className="text-2xl mt-[68px]">Co-create  in one collection by AIGC, <br />
              Show your creativity & Share Royalty of collection</h1>
            <div className='flex gap-8 mt-24'>
              <Button className="bg-[#cff800] text-black">View on OpenSea</Button>
              <Button>Create Collection</Button>
            </div>
          </div>
          <Image className="absolute -top-8 end-20 rounded-2xl" src={img1} alt='' />
          <Image className="absolute top-80 end-0 rounded-2xl" src={img2} alt='' />
          <Image className="absolute top-96 end-72 rounded-2xl" src={img3} alt='' />
        </div>
        <div className='mt-32'>
          <Title>Live Co-Create</Title>
          <CoCreateCards />
        </div>
        <div className='mt-40'>
          <Title>Featured Collections</Title>
          <CollectionCards />
        </div>
        <div className='mt-40'>
          <Title>Features</Title>
          <FeaturesCards />
        </div>
        <div className='py-10 mt-32 rounded-2xl bg-indigo-500 text-white'>
          <Title>What’s AiCoo?</Title>
          <div className='flex justify-between'>
            <div className='pl-24 mt-9'>
              <div className='max-w-lg'>
                <div className='text-xl'>
                  AiCoo is a decentralized co-create platfrom  through AI.
                  Anyone can initial a new collection and set conditions for who can paticipate.
                  All participants co-created used AI tool(Chatgpt/Stable Diffusion),
                  And all contributors of collection share the royalty og the collection.
                  Claim the royalty fee from the NFT contracts.
                </div>
                <Button className="bg-[#cff800] text-black mt-16">Show your creativity</Button>
              </div>
            </div>
            <Image src={logo} alt='' />
          </div>
        </div>
      </div>
      <div className='pt-10 pb-40 mt-32 text-white index_bg' >
        <div className='container mx-auto'>
          <div className='flex justify-between'>
            <div className='mt-56'>
              <div className='font-normal text-5xl'>
                Ready to get started?
              </div>
              <Button className="bg-white text-black mt-10 rounded-full w-72 uppercase tracking-wide">Get Started</Button>
            </div>
            <Image src={img4} alt='' />
          </div>
          <div className='flex gap-4 items-center'>
            <Image src={logo} alt='' width={100} height={100} />
            <div className='text-4xl'>
              AiCoo
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home     