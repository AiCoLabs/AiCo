import Image from 'next/image'

const Card = (props) => {
    return (
        <div className={`flex flex-col items-center text-center text-white`} >
            <Image className="rounded-[30px]" src='/collection.png' width={255} height={463} alt='card' />
            <div className='mt-5 text-xl font-bold'>
                Collection Name
            </div>
            <div className='mt-4'>
                Automatically listed on Opensea immediately
                after collection created
            </div>
        </div>
    )
}

export default Card 