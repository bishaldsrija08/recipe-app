import Link from "next/link"

const Card = ({ recipe }) => {
    console.log(recipe)
    return (
        <Link href='/1' className="hover:shadow-lg transition-shadow duration-300 ease-in-out">

            <div className="flex px-3 py-3">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://picsum.photos/201" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{recipe?.name}</div>
                        <p className="text-gray-700 text-base">
                            {recipe?.description}
                        </p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{recipe.subname}</span>
                        <br />
                        <br />
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Created at: {new Date(recipe?.createdat).toISOString().split("T")[0]}</span>
                        <br />
                        <br />
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Updated at: {new Date(recipe?.updatedat).toISOString().split("T")[0]}</span>
                    </div>
                </div>
            </div></Link>
    )
}

export default Card
