"use client";

import Link from "next/link";
import { NFTCard } from "@/components/NFTCards";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getCollectionCreated } from "@/api/mongodbApi";
import { MongoCollection } from "@/models/createcollection";

const Collections = (props: {
  accountAddress?: string;
  className?: string;
}) => {
  const { accountAddress } = props;
  const [collections, setCollections] = useState<(MongoCollection)[]>([])

  useEffect(() => {
    if (accountAddress) {
      getCollectionCreated<MongoCollection[]>({creator:accountAddress}).then((res)=>setCollections(res))
    }
  }, [accountAddress]);

  return (
    <div className={cn("grid grid-cols-4 gap-4 py-8", props.className)}>
      {collections.map((card) => (
        <Link key={card.collectionId} href={`/Collection/${card?.collectionId}`}>
          <NFTCard src={card.logoImage!}>
            <div className="absolute w-full bottom-0 h-11 flex items-center justify-between bg-indigo-500 px-2 gap-2 text-white">
              <div>{card.collectionName}</div>
            </div>
          </NFTCard>
        </Link>
      ))}
    </div>
  );
};

export default Collections;
