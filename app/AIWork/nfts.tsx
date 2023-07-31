import Link from "next/link";
import collection from "/public/collection.png"
import { CollectionProps, CollectionDone } from '@/components/CollectionCards';
import BuyButton from '@/components/BuyBtn';

const collectionItem = {
    title: "Integrate OpenSea",
    desc: "Automatically listed on Opensea immediately after collection created",
    logo: collection
}

const nftarr: CollectionProps[] = new Array(12).fill(collectionItem)

const Nfts = () => {
    return (
        <div className='grid grid-cols-4 gap-4 py-8'>
            {nftarr.map(card => <Link key={card.id} href={`/Collection/${card.id}`}> 
            <CollectionDone data={card}>
                <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-indigo-500 px-2 text-white gap-2">
                    <div>NFT name</div>
                    <BuyButton data={card} />
                </div>
            </CollectionDone>
            </Link>)}
        </div>
    )
}


export default Nfts 