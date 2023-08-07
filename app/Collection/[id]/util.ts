import { NewNFTCreateds } from "@/lib/type";

interface TreeData {
    tokenId: string
    name: string;
    children?: TreeData[]
    attibutes: NewNFTCreateds

}

const getNFTNode = (nft: NewNFTCreateds): TreeData => {
    return ({
        tokenId: nft.tokenId,
        name: nft.detailJson.name,
        attibutes: nft,
        children: []
    })

}
export const getTreeData = (arr: NewNFTCreateds[]): TreeData => {

    const root = arr.find(nft => nft.tokenId === "0")!

    const rootNode = getNFTNode(root)

    const findNFTChilldren = (nft: TreeData): TreeData => {
        const children = arr.filter(cur => cur.derivedFrom === nft.tokenId && nft.tokenId !== cur.tokenId);
        if (children?.length > 0) {
            nft.children = children?.map(nft => {
                const treeNode = getNFTNode(nft)
                return findNFTChilldren(treeNode)
            })
        }
        return nft
    }
    const result = findNFTChilldren(rootNode)
    return result
}
