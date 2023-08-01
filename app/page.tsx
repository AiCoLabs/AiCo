import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Title from '@/components/Title'
import FeaturesCards from '@/components/FeaturesCards'
import { CollectionDone, CollectionIng, CollectionRandom, CollectionProps, collectionItem } from '@/components/CollectionCards'
import img4 from "@/public/card.png"
import logo from "@/public/logo.svg"
import Link from 'next/link'


const Home = () => {


  const collections: CollectionProps[] = new Array(12).fill(collectionItem)
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
              <Button className="bg-yellow-rgba text-black">View on OpenSea</Button>
              <Link href={"/Collection/Create"}>
                <Button>Create Collection</Button>
              </Link>
            </div>
          </div>
          <div className='absolute inset-0 left-2/3'>
            <div className="absolute top-0 end-32 w-52 h-72 rotate-[35deg]">
              <CollectionRandom sampleData={collections[0]} />
            </div>
            <div className="absolute top-80 end-0 w-44 h-60">
              <CollectionRandom sampleData={collections[0]} />
            </div>
            <div className="absolute top-96 end-72 w-44 h-60 rotate-[17.5deg]">
              <CollectionRandom sampleData={collections[0]} />
            </div>
          </div>
        </div>
        <div className='mt-32'>
          <Title>Live Co-Create</Title>
          <div className='flex justify-between py-8 px-10  mt-16 rounded-2xl'
            style={{
              background: 'linear-gradient(241deg, #031322 0%, rgba(151, 147, 198, 0.24) 71.35%)'
            }}>
            {collections.slice(0, 3).map(card => <CollectionIng key={card.id} sampleData={card} />)}
          </div>
        </div>
        {/* <div className='mt-40'>
          <Title>Featured Collections</Title>
          <div className='grid grid-cols-4 gap-4 py-8 justify-items-center mt-16 rounded-2xl bg-indigo-500'>
            {collections.map(card => <Link key={card.id} href={`/Collection/${card.id}`}><CollectionDone data={card} /></Link>)}
          </div>
        </div> */}
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
                  And all contributors of collection share the royalty of the collection.
                  Claim the royalty fee from the NFT contracts.
                </div>
                <Link href={"/Collection/Create"}>
                  <Button className="bg-yellow-rgba text-black mt-16">Show your creativity</Button>
                </Link>
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