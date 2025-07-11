"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Edit = ({ params }) => {
  const router = useRouter();
  const paramsData = React.use(params); // unwrap the params Promise
  const recipeId = paramsData.id;

  const [data, setData] = useState({
    name: "",
    subname: "",
    description: ""
  });

  // Fetch recipe data on client side after mount
  useEffect(() => {
    const fetchSingleRecipe = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/recipe/${recipeId}`);
        if (!response.ok) throw new Error("Failed to fetch recipe");
        const result = await response.json();
        if (result.data && result.data.length > 0) {
          setData({
            name: result.data[0].name || "",
            subname: result.data[0].subname || "",
            description: result.data[0].description || ""
          });
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
      } finally {
      }
    };

    fetchSingleRecipe();
  }, [recipeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/recipe/${recipeId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Error in updating recipe");
        return;
      }

      alert("Recipe updated successfully");
      router.push("/");
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      <div className="mt-10 text-center font-bold">Edit Recipe</div>
      <div className="mt-3 text-center text-4xl font-bold">Keep creating recipe...</div>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="p-8">
          <div className="flex gap-4">
            <input
              value={data.name}
              onChange={handleChange}
              type="text"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Name of recipe"
            />
            <input
              value={data.subname}
              onChange={handleChange}
              type="text"
              name="subname"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Subname of recipe"
            />
          </div>

          <div>
            <textarea
              value={data.description}
              onChange={handleChange}
              name="description"
              cols={30}
              rows={10}
              className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300"
              placeholder="Description"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
            >
              Edit Recipe
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
