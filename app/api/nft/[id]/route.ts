import ForkNFT from "@/models/mintnft";
import { connectToDB } from "@/lib/mongodb";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const nftInfo = await ForkNFT.findById(params.nftId)
        if (!nftInfo) return new Response("nftInfo Not Found", { status: 404 });

        return new Response(JSON.stringify(nftInfo), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}