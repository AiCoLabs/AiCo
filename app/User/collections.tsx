"use client";

import Link from "next/link";
import { NFTCard } from "@/components/NFTCards";
import { cn } from "@/lib/utils";
import { NewCollectionCreateds, NewNFTCreateds } from "@/lib/type";

const Collections = (props: {
  data: NewNFTCreateds[];
  collectionItem: NewCollectionCreateds | undefined;
  className?: string;
}) => {
  const { data = [], collectionItem } = props;

  return (
    <div className={cn("grid grid-cols-4 gap-4 py-8", props.className)}>
      {data.map((card) => (
        <Link key={card.id} href={`/NFT/${card.collectionId}/${card.tokenId}`}>
          <NFTCard data={card}>
            <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-indigo-500 px-2 gap-2 text-white">
              <div>{`#${card.tokenId}`}</div>
            </div>
          </NFTCard>
        </Link>
      ))}
    </div>
  );
};

export default Collections;
