import { NFTProps, NFTCard } from "@/components/NFTCards";

interface NFTCollectionsProps {
  dataSource: NFTProps[];
}

const NFTCollections = ({ dataSource = [] }: NFTCollectionsProps) => {
  return (
    <div className="grid grid-cols-2 justify-items-center gap-4 p-4 mt-8 border">
      {dataSource?.map((card) => (
        <NFTCard data={card} key={card.id} />
      ))}
    </div>
  );
};

export default NFTCollections;
