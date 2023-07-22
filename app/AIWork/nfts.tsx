import collection from "/public/collection.png"
import { CollectionProps, CollectionDone } from '@/components/CollectionCards';

const collectionItem = {
    title: "Integrate OpenSea",
    desc: "Automatically listed on Opensea immediatelyafter collection created",
    logo: collection
}

const nftarr: CollectionProps[] = new Array(12).fill(collectionItem)

const Nfts = () => {
    return (
        <div className='grid grid-cols-4 gap-4 py-8'>
            {nftarr.map(card => <CollectionDone data={card} />)}
        </div>
    )
}


export default Nfts 