import Image from 'next/image'
import img3 from "../public/collection.png"

const Card = (props) => {
    return (
        <div className={`text-white w-64`} >
            <Image className="rounded-[30px]" src={img3} alt='card' />
            <div className='flex gap-4 mt-5'>
                <Image className="rounded-2xl h-20 w-20" src={img3} width={75} height={75} alt='card' />
                <div>
                    <div>Collection Name</div>
                    <div className='flex gap-4 mt-4 items-center'>
                        <Image className="rounded-full overflow-hidden w-10 h-10" src={img3} width={40} height={40} alt='card' />
                        <div className='text-xl'>@0x3d45</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card 