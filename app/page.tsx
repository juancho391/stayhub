"use client";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ApartmentCard from "./components/ApartmentCard";
import axios from "axios";
import { Lodging } from "@/context/type";
import { useState, useEffect } from "react";
export default function Home() {
  const [lodgins, setlodgins] = useState<Lodging[]>([]);

  const obtener_lodgings = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/lodging/`);
      if (response.status === 200) {
        console.log(response.data);
        setlodgins(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtener_lodgings();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="h-64 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold">
            Encuentra tu lugar perfecto
          </h1>
          <p className="text-white text-lg mt-2">
            Descubre alojamientos únicos en todo el mundo
          </p>
        </div>
      </div>
      <SearchBar />

      <section className="container mx-auto px-4 py-8 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Alojamientos disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lodgins.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </section>
    </div>
  );
}
