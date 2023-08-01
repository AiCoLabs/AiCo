import CreateCollection from "@/models/createcollection";
import { connectToDB } from "@/lib/mongodb";

export const POST = async (request) => {
    const { collectionName, collectionDesc, creator, collectionId, category, logoImage, website, twitter, telegram, medium, discord, mintLimit, royalty, endTime, bCharge, mintPrice, currency, receiptAddress, bWhitelist, whitelistRootHash } = await request.json();

    try {
        await connectToDB();
        const newCollection = new CreateCollection({ collectionName, collectionDesc, creator, collectionId, category, logoImage, website, twitter, telegram, medium, discord, mintLimit, royalty, endTime, bCharge, mintPrice, currency, receiptAddress, bWhitelist, whitelistRootHash });

        await newCollection.save();
        return new Response("create collection successful.", { status: 200 })
    } catch (error) {
        return new Response("Failed to create a new prompt", { status: 500 });
    }
}