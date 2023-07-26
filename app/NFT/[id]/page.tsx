import { CollectionProps, collectionItem } from "@/components/CollectionCards";
import Image from "next/image";
import { Share2 } from "lucide-react";
import Button from "@/components/Button";
import Link from "next/link";

const Nft = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container mx-auto">
      <div className="border-b-2 border-[#D9D9D9] mt-2"></div>
      <div className="grid grid-cols-2 gap-14 text-lg text-white mt-14">
        <div>
          <Image
            className="w-full h-[37.68rem]"
            src={collectionItem.logo}
            alt="card"
          />
          <div className="flex gap-4 mt-4">
            <div className="text-white-rgba">Collection initialed by:</div>
            <div className="text-green-700">0x32d3</div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-[#4DA4B0]">Collection Name</div>
            <Share2 />
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="text-2xl font-medium">NFT Name</div>
            <div className="flex justify-between gap-2">
              <div>created by</div>
              <div className="text-green-700">0x32d3</div>
            </div>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div className="flex justify-between gap-2">
              <div className="text-white-rgba">Owned by</div>
              <div className="text-green-700">0x32d3</div>
            </div>
            <div className="flex justify-between gap-2">
              <div className="text-white-rgba">Fork from</div>
              <div className="text-green-700">nft-name</div>
            </div>
          </div>
          <div className="mt-8">Inspiration:</div>
          <div className="mt-4 break-all">
            CInspirationCInspirationCInspirationCInspirationCInspirationCInspirationCInspirationCInspirationCInspiration
          </div>
          <div className="flex gap-8 mt-24">
            <Button className="bg-yellow-rgba text-black">
              View on OpenSea
            </Button>
            <Link href={"/Create"}>
              <Button>Fork</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft;
