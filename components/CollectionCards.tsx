import Image from "next/image";
import type { StaticImageData } from "next/image";
import UserAvatar from "./UserAvatar";
import collectionImg from "/public/collection.png";
import Link from "next/link";
import { cn, sanitizeDStorageUrl } from "@/lib/utils";
import { NFTInfoProps, NewCollectionCreateds, NewNFTCreateds } from "@/lib/type";

export interface CollectionProps {
  name: string;
  id: string;
  creator: string;
  title: string;
  desc: string;
  logo: string | StaticImageData;
}
export const collectionItem = {
  id: "dataId",
  title: "Collection Name",
  name: "collection",
  creator: "liuq",
  desc: "Automatically listed on Opensea immediately after collection created",
  logo: collectionImg,
};

interface CardProps {
  data?: NewCollectionCreateds;
  sampleData?: NewNFTCreateds;
  children?: React.ReactNode;
  className?: string;
}
interface NFTCardProps {
  sampleData: NFTInfoProps;
  children?: React.ReactNode;
  className?: string;
}

// banner random select collectionCard
export const CollectionRandom = (props: NFTCardProps) => {
  const { sampleData } = props;
  return (
    <Link href={`/NFT/${sampleData.belongToCollectionId}`}>
      <>
        <img className="w-full h-full rounded-2xl overflow-hidden object-cover" src={sanitizeDStorageUrl(sampleData.imageUrl)} alt="card"  />
        <div className="absolute inset-x-0 bottom-0 h-10 bg-white bg-opacity-30 px-4 rounded-bl-2xl rounded-br-2xl overflow-hidden">
          <div className="flex justify-between items-center text-xs h-full">
            <div>{sampleData.nftName}</div>
            <UserAvatar data={sampleData} className={"w-5 h-5"} />
          </div>
        </div>
      </>
    </Link>
  );
};

// live Collection
export const CollectionIng = (props: CardProps) => {
  const { sampleData } = props;
  return sampleData ? (
    <Link href={`/Collection/${sampleData.id}`}>
      <div className={`text-white w-64`}>
        <div className="w-64 h-[28.9375rem] relative rounded-[30px] overflow-hidden">
          <Image src={sampleData.logo} alt={sampleData?.title} />
        </div>
        <div className="flex gap-4 mt-5">
          <Image
            className="rounded-2xl h-20 w-20"
            src={sampleData.logo}
            width={75}
            height={75}
            alt="card"
          />
          <div className="text-xl">
            <div className="mb-2">Collection Name</div>
            <UserAvatar data={sampleData} />
          </div>
        </div>
      </div>
    </Link>
  ) : (
    <></>
  );
};

// finshed collection
export const CollectionDone = (props: CardProps) => {
  const { data } = props;
  return (
    <div
      className={cn("w-[15.18125rem] h-[18.75rem] relative", props.className)}
    >
      <img src={data?.detailJson.image} alt="card" />
      {props.children}
    </div>
  );
};

// finshed collection
export const CollectionNFTDone = (props: CardProps) => {
  const { sampleData } = props;
  return sampleData ? (
    <div
      className={cn("w-[15.18125rem] h-[18.75rem] relative", props.className)}
    >
      <Image src={sampleData.logo} alt="card" />
      {props.children}
    </div>
  ) : (
    <></>
  );
};
