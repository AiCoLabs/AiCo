import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import { getReq } from './server/abstract';
import { sanitizeDStorageUrl } from '@/lib/utils';
import { NewCollectionCreateds, NewNFTCreateds } from '@/lib/type';

const API_URL = 'https://api.studio.thegraph.com/query/50436/aicoo_subgraph/version/latest';

/* create the API client */
export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})


/* define a GraphQL query  */
export const newCollectionCreatedsDoc = gql`
  query newCollectionCreateds {
    newCollectionCreateds {
      baseRoyalty
      blockNumber
      blockTimestamp
      collInfoURI
      collectionId
      collectionOwner
      collectionType
      derivedCollectionAddr
      derivedRuleModule
      id
      timestamp
      transactionHash
    }    
  }
`

export const newCollectionCreatedByIdDoc = gql`
  query newCollectionCreateds ($collectionId: String!){
    newCollectionCreateds(where: {collectionId: $collectionId}) {
      baseRoyalty
      blockNumber
      blockTimestamp
      collInfoURI
      collectionId
      collectionOwner
      collectionType
      derivedCollectionAddr
      derivedRuleModule
      id
      timestamp
      transactionHash
    }    
  }
`


export const newNFTCreatedsDoc = gql`
  query getNewNFTCreateds ($collectionId: String!){
    newNFTCreateds(where: {collectionId: $collectionId}) {
      blockNumber
      blockTimestamp
      collectionId
      derivedFrom
      id
      nftInfoURI
      tokenId
      transactionHash
    }    
  }
`

export const newCollectionMintInfosDoc = gql`
  query newCollectionMintInfos ($id: String!){
    newCollectionMintInfos(id: $id) {
      id
      mintExpired
      mintLimit
      mintPrice
    }    
  }
`

const parseCollectionDetailJson = async (collInfoURI: string) =>{
    let url = sanitizeDStorageUrl(collInfoURI);
    let json: any = await getReq(url)
    if (json.image) json.image = sanitizeDStorageUrl(json.image);
    return json
}

export const getNewCollectionCreated = async (size?:number, offset?:number)=>{
  let response: {data: {newCollectionCreateds: NewCollectionCreateds[]}} = await client.query({query: newCollectionCreatedsDoc})
  console.log('getNewCollectionCreated response',response)
  let collections = await Promise.all(response.data.newCollectionCreateds.map(async (collection: NewCollectionCreateds) => {
    let json = await parseCollectionDetailJson(collection.collInfoURI)
    return {...collection, detailJson: json}
  }))
  return collections.filter((item)=>!!item)
}

export const getNewNFTCreatedByCollectionId = async( collectionId: string)=>{
  let response: {data: {newCollectionCreateds: NewCollectionCreateds[]}} = await client.query({
      query: newCollectionCreatedByIdDoc, 
      variables: { collectionId }
    })
  let collections = await Promise.all(response.data.newCollectionCreateds.map(async (collection: NewCollectionCreateds) => {
    let json = await parseCollectionDetailJson(collection.collInfoURI)
    return {...collection, detailJson: json}
  }))
  return collections?.[0]
}

export const getNewNFTCreateds = async( collectionId: string)=>{
  let response: {data: {newNFTCreateds: NewNFTCreateds[]}} = await client.query({
      query: newNFTCreatedsDoc, 
      variables: { collectionId }
    })
  console.log('getNewNFTCreateds response',response)
  let collections = await Promise.all(response.data.newNFTCreateds.map(async (collection: NewNFTCreateds) => {
    let url = sanitizeDStorageUrl(collection.nftInfoURI);
    let json: any = await getReq(url)
    if (json?.image) json.image = sanitizeDStorageUrl(json.image);
    return {...collection, detailJson: json}
  }))
  console.log('getNewNFTCreateds response',collections)
  return collections
}

export const getNewCollectionMintInfo = async( id: string)=>{
  let response: {data: {newCollectionMintInfos: {}}} = await client.query({
      query: newCollectionMintInfosDoc, 
      variables: { id }
    })
  console.log('getNewCollectionMintInfo response',response) 
  return response
}