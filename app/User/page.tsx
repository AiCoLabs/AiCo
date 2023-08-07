'use client'

import { useEffect, useState } from "react";
import { NewCollectionCreateds, NewNFTCreateds } from "@/lib/type";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useAccount } from "wagmi";
import NftCards from "./nfts";
import CollectionCards from "./collections";

const Collection = () => {

  const account = useAccount({
    onConnect: (data) => console.log('connected', data),
    onDisconnect: () => console.log('disconnected'),
  })

  return (
    <div className="container mx-auto">
      {/* <img
        src={collectionItes?.detailJson.image}
        alt=""
        style={{objectFit: 'cover'}}
        className="w-full h-56 -mb-32"
      />
      <div className="px-10 ">
        <img
          src={collectionItes?.detailJson.image}
          alt=""
          className="w-40 h-40"
        />
      </div> */}
      <Tabs defaultValue="Collections" className="mt-12">
        <TabsList className="bg-transparent text-xl text-white">
          <TabsTrigger value="Collections">Collections</TabsTrigger>
          <TabsTrigger value="NFTs">NFTs</TabsTrigger>
        </TabsList>
        <div className="border-b-2 border-[#D9D9D9] mt-6 mb-16"></div>
        <TabsContent value="Collections">
        <CollectionCards accountAddress={account.address} className="mt-4" />
        </TabsContent>
        <TabsContent value="NFTs">
          <NftCards accountAddress={account.address} />
        </TabsContent>
      </Tabs>

    </div>
  );
};

export default Collection;
