import Image from 'next/image'

const Card = (props) => {
    return (
        <div className={`text-white`} >
            <Image className="rounded-[30px]" src='/Card3.png' width={255} height={463} alt='card' />
            <div className='flex gap-4 mt-5'>
                <Image className="rounded-2xl" src='/Card3.png' width={75} height={75} alt='card' />
                <div>
                    <div>Collection Name</div>
                    <div className='flex flex-col gap-4 mt-4'>
                        <Image className="rounded-full overflow-hidden" src='/Card3.png' width={40} height={40} alt='card' />
                        <div className='text-xl'>@0x3d45</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card 