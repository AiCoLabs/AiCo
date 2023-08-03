'use client'
import Link from "next/link";
import BuyButton from '@/components/BuyBtn';
import { NewNFTCreateds } from "@/lib/type";
import { useEffect, useState } from "react";
import DeleteButton from "@/components/DeleteBtn";
import { NFTCard } from "@/components/NFTCards";
import ForkButton from "@/components/ForkBtn";
import { getAllNewNFTCreateds } from "@/api/thegraphApi";


const Nfts = () => {
    const [nfts, setNFTs] = useState<NewNFTCreateds[]|undefined>()
    useEffect(()=>{
      getAllNewNFTCreateds().then((res)=>{
        console.log('res', res)
        setNFTs(res )
      })
    },[])

    return (
        <div className='grid grid-cols-4 gap-4 py-8'>
            {nfts?.map((card) => (
            <Link key={card.id} href={`/NFT/${card.collectionId}/${card.tokenId}`}>
            <NFTCard data={card}>
                <>
                <div className="absolute right-2 top-2">
                    <DeleteButton data={card} />
                </div>
                <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-indigo-500 px-2 gap-2 text-white">
                    <div>{`#${card.tokenId}`}</div>
                    <ForkButton data={card} />
                    <BuyButton data={card} />
                </div>
                </>
            </NFTCard>
            </Link>
        ))}
        </div>
    )
}


export default Nfts 