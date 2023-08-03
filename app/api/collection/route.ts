import CreateCollection from "@/models/createcollection";
import { connectToDB } from "@/lib/mongodb";

export const GET = async (request, { params = {} }) => {
    try {
        await connectToDB()

        const collections = await CreateCollection.find(params)

        return new Response(JSON.stringify(collections), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: "Failed to fetch all prompts" }), { status: 500 })
    }
} 