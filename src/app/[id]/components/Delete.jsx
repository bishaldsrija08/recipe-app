"use client"
const DeleteButton = ({ recipeId }) => {
    const handleDelete = async () => {
        const response = await fetch('http://localhost:3000/api/recipe' + recipeId, {
            method: "DELETE"
        })
        if (!response.ok) {
            throw new Error('Failed to delete recipe');
        }
        alert("Recipe deleted successfully");
    }
    return (
        <div className="mt-8">
            <button className="bg-red-900 text-gray-100 px-5 py-3 font-semibold rounded" onClick={handleDelete}>Delete Recipe</button>
        </div>
    )
}

export default DeleteButton