'use client'
import NftBaseForm from "../../components/nft-baseform";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import OwnImageToNFT from "../components/useownimage";

export default function CreatNFT({ params }: { params: { id: string } }) {
  const [tabValue, setTabValue] = useState("TextToImage");

  return <div className="container mx-auto var-dark">
      <Separator className="my-6" />
      <Tabs
        className="flex gap-4 mt-8"
        value={tabValue}
        onValueChange={setTabValue}
      >
        <TabsList
          className="flex-col justify-start bg-transparent text-xl text-white"
        >
          <TabsTrigger value="TextToImage">Text To Image</TabsTrigger>
          <TabsTrigger value="ImageToImage" >Image To Image</TabsTrigger>
          <TabsTrigger value="UseOwnImage" >Use Own Image</TabsTrigger>
        </TabsList>
        <div
          className="flex-1 text-white text-2xl bg-indigo-500 p-3 rounded-2xl "
        >
          <TabsContent value="TextToImage">
            <NftBaseForm type="TextToImage" collectionId={params.id}/>
          </TabsContent>
          <TabsContent value="ImageToImage">
            <NftBaseForm type="ImageToImage" collectionId={params.id}/>
          </TabsContent>
          <TabsContent value="UseOwnImage">
            <OwnImageToNFT />
          </TabsContent>
        </div>
      </Tabs>
  </div>
  
}
