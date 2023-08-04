"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NFTCard } from "@/components/NFTCards";
import { MongoNFT } from "@/models/mintnft";
import { getNFTCreateds } from "@/api/mongodbApi";

const Nfts = ({ accountAddress }: { accountAddress?: string }) => {
  const [nfts, setNFTs] = useState<(MongoNFT)[]>([]);
  useEffect(() => {
    if (accountAddress) {
      getNFTCreateds<MongoNFT[]>({
        nftOwner: accountAddress,
      }).then((res) => {
        console.log("getNFTCreateds", res);
        setNFTs(res);
      });
    }
  }, [accountAddress]);

  return (
    <div className="grid grid-cols-4 gap-4 py-8">
      {nfts?.map((card) => (
        <Link
          key={card.tokenId}
          href={`/NFT/${card.belongToCollectionId}/${card.tokenId}`}
        >
          <NFTCard src={card.imageUrl!} />
        </Link>
      ))}
    </div>
  );
};

export default Nfts;
