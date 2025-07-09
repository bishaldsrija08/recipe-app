import { db } from "../../../db/db"
import { recipes } from "../../../db/schema"

//get all recipes from recipe table
export async function GET() {
    const data = await db.select().from(recipes)
    return Response.json({
        message: "Data fetched successfully!",
        data
    }, { status: 200 })
}

//insert recipe to recipe table
export async function POST(request) {
    const data = await request.json()
    try {
        await db.insert(recipes).values(data)
        return Response.json({
            message: "Recipe created successfully!"
        })
    } catch (error) {
        return Response.json({
            message: "Error creating recipe",
            error: error.message
        }, { status: 500 })
    }
}