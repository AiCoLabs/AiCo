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
      id
      collInfoURI
      collectionId
      collectionOwner
      derivedRuleModule
      derivedCollectionAddr
    }    
  }
`



export const newNFTCreatedsDoc = gql`
  query getNewNFTCreateds ($collectionId: String!){
    newNFTCreateds(where: {collectionId: $collectionId}) {
      id
      nftInfoURI
      collectionId
      derivedFrom
      tokenId
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

export const getNewCollectionCreated = async (size:number, offset:number)=>{
  let response: {data: {newCollectionCreateds: NewCollectionCreateds[]}} = await client.query({query: newCollectionCreatedsDoc})
  console.log('getNewCollectionCreated response',response)
  let collections = await Promise.all(response.data.newCollectionCreateds.map(async (collection: NewCollectionCreateds) => {
    if(parseInt(collection.collectionId) < 8) return
    let url = sanitizeDStorageUrl(collection.collInfoURI);
    let json: any = await getReq(url)
    return {...collection, detailJson: json}
  }))
  console.log('collections',collections, collections.filter((item)=>!!item))
  return collections.filter((item)=>!!item)
}

export const getNewNFTCreateds = async( collectionId: string, size:number, offset:number)=>{
  let response: {data: {newNFTCreateds: NewNFTCreateds[]}} = await client.query({
      query: newNFTCreatedsDoc, 
      variables: { collectionId }
    })
  console.log('getNewNFTCreateds response',response, collectionId)
  let collections = await Promise.all(response.data.newNFTCreateds.map(async (collection: NewNFTCreateds) => {
    let url = sanitizeDStorageUrl(collection.nftInfoURI);
    let json: any = await getReq(url)
    return {...collection, detailJson: json}
  }))
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