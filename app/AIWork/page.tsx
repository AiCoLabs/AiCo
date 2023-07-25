import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CollectionCards from "./collections";
import NftCards from "./nfts";
const AiWork = () => {
  return (
    <div className="container mx-auto">
      <div className="border-b-2 border-[#D9D9D9] mt-7"></div>
      <Tabs defaultValue="Collections" className="mt-12">
        <TabsList className="bg-transparent text-xl text-white">
          <TabsTrigger value="Collections">Collections</TabsTrigger>
          <TabsTrigger value="NFTs">NFTs</TabsTrigger>
        </TabsList>
        <div className="border-b-2 border-[#D9D9D9] mt-6 mb-16"></div>
        <TabsContent value="Collections">
          <CollectionCards />
        </TabsContent>
        <TabsContent value="NFTs">
          <NftCards />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AiWork