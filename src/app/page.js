"use client"
import axios from "axios";
import Card from "./components/card";
import { useEffect } from "react";

export default function Home() {
  //Fetch data from the API
  const fetchApi = async () => {
    const respose = await axios.get("http://localhost:3000/api/recipe")
    console.log(respose.data[0])
  }
  useEffect(
    () => {
      fetchApi()
    }, []
  )
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}