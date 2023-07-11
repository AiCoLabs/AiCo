import React from 'react'
import Image from 'next/image'

const Home1 = () => {
  return (
    <div className='flex pl-36 bg-gray-100'>
        <div className='w-1/2 flex flex-col justify-center h-screen'>
            <h1 className="text-7xl font-bold my-2">Show</h1>
            <h1 className="text-7xl font-bold my-2">Creativity via</h1>
            <h1 className="text-6xl font-bold my-2 text-green-200">Artificial Intelligence</h1>
            <h1 className="text-7xl font-bold my-2">In Collabaration</h1>
        </div>
        <div className='w-1/2 flex justify-center items-center'>
            <Image className="rounded-2xl" src='/home.png' width={400} height={300} alt='logo' />
        </div>
    </div>
  )
}

export default Home1