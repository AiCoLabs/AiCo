"use client";
import BuyButton from "@/components/BuyBtn";
import ForkButton from "@/components/ForkBtn";

import Link from "next/link";
import DeleteBtn from "@/components/DeleteBtn";
import { NFTCard } from "@/components/NFTCards";
import { cn } from "@/lib/utils";
import { NewCollectionCreateds, NewNFTCreateds } from "@/lib/type";

const Collections = (props: {
  data: NewNFTCreateds[];
  collectionItem: NewCollectionCreateds | undefined;
  className?: string;
}) => {
  const { data = [], className, ...rest } = props;
  return (
    <div className={cn("grid grid-cols-4 gap-4 py-8", className)}>
      {data.map((card) => (
        <CollectionCard key={card.id} data={card} {...rest} />
      ))}
    </div>
  );
};

export const CollectionCard = (props: {
  data: NewNFTCreateds;
  collectionItem: NewCollectionCreateds | undefined;
  className?: string;
}) => {
  const { data: card, collectionItem } = props;

  return (
    <Link key={card.id} href={`/NFT/${card.collectionId}/${card.tokenId}`}>
      <NFTCard src={card.detailJson.image}>
        <>
          <div className="absolute right-2 top-2">
            <DeleteBtn data={card} />
          </div>
          <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-indigo-500 px-2 gap-2 text-white">
            <div>{`#${card.tokenId}`}</div>
            <ForkButton data={card} />
            <BuyButton
              data={{
                ...card,
                derivedCollectionAddr: collectionItem?.derivedCollectionAddr,
              }}
            />
          </div>
        </>
      </NFTCard>
    </Link>
  );
};

export default Collections;
