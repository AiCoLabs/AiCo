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
  let response = await getReq(`/api/nft/${collectionId}/${tokenId}`)
  return response
}
export const getAllNFTCreateds = async<T>():Promise<T>=>{
  let response = await getReq<T>(`/api/nft`)
  return response
}

