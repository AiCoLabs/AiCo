"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormInfo from "./components/FormInfo";
import FormSocial from "./components/FormSocial";
import FormSetting from "./components/FormSetting";
import { useCallback, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { AICOO_PROXY_ADDRESS, AICOO_WEBSITE, FEE_DERIVIED_MODULE_ADDRESS, FREE_DERIVIED_MODULE_ADDRESS } from "@/lib/constants";
import { AI_COO_ABI } from "@/abis/AiCooProxy";
import { useContractWrite } from "wagmi";
import { storeBlob, storeCar } from "@/lib/uploadToStorage";
import { trimify } from "@/lib/utils";
import { ethers } from 'ethers'
import { useRouter } from "next/navigation";

const CreateCollection = () => {
  const abiCoder = new ethers.AbiCoder() 
  const router = useRouter()
  const [tabValue, setTabValue] = useState("Collections");
  const [status, setStatus] = useState({buttonText: 'Create Collection',loading: false})
  const [collectionInfo, setCollectionInfo] = useState<{
    name: string|undefined,
    description?: string|undefined,
    category?: string|undefined,
    file?: File|undefined}>({name:''})
  const [socialInfo, setSocialInfo] = useState<{ website?: string|undefined,
    twitter?: string|undefined,
    telegram?: string|undefined,
    medium?: string|undefined,
    discord?: string|undefined}>({})
  const [settingInfo, setSettingInfo] = useState<{limit: string|undefined,
      royalty: string|undefined,
      endTime: Date|undefined,
      isCharge: boolean|undefined,
      currency: string|undefined,
      price: number|undefined,
      receiptAddress: string|undefined,
      isSupportWhiteList: boolean|undefined,
      whiteList: File|undefined}|null>(null)

  const { write: writeContract } = useContractWrite({
    address: AICOO_PROXY_ADDRESS,
    abi: AI_COO_ABI,
    functionName: 'createNewCollection',
    // mode: 'recklesslyUnprepared',
    onSuccess: (data) => {
      console.log('onSuccess data', data)
      setStatus({
        buttonText: 'Create collection',
        loading: false
      })
      router.push('/AIWork')
    },
    onError: (error)=>{
      console.log('onError error', error)
      setStatus({
        buttonText: 'Create collection',
        loading: false
      })
    },
  })

  const uploadImageToIpfs = async (settingInfo) => {
    if (collectionInfo.file){
      setStatus({
        buttonText: `Uploading to IPFS`,
        loading: true
      })
      const reader = new FileReader();
      reader.addEventListener('load', async () => {
        if (reader.result){
          const result = await storeCar(new Blob([reader.result]))
          const url = 'ipfs://' + result
          return await createPublication(url, settingInfo)
        }
        
      });
      reader.readAsArrayBuffer(collectionInfo.file);
    }
  }

  const createPublication = async (imageSource: string, settingInfo) => {
    try {
      setStatus({
        buttonText: `Storing metadata`,
        loading: true
      })
      const media = [
        {
          item: imageSource,
          type: collectionInfo.file?.type || 'image/png',
          cover: imageSource
        }
      ]
      const attributes = []
      const metadata = {
        description: trimify(collectionInfo.description||''),
        content: trimify(
          `I'm create a fantasitic collection on Aicoo(A decentralized co-create platform).\nShow your creativity in collaboration.\nLet's jump in...\n${AICOO_WEBSITE}/AIWork`
        ),
        mainContentFocus: 'IMAGE',
        external_link: `${AICOO_WEBSITE}`,
        image: imageSource,
        name: trimify(collectionInfo.name||''),
        attributes,
        media
      }

      console.log('metadata',metadata)
      let metadataUri = await await storeBlob(JSON.stringify(metadata))
      metadataUri = 'ipfs://' + metadataUri
      console.log('metadataUri', metadataUri)
      setStatus({
        buttonText: `Posting image`,
        loading: true
      })
      
      let isFee = settingInfo?.isCharge
      let derivedRuleModule = isFee ? FEE_DERIVIED_MODULE_ADDRESS: FREE_DERIVIED_MODULE_ADDRESS
      let derivedRuleModuleInitData = isFee ? abiCoder.encode(['uint256','uint256','uint256','address' ,'address'],[
        settingInfo?.limit, 
        1693493754, //(settingInfo?.endTime?.getTime() || 0)/ 1000 , 
        settingInfo?.price,
        settingInfo?.currency, 
        settingInfo?.receiptAddress]) : abiCoder.encode(['uint256','uint256'],[
          settingInfo?.limit, 
          1693493754]) //(settingInfo?.endTime?.getTime() || 0)/ 1000 ])           
      const args = [
        parseFloat(settingInfo?.royalty||'0') * 100,
        parseInt(collectionInfo.category|| '0'),
        metadataUri,
        collectionInfo.name,
        collectionInfo.name,
        derivedRuleModule,
        derivedRuleModuleInitData
      ]
      console.log('writeContract args', args)
      return  writeContract?.({ args: [args]})
    } catch (e){
      console.error('e',e) 
      setStatus({
        buttonText: `Create collection`,
        loading: false
      })
    }
  }


  const next = (info: any)=>{
    if (tabValue === 'Collections'){
      setCollectionInfo(info)
      setTabValue('Social')
    }else if (tabValue === 'Social'){
      setSocialInfo(info)
      setTabValue('Setting')
    }else if (tabValue === 'Setting') {
      setSettingInfo(info)
      uploadImageToIpfs(info)
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
            <FormSetting next={next} defaultValue={settingInfo} status={status}/>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CreateCollection;
