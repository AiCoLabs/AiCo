import ForkNFT from "@/models/mintnft";
import { connectToDB } from "@/lib/mongodb";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()
        const nftInfo = await ForkNFT.findOne({belongToCollectionId: params.belongToCollectionId, tokenId: parseInt(params.tokenId)})
        
        if (!nftInfo) return new Response(JSON.stringify({error: "nftInfo Not Found"}), { status: 404 });
        return new Response(JSON.stringify(nftInfo), { status: 200 })

    } catch (error) {
        return new Response(JSON.stringify({error:"Internal Server Error"}), { status: 500 });
    }
}