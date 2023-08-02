import { Separator } from "@/components/ui/separator";
import NftBaseForm from "../../../../components/nft-baseform";

export default function ForkNFT({ params }: { params: { id: string, nftId: string, paramId: string } }) {
  const { id, nftId, paramId } = params
  return (
    <div className="container mx-auto var-dark">
      <Separator className="my-6" />
      <div className="flex-1 text-white text-2xl mt-8">
        <NftBaseForm type="ForkImage" className="w-2/3" collectionId={id} nftId={nftId} fromImageId={paramId}/>
      </div>
    </div>
  );
}
