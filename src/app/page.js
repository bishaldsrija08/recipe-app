import Card from "./components/card";

const fetchRecipes = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/recipe", {
      cache: "no-store"
    })
    if (!response.ok) {
      throw new Error("Failed to fetch recipe")
    }
    return response.json()
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];

  }
}

export default async function Home() {

  const { data } = await fetchRecipes()
  console.log(data)

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {
        data.map((recipe) => {
          return (
            <Card key={recipe.id} recipe={recipe} />
          )
        })
      }
    </div>
  )
}