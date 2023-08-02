import { NewNFTCreateds } from '@/lib/type';
import { getReq } from './server/abstract';

export const getNewCollectionCreated = async (size?:number, offset?:number)=>{
  let response = await getReq('/api/collection')
  return response
}

export const getNewNFTCreatedByCollectionId = async( collectionId: string)=>{
  let response = await getReq(`/api/collection/${collectionId}`)
  return response
}

export const getNewNFTCreateds = async( collectionId: string)=>{
  let response = await getReq(`/api/nft/${collectionId}`)
  return response
}

export const getMongoNFTById = async( collectionId: string, tokenId: string)=>{
  let response: Array<any> = await getReq(`/api/nft`)
  let item = response?.filter((item)=>{
    if (item.belongToCollectionId == collectionId && item.tokenId == tokenId){
      return true
    }
    return false
  })
  console.log('response', response, 'item', item)
  return item?.[0]
}
export const getAllNFTCreateds = async<T>():Promise<T>=>{
  let response = await getReq<T>(`/api/nft`)
  return response
}

