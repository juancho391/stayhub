"use client";

import React, { useContext, useState } from "react";
import { LuHouse } from "react-icons/lu";
import { FaWifi, FaCar, FaUtensils, FaTv } from "react-icons/fa";
import { MdKitchen, MdAcUnit } from "react-icons/md";
import { GiForkKnifeSpoon } from "react-icons/gi";
import axios from "axios";
import { Context } from "@/context/context";
import { useRouter } from "next/navigation";
const AgregarAlojamiento: React.FC = () => {
  const { userProfileInfo } = useContext(Context);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tipo, setTipo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [precio, setPrecio] = useState("");
  const [detalles, setDetalles] = useState("");
  const [servicios, setServicios] = useState({
    wifi: false,
    cocina: false,
    aire: false,
    estacionamiento: false,
    television: false,
    desayuno: false,
  });
  const router = useRouter();

  const handleFormSubmit = async () => {
    console.log(userProfileInfo.id);
    const serviciosActivos = Object.entries(servicios)
      .filter(([_, value]) => value)
      .map(([name]) => name);
    try {
      const response = await axios.post("http://localhost:8000/lodging/", {
        title: titulo,
        description: descripcion,
        type: tipo,
        city: ubicacion,
        price_night: precio,
        propietario: userProfileInfo.id,
        characteristics: serviciosActivos,
        nearby_areas: [],
      });
      if (response.status === 200) {
        console.log("Creado con exito");
        console.log(response.data);
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const toggleServicio = (servicio: keyof typeof servicios) => {
    setServicios((prev) => ({ ...prev, [servicio]: !prev[servicio] }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <LuHouse className="text-pink-500 text-2xl" />
          <span className="font-bold text-lg text-black">StayHub</span>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-black hover:underline">
            Inicio
          </a>
          <a href="#" className="text-black hover:underline">
            Buscar
          </a>
        </nav>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="text-black hover:underline">
            Iniciar Sesión
          </a>
          <button className="bg-black text-white px-4 py-1.5 rounded-md hover:bg-gray-800">
            Registrarse
          </button>
        </div>
      </header>

      <div className="px-4 py-8 max-w-4xl mx-auto space-y-12">
        {/* Paso 1 */}
        <div>
          <div className="text-center mb-6">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
              1
            </div>
            <h2 className="text-xl font-semibold mt-2 text-black">
              Información Básica
            </h2>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 placeholder:text-gray-700 text-black"
              placeholder="Ej: Apartamento moderno en el centro"
            />
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 placeholder:text-gray-700 text-black"
              rows={4}
              placeholder="Describe tu alojamiento..."
            ></textarea>
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="w-full border rounded-md p-2 placeholder:text-gray-700 text-black"
            >
              <option value="">Selecciona el tipo</option>
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Habitación privada</option>
              <option>Otro</option>
            </select>
          </div>
        </div>

        {/* Paso 2 */}
        <div>
          <div className="text-center mb-6">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
              2
            </div>
            <h2 className="text-xl font-semibold mt-2 text-black">
              Ubicación y Precio
            </h2>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <input
              type="text"
              value={ubicacion}
              onChange={(e) => setUbicacion(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 placeholder:text-gray-700 text-black"
              placeholder="Ubicación exacta o aproximada"
            />
            <input
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="w-full border rounded-md p-2 placeholder:text-gray-700 text-black"
              placeholder="Precio por noche (USD)"
            />
          </div>
        </div>

        {/* Paso 3 */}
        <div>
          <div className="text-center mb-6">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
              3
            </div>
            <h2 className="text-xl font-semibold mt-2 text-black">Detalles</h2>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <textarea
              value={detalles}
              onChange={(e) => setDetalles(e.target.value)}
              className="w-full border rounded-md p-2 placeholder:text-gray-700 text-black"
              rows={4}
              placeholder="Más información sobre tu alojamiento, reglas, horarios, etc."
            ></textarea>
          </div>
        </div>

        {/* Paso 4 */}
        <div>
          <div className="text-center mb-6">
            <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center mx-auto font-bold">
              4
            </div>
            <h2 className="text-xl font-semibold mt-2 text-black">
              Servicios y Comodidades
            </h2>
            <p className="text-sm text-gray-700">
              Selecciona los servicios disponibles
            </p>
          </div>
          <div className="bg-white shadow rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                checked={servicios.wifi}
                onChange={() => toggleServicio("wifi")}
              />
              <span className="flex items-center gap-1">
                <FaWifi /> WiFi gratuito
              </span>
            </label>
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                checked={servicios.cocina}
                onChange={() => toggleServicio("cocina")}
              />
              <span className="flex items-center gap-1">
                <MdKitchen /> Cocina equipada
              </span>
            </label>
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                checked={servicios.aire}
                onChange={() => toggleServicio("aire")}
              />
              <span className="flex items-center gap-1">
                <MdAcUnit /> Aire acondicionado
              </span>
            </label>
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                checked={servicios.estacionamiento}
                onChange={() => toggleServicio("estacionamiento")}
              />
              <span className="flex items-center gap-1">
                <FaCar /> Estacionamiento
              </span>
            </label>
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                checked={servicios.television}
                onChange={() => toggleServicio("television")}
              />
              <span className="flex items-center gap-1">
                <FaTv /> Televisión
              </span>
            </label>
            <label className="flex items-center gap-2 text-black text-sm">
              <input
                type="checkbox"
                checked={servicios.desayuno}
                onChange={() => toggleServicio("desayuno")}
              />
              <span className="flex items-center gap-1">
                <GiForkKnifeSpoon /> Desayuno incluido
              </span>
            </label>
          </div>
        </div>

        {/* Resumen Final */}
        <div>
          <h2 className="text-2xl font-bold text-center mt-10 mb-4 text-black">
            Resumen del Alojamiento
          </h2>
          <div className="bg-white shadow rounded-lg p-6 text-black space-y-2">
            <p>
              <strong>Título:</strong> {titulo || "No especificado"}
            </p>
            <p>
              <strong>Descripción:</strong> {descripcion || "No especificada"}
            </p>
            <p>
              <strong>Tipo:</strong> {tipo || "No especificado"}
            </p>
            <p>
              <strong>Ubicación:</strong> {ubicacion || "No especificada"}
            </p>
            <p>
              <strong>Precio:</strong> {precio || "No especificado"}
            </p>
            <p>
              <strong>Detalles:</strong> {detalles || "No especificados"}
            </p>
            <p>
              <strong>Servicios:</strong>{" "}
              {Object.entries(servicios)
                .filter(([, v]) => v)
                .map(([k]) => k.charAt(0).toUpperCase() + k.slice(1))
                .join(", ") || "Ninguno seleccionado"}
            </p>
          </div>
          {/* Botón de Publicar */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-gray-800 transition"
              onClick={handleFormSubmit}
            >
              Publicar Alojamiento
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgregarAlojamiento;
