import { NFTCard } from "@/components/NFTCards";
import { NewNFTCreateds } from "@/lib/type";

interface NFTCollectionsProps {
  dataSource: NewNFTCreateds[];
}

const NFTCollections = ({ dataSource = [] }: NFTCollectionsProps) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 p-4 mt-8 border">
      {dataSource?.map((card, index) => (
        <NFTCard data={card} key={index} />
      ))}
    </div>
  )
}

export default NFTCollections
