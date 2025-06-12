"use client";
import React, { use, useEffect } from "react";
import { useContext } from "react";
import { Context } from "@/context/context";
import { Bookings, Lodging } from "@/context/type";
import Link from "next/link";
const DashboardContent = () => {
  const { userProfileInfo } = useContext(Context);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <p className="text-gray-600 mb-8">Gestiona tus alojamientos y reservas</p>
      {/* Top statistics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Reserva Activas Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Mis Reservas
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-4xl font-bold text-gray-900">
            {userProfileInfo?.bookings?.length || 0}
          </p>
        </div>

        {/* Mis Alojamientos Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Mis Alojamientos
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <p className="text-4xl font-bold text-gray-900">
            {userProfileInfo?.lodgings?.length || 0}
          </p>
          <p className="text-sm text-gray-500">Propiedades publicadas</p>
        </div>

        {/* Ingresos del Mes Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Ingresos del Mes
            </h2>
            <span className="text-gray-500 text-2xl">€</span>
          </div>
          <p className="text-4xl font-bold text-gray-900">€1,240</p>
          <p className="text-sm text-gray-500">+15% desde el mes pasado</p>
        </div>

        {/* Calificación Promedio Card */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Calificación Promedio
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.324 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.324-1.118L2.28 10.1c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <p className="text-4xl font-bold text-gray-900">4.85</p>
          <p className="text-sm text-gray-500">Basado en 45 reseñas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Reservations Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Reservas Recientes
            </h2>
            <button className="text-pink-500 hover:underline">Ver todas</button>
          </div>
          <p className="text-gray-600 mb-6">Tus últimas reservas realizadas</p>

          {/* Reservation Card 1 */}
          {userProfileInfo?.bookings?.map((booking: Bookings) => (
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Apartamento moderno en el centro
                  </h3>
                  <p className="text-gray-600 flex items-center text-sm mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-gray-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Madrid
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    2024-01-15 - 2024-01-18
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">
                    Confirmada
                  </span>
                  <span className="text-lg font-bold text-gray-900">€255</span>
                </div>
              </div>
            </div>
          ))}

          {/* Reservation Card 2 */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Casa con jardín privado
                </h3>
                <p className="text-gray-600 flex items-center text-sm mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Barcelona
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  2024-02-10 - 2024-02-14
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">
                  Pendiente
                </span>
                <span className="text-lg font-bold text-gray-900">€480</span>
              </div>
            </div>
          </div>
        </div>

        {/* My Accommodations Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              Mis Alojamientos
            </h2>
            <button className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span>
                <Link href="/Formulario">Agregar</Link>
              </span>
            </button>
          </div>
          <p className="text-gray-600 mb-6">Gestiona tus propiedades</p>

          {/* Accommodation Card 1 */}
          {userProfileInfo?.lodgings?.map((lodging: Lodging) => (
            <div className="border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {lodging.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{lodging.type}</p>
                  <p className="text-gray-500 text-sm mt-1 flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2m3-10h4m-4 0v4m-2-4h8m-8 4v2m-6 0h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>12 reservas</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-yellow-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.324 1.118l1.519 4.674c.3.921-.755 1.688-1.539 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.324-1.118L2.28 10.1c-.783-.57-.381-1.81.588-1.81h4.915a1 1 0 00.95-.69l1.519-4.674z"
                      />
                    </svg>
                    <span>4.8</span>
                  </p>
                </div>
                <span className="text-green-600 font-bold">
                  ${lodging.price_night} este mes
                </span>
              </div>
            </div>
          ))}

          <div className="text-center mt-6">
            <button className="text-pink-500 hover:underline">
              Ver todos mis alojamientos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
