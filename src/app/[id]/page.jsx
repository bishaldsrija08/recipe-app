import Link from 'next/link'
import React from 'react'
import DeleteButton from './components/Delete';

const fetchSingleRecipe = async (recipeId) => {
    try {
        const response = await fetch(`http://localhost:3000/api/recipe/${recipeId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch recipe');
        }
        const data = await response.json();
        return data.data[0]

    } catch (error) {
        console.error("Error fetching recipe:", error);
        return [];

    }
}

const Single = async ({ params }) => {
    const recipeId = params.id;
    const recipe = await fetchSingleRecipe(recipeId);

    return (
        <div className="px-2 py-20 w-full flex justify-center">
            <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
                <div className="lg:w-1/2">
                    <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg" style={{ backgroundImage: 'url("https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?cs=srgb&dl=pexels-julia-nagy-568948-1327838.jpg&fm=jpg")' }}>
                    </div>
                </div>
                <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
                    <h2 className="text-3xl text-gray-800 font-bold">
                        {recipe.name}
                        <span className="text-indigo-600"> {recipe.subname}</span>
                    </h2>
                    <p className="mt-4 text-gray-600">
                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        {recipe.description}
                    </p>
                    <div className="mt-6 flex items-center space-x-4">
                        <div className="mt-8">
                            <Link href={`/edit/${recipe.id}`} className="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Edit Recipe</Link>
                        </div>
                      <DeleteButton recipeId={recipe.id}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Single