import Image from 'next/image'
import type { StaticImageData } from "next/image";
import nfts from "/public/nfts.png"

const card = {
    title: "Integrate OpenSea",
    desc: "Automatically listed on Opensea immediatelyafter collection created",
    logo: nfts
}
const cardarr: CardProps[] = new Array(12).fill(card)

interface CardProps {
    title: string;
    desc: string;
    logo: StaticImageData;
}
const NTFCards = () => {
    return (
        <div className='grid grid-cols-4 gap-4 py-8'>
            {cardarr.map(card => <Card data={card} />)}
        </div>
    )
}

const Card = (props:{data:CardProps}) => {
    const {data}=props
    return (
        <div className={`flex flex-col items-center text-center text-white`} >
            <Image className="rounded-[30px]" src={data.logo} width={255} height={463} alt='card' />
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

export default NTFCards 