import CreateCollection from "@/models/createcollection";
import { connectToDB } from "@/lib/mongodb";

export const GET = async (request) => {
    try {
        await connectToDB()

        const collections = await CreateCollection.find({})

        return new Response(JSON.stringify(collections), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({error: "Failed to fetch all prompts"}), { status: 500 })
    }
} 