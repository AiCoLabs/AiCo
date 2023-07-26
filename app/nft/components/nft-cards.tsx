import { CollectionProps, NFTCard } from "@/components/CollectionCards";

interface NFTCollectionsProps {
  dataSource: CollectionProps[];
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
