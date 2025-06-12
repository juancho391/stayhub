"use client";
import Image from "next/image";
import { Lodging } from "@/context/type";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/context";
import { useRouter } from "next/navigation";

export default function ApartmentCard({ apartment }: { apartment: Lodging }) {
  const router = useRouter();
  const { setSelectLogin } = useContext(Context);
  const context = useContext(Context);
  const handler_click = () => {
    console.log(context);
    console.log(apartment);
    setSelectLogin(apartment);
    console.log("Alojamiento seleccionado:", apartment); // Verifica en consola
    router.push("/Acommodation");
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Placeholder Image */}
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
        <Image
          src={apartment.images[0]}
          alt={apartment.title}
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {apartment.title}
        </h3>
        <div className="flex">
          <div className="flex items-center text-gray-700 text-sm mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M9.695 18.25a.75.75 0 0 1 1.06 0l6.25 6.25a.75.75 0 0 1-1.06 1.06L10 19.31l-5.885 5.885a.75.75 0 0 1-1.06-1.06l6.25-6.25ZM.25 10a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H1A.75.75 0 0 1 .25 10Z"
                clipRule="evenodd"
              />
            </svg>
            {apartment.city}
          </div>
          <div className="flex items-center text-gray-700 text-sm mb-4 ml-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0ZM5.522 6.224l.583-.497A4.2 4.2 0 0 1 9 4.5h2a4.2 4.2 0 0 1 2.895 1.227l.583.497A7.323 7.323 0 0 0 10 4.25a7.323 7.323 0 0 0-4.478 1.974ZM10 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
            {4} huéspedes
          </div>
        </div>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-4">
          {apartment.type}
        </span>

        <div className="flex justify-between items-center">
          <p className="text-3xl font-bold text-gray-900">
            ${apartment.price_night}
            <span className="text-lg font-normal text-gray-600"> / noche</span>
          </p>
          <button
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            onClick={handler_click}
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
