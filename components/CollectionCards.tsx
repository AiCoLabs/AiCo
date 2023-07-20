import Image from 'next/image'
import type { StaticImageData } from "next/image";
import collection1 from "../public/collection1.png"

const card = {
    title: "Integrate OpenSea",
    desc: "Automatically listed on Opensea immediatelyafter collection created",
    logo: collection1
}
const cardarr: CardProps[] = new Array(12).fill(card)

interface CardProps {
    title: string;
    desc: string;
    logo: StaticImageData;
}
const FeaturesCards = () => {
    return (
        <div className='grid grid-cols-4 gap-5 py-8 px-10 mt-16 rounded-2xl bg-[#32365F]'>
            {cardarr.map(card => <Card />)}
        </div>
    )
}

const Card = (props) => {
    return (
        <div className={`flex flex-col items-center text-center text-white`} >
            <Image className="rounded-[30px]" src='/collection1.png' width={255} height={463} alt='card' />
            {/* <div className='mt-5 text-xl font-bold'>
                Collection Name
            </div>
            <div className=''>
                Automatically listed on Opensea immediately
                after collection created
            </div> */}
        </div>
    )
}

export default FeaturesCards 