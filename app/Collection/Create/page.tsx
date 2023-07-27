"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormInfo from "./components/FormInfo";
import FormSocial from "./components/FormSocial";
import FormSetting from "./components/FormSetting";
import { useCallback, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { boolean, number, z } from "zod";

const CreateCollection = () => {
  const [tabValue, setTabValue] = useState("Collections");
  const [collectionInfo, setCollectionInfo] = useState<{
    name: string|undefined,
    description?: string|undefined,
    category?: string|undefined,
    file: string|undefined}>({name:'',file:''})
  const [socialInfo, setSocialInfo] = useState<{ website?: string|undefined,
    twitter?: string|undefined,
    telegram?: string|undefined,
    medium?: string|undefined,
    discord?: string|undefined}>({})
  const [settingInfo, setSettingInfo] = useState<{limit: number|undefined,
      royalty: number|undefined,
      endTime: Date|undefined,
      isCharge: boolean|undefined,
      currency: string|undefined,
      price: number|undefined,
      receiptAddress: string|undefined,
      isSupportWhiteList: boolean|undefined,
      whiteList: string|undefined}|null>(null)

  const createNewCollection = ()=>{}

  const next = (info: any)=>{
    if (tabValue === 'Collections'){
      setCollectionInfo(info)
      setTabValue('Social')
    }else if (tabValue === 'Social'){
      setSocialInfo(info)
      setTabValue('Setting')
    }else if (tabValue === 'Setting') {
      setSettingInfo(info)
      createNewCollection()
    }
  }
  
  
  return (
    <div className="container mx-auto var-dark">
      <Separator className="my-6" />
      <Tabs
        className="flex gap-4 mt-8"
        value={tabValue}
        onValueChange={setTabValue}
      >
        <TabsList
          className="flex-col justify-start bg-transparent text-xl text-white"
        >
          <TabsTrigger value="Collections">Collection Info</TabsTrigger>
          <TabsTrigger value="Social" disabled={tabValue == 'Collections'? true : false}>Social Link</TabsTrigger>
          <TabsTrigger value="Setting" disabled={(tabValue == 'Collections' || tabValue == 'Social')?true: false}>Config Setting</TabsTrigger>
        </TabsList>
        <div
          className="flex-1 text-white text-2xl bg-indigo-500 p-3 rounded-2xl "
        >
          <TabsContent value="Collections">
            <FormInfo next={next} defaultValue={collectionInfo}/>
          </TabsContent>
          <TabsContent value="Social">
            <FormSocial next={next} defaultValue={socialInfo}/>
          </TabsContent>
          <TabsContent value="Setting">
            <FormSetting next={next} defaultValue={settingInfo}/>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CreateCollection;
