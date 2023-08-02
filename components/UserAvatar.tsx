import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CollectionProps } from "./CollectionCards";
import { NewCollectionCreateds, NFTInfoProps } from "@/lib/type";

const UserAvatar = (props: {
  data?: NFTInfoProps;
  created?: NewCollectionCreateds;
  className?: string;
}) => {
  const { data, created, className = "w-10 h-10" } = props;
  let logo;
  // if (data){
  //     logo = data.nftName
  // }else{
  //     logo = created?.detailJson.image
  // }
  // NFT doesn't has a logo
  logo = created?.detailJson.image;
  return (
    <div className="flex gap-2 items-center">
      <Avatar className={className}>
        <AvatarImage src={logo as string} />
        <AvatarFallback>{data?.nftName}</AvatarFallback>
      </Avatar>
      <div>{created?.collectionOwner}</div>
    </div>
  );
};

export default UserAvatar;
