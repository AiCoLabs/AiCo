'use client'
import BuyButton from "@/components/BuyBtn";
import ForkButton from "@/components/ForkBtn";

import Link from "next/link";
import DeleteBtn from "@/components/DeleteBtn";
import { NFTProps, NFTCard } from "@/components/NFTCards";
import { cn } from "@/lib/utils";

const Collections = (props:{data:NFTProps[],className?:string}) => {
  const {data=[]}=props
  return (
    <div className={cn("grid grid-cols-4 gap-4 py-8",props.className)}>
      {data.map((card) => (
        <Link key={card.id} href={`/NFT/${card.id}`}>
          <NFTCard data={card}>
            <>
              <div className="absolute right-2 top-2">
                <DeleteBtn data={card} />
              </div>
              <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-indigo-500 px-2 gap-2 text-white">
                <div>{card.title}</div>
                <ForkButton data={card} />
                <BuyButton data={card} />
              </div>
            </>
          </NFTCard>
        </Link>
      ))}
    </div>
  );
};

export default Collections;
