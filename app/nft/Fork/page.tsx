import { Separator } from "@/components/ui/separator";
import NftBaseForm from "../components/nft-baseform";

export default function ForkNFT() {
  return (
    <div className="container mx-auto var-dark">
      <Separator className="my-6" />
      <div className="flex-1 text-white text-2xl bg-indigo-500 p-3 rounded-2xl mt-32">
        <NftBaseForm type="ForkImage" className="w-2/3" />
      </div>
    </div>
  );
}
