import { StaticImageData } from "next/image";

export type DetailJson = {
    description: string
    content: string
    external_link: string
    image: string
    name: string,
    attributes: []
}

export type CollectionProps = {
  id: string
  collInfoURI: string
  collectionId: string
  collectionOwner: string
  derivedRuleModule: string
  derivedCollectionAddr: string
  detailJson: DetailJson
}

export type NFTProps= {
  id: string
  nftInfoURI: string
  collectionId: string
  derivedFrom: string
  tokenId: string
  profileId: string
  detailJson: DetailJson
}