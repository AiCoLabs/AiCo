import ForkNFT from "@/models/mintnft";
import { connectToDB } from "@/lib/mongodb";

export const POST = async (request) => {
    const { nftName, belongToCollectionId, nftCreator, nftOwner, forkFrom, prompt, nagativePrompt, imageUrl } = await request.json();

    try {
        await connectToDB();
        const tokenId = await ForkNFT.countDocuments({belongToCollectionId})
        const newForkNft = new ForkNFT({ nftName, belongToCollectionId, nftCreator, nftOwner, forkFrom, prompt, nagativePrompt, imageUrl, tokenId});
        await newForkNft.save();
        return new Response(JSON.stringify({message :"create collection successful."}), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({error:"Failed to create a new prompt"}), { status: 500 });
    }
}