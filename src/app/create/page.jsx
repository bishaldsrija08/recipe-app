"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Create = () => {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    subname: "",
    description: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const response = await fetch("http://localhost:3000/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      console.log("error in creating recipie");
      return;
    }
    alert("Recipie created successfully");
    router.push("/");
  };

  return (
    <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
      <div className="mt-10 text-center font-bold">Create Recipie</div>
      <div className="mt-3 text-center text-4xl font-bold">Keep creating recipie...</div>
      <form onSubmit={handleSubmit} className="mt-10">
        <div className="p-8">
          <div className="flex gap-4">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Name of recipe"
            />
            <input
              onChange={handleChange}
              type="text"
              name="subname"
              className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="Subname of recipe"
            />
          </div>

          <div>
            <textarea
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
              Create Recipie
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Create;