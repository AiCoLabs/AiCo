import Image from 'next/image'
import type { StaticImageData } from "next/image";
import opensealogo from "../public/opensealogo.png"
import per from "../public/per.png"
import cpusetting from "../public/cpusetting.png"
import StabilityAi_Logo from "../public/StabilityAi_Logo.png"
import ChatGPT_logo from "../public/ChatGPT_logo.png"
import chatgpt from "../public/chatgpt.png"

const cardarr3: CardProps[] = [
    { title: "Integrate OpenSea    ", desc: "Automatically listed on Opensea immediatelyafter collection created", logo: opensealogo },
    { title: "Integrate AI", desc: "Co-Create photograph in one collection by stable diffusion", logo: StabilityAi_Logo },
    { title: "Integrate ChatGpt", desc: "Co-Create Novel/Drama by GPT,anyone can contribute chapter.", logo: ChatGPT_logo },
    { title: "Permissionless", desc: "Anyone can initiate a new collection.", logo: per },
    { title: "Participate configuration", desc: "Free/ChargeFee/Whitelist/Airdrop/....", logo: cpusetting },
    { title: "Integrate ChatGpt", desc: "Co-Create Novel/Drama by GPT,anyone can contribute chapter.", logo: chatgpt },
]

interface CardProps {
    title: string;
    desc: string;
    logo: StaticImageData;
}
const FeaturesCards = () => {
    return (
        <div className='grid grid-cols-3 gap-y-32 mt-24'>
            {cardarr3.map(card => <Card key={card.id} data={card} />)}
        </div>
    )
}

const Card = (props: { data: CardProps }) => {
    const { data } = props
    return (
        <div className={`flex flex-col items-center text-center text-white`} >
            <Image className="rounded-[30px]" src={data.logo} alt='card' />
            <div className='mt-5 text-xl font-bold'>
                {data.title}
            </div>
            <div className='mt-4'>
                {data.desc}
            </div>
        </div>
    )
}
export default FeaturesCards 