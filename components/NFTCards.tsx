import Image from "next/image";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { NewNFTCreateds } from "@/lib/type";

export interface NFTProps {
  name: string;
  id: string;
  creator: string;
  title: string;
  desc: string;
  logo: string | StaticImageData;
  collectionId: string;
}


interface CardProps {
  data: NewNFTCreateds;
  children?: React.ReactNode;
  className?: string;
}

// Generate by stable_diffusion
export const NFTCard = (props: CardProps) => {
  const { data } = props;
  return ( 
    <div className={cn("w-[15.18125rem] h-[18.75rem] relative", props.className)}>
      <img src={data.detailJson.image} alt="card" />
      {props.children}
    </div>
  )
};
