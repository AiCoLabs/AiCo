export type DetailJson = {
    description: string
    content: string
    external_link: string
    image: string
    name: string,
    attributes: []
}


export type NewCollectionCreateds = {
  id: string
  baseRoyalty: number
  blockNumber: number
  blockTimestamp: number
  collInfoURI: string
  collectionId: string
  collectionOwner: string
  collectionType: string
  derivedRuleModule: string
  derivedCollectionAddr: string
  timestamp: string
  transactionHash: string
  detailJson: DetailJson
}

export type NewNFTCreateds = {
  id: string
  blockNumber: number
  blockTimestamp: number
  nftInfoURI: string
  collectionId: string
  derivedFrom: string
  tokenId: string
  transactionHash: string
  detailJson: DetailJson

}

export type CollectionIdQueryRequest = {
/** The collection id */
  collectionId: string
}
