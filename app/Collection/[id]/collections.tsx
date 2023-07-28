import BuyButton from "@/components/BuyBtn";
import ForkButton from "@/components/ForkBtn";
import {
  CollectionProps,
  CollectionDone,
  collectionItem,
} from "@/components/CollectionCards";
import Link from "next/link";
import DeleteBtn from "@/DeleteBtn";
import { NFTProps, NFTCard } from "@/components/NFTCards";
import collectionImg from "/public/collection.png";

const nfts: NFTProps[] = new Array(12).fill({
  id: "dataId",
  title: "Collection Name",
  name: "collection",
  creator: "liuq",
  desc: "Automatically listed on Opensea immediatelyafter collection created",
  logo: collectionImg,
  collectionId: 1
});

const Collections = () => {
  return (
    <div className="grid grid-cols-4 gap-4 py-8">
      {nfts.map((card) => (
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
