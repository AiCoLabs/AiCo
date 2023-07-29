import Image from "next/image";
import type { StaticImageData } from "next/image";
import UserAvatar from "./UserAvatar";
import collectionImg from "/public/collection.png";
import Link from "next/link";
import { cn } from "@/lib/utils";

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
  data: NFTProps;
  children?: React.ReactNode;
  className?: string;
}

// Generate by stable_diffusion
export const NFTCard = (props: CardProps) => {
  const { data } = props;
  return ( 
    <div className={cn("w-[15.18125rem] h-[18.75rem] relative", props.className)}>
      <Image src={data.logo} alt="card" fill />
      {props.children}
    </div>
  )
};
