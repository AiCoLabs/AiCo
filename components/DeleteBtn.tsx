'use client'
import { NewNFTCreateds } from "@/lib/type";
import { CollectionProps } from "./CollectionCards";
import { Trash2Icon } from "lucide-react";
import { useContractWrite } from "wagmi";
import { AI_COO_ABI } from "@/abis/AiCooProxy";
import { AICOO_PROXY_ADDRESS } from "@/lib/constants";

const DeleteButton = (props: { data: NewNFTCreateds }) => {
  const { data } = props;
  const { write: writePostContract } = useContractWrite({
    address: AICOO_PROXY_ADDRESS,
    abi: AI_COO_ABI,
    functionName: 'limitBurnTokenByCollectionOwner',
    onSuccess: (data) => {
      console.log('onSuccess data', data)
    },
    onError: (error) => {
      console.log('onError error', error)
    }
  })
  const deleteNFT = ()=>{
    console.log('deleteNFT', data.collectionId, data.tokenId)
    writePostContract?.({args: [[data.collectionId, data.tokenId]]})
  }
  return (
    <div className="p-[2px] flex justify-center items-center gap-1 deleteBtn-bg text-black rounded-sm">
      <Trash2Icon className="w-4 h-4" />
      <div onClick={deleteNFT}>Delete</div>
    </div>
  );
};

export default DeleteButton;
