import { eq } from "drizzle-orm";
import { db } from "../../../../db/db"
import { recipes } from "../../../../db/schema"

//Get single recipe by id
export async function GET(request, urlData) {
    const id = urlData.params.id * 1
    try {
        const data = await db.select().from(recipes).where(eq(recipes.id, id))
        if (data.length === 0) {
            return Response.json({
                message: "Recipe not found"
            }, { status: 404 });
        }
        return Response.json({
            message: "Hello from the recipe API!",
            data
        }, { status: 200 });
    } catch (error) {
        return Response.json({
            message: error.message
        }, { status: 500 });
    }
}

//Delete the recipe
export async function DELETE(request, urlData) {
    const id = urlData.params.id * 1
    try {
        const data = await db.select().from(recipes).where(eq(recipes.id, id))
        if (data.length === 0) {
            return Response.json({
                message: "Recipe not found"
            }, { status: 404 });
        }
        await db.delete(recipes).where(eq(recipes.id, id));
        return Response.json({
            message: "Recipe deleted successfully"
        }, { status: 200 });
    } catch (error) {
        return Response.json({
            message: error.message
        }, { status: 500 });
    }
}

//Edit the recipe
export async function PATCH(request, urlData) {
    const id = urlData.params.id * 1
    try {
        const data = await db.select().from(recipes).where(eq(recipes.id, id))
        if (data.length === 0) {
            return Response.json({
                message: "Recipe not found"
            }, { status: 404 });
        }

        const updateData = await request.json();
        await db.update(recipes).set(updateData).where(eq(recipes.id, id));

        return Response.json({
            message: "Recipe updated successfully"
        }, { status: 200 });
    } catch (error) {
        return Response.json({
            message: error.message
        }, { status: 500 });

    }
}