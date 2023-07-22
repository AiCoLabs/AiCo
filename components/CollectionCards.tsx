import Image from 'next/image'
import type { StaticImageData } from "next/image";
import UserAvatar from './UserAvatar';
import collectionImg from "/public/collection.png"
import Link from 'next/link';

export interface CollectionProps {
    name: string;
    id: string;
    creator: string
    title: string;
    desc: string;
    logo: string | StaticImageData;
}
export const collectionItem = {
    id: "collectionId",
    title: "Integrate OpenSea",
    name: "collection",
    creator: "liuq",
    desc: "Automatically listed on Opensea immediatelyafter collection created",
    logo: collectionImg
}
// 首页banner随机 collectionCard
export const CollectionRandom = (props: { data: CollectionProps }) => {
    const { data } = props
    return (
        <Link href={`/Collection/${data.id}`}>
            <div className={`w-full h-full relative rounded-2xl overflow-hidden`} >
                <Image className="rounded-16" src={data.logo} fill alt='card' />
                <div className='absolute inset-x-0 bottom-0 h-10 bg-white bg-opacity-30 px-4'>
                    <div className='flex justify-between items-center text-xs h-full'>
                        <div>
                            Name
                        </div>
                        <UserAvatar data={data} className={"w-5 h-5"} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

// 正在进行中的Collection
export const CollectionIng = (props: { data: CollectionProps }) => {
    const { data } = props
    return (
        <Link href={`/Collection/${data.id}`}>
            <div className={`text-white w-64`} >
                <div className='w-64 h-[28.9375rem] relative rounded-[30px] overflow-hidden'>
                    <Image src={data.logo} alt={data.title} fill />
                </div>
                <div className='flex gap-4 mt-5'>
                    <Image className="rounded-2xl h-20 w-20" src={data.logo} width={75} height={75} alt='card' />
                    <div className='text-xl'>
                        <div className='mb-2'>Collection Name</div>
                        <UserAvatar data={data} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

// 已经结束归档的collection
export const CollectionDone = (props: { data: CollectionProps, children?: React.ReactNode }) => {
    const { data } = props
    return (
        <div className='w-[15.18125rem] h-[18.75rem] relative'>
            <Image src={data.logo} alt='card' fill />
            {props.children}
        </div>
    )
}