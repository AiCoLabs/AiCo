import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import collection from "../public/collection.png"

const card = {
    title: "Integrate OpenSea",
    desc: "Automatically listed on Opensea immediatelyafter collection created",
    logo: collection
}
const cardarr: CardProps[] = new Array(3).fill(card)

interface CardProps {
    title: string;
    desc: string;
    logo: string;
}
const FeaturesCards = () => {
    return (
        <div className='flex justify-between py-8 px-10  mt-16 rounded-2xl'
            style={{
                background: 'linear-gradient(241deg, #031322 0%, rgba(151, 147, 198, 0.24) 71.35%)'
            }}>
            {cardarr.map(card => <Card data={card} />)}
        </div>
    )
}

const Card = (props: { data: CardProps }) => {
    const { data } = props
    return (
        <div className={`text-white w-64`} >
            <Image className="rounded-[30px]" src={data.logo} alt='card' width={255} height={463} />
            <div className='flex gap-4 mt-5'>
                <Image className="rounded-2xl h-20 w-20" src={data.logo} width={75} height={75} alt='card' />
                <div>
                    <div>Collection Name</div>
                    <div className='flex gap-4 mt-4 items-center'>
                        <Avatar>
                            <AvatarImage src={data.logo} width={40} height={40} />
                            <AvatarFallback>Avtar</AvatarFallback>
                        </Avatar>
                        <div className='text-xl'>@0x3d45</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturesCards 