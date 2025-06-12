"use client";

import React, { useState } from "react";
import { LuHouse, LuCalendarDays, LuHeart } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AccommodationPage: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);

  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#222]">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-1 font-bold text-xl">
            <LuHouse className="w-6 h-6 text-[rgb(236,72,153)]" />
            <span className="text-black">StayHub</span>
          </div>

          <nav className="flex items-center space-x-6 text-sm font-medium text-[#111]">
            <a href="#" className="hover:underline">
              Inicio
            </a>
            <a href="#" className="hover:underline">
              Buscar
            </a>
          </nav>

          <div className="flex items-center space-x-4 text-sm font-medium text-[#111]">
            <a href="#" className="hover:underline">
              Iniciar Sesión
            </a>
            <button className="bg-black text-white px-4 py-1.5 rounded-md">
              Registrarse
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#222] mb-1">
              Apartamento moderno en el centro
            </h1>

            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500 mr-1">★ 4.8</span>
              <span className="mr-1">(124 reseñas)</span>
              <span className="mx-2">•</span>
              <span>Madrid</span>
              <span className="mx-2">•</span>
              <span className="font-semibold text-[#222]">Apartamento</span>
            </div>
          </div>

          <button className="flex items-center gap-1 border px-3 py-1 rounded-full text-sm font-medium text-[#222] hover:bg-gray-100">
            <LuHeart className="text-[#222]" />
            Guardar
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-200 aspect-video rounded flex items-center justify-center"
                >
                  <span className="text-gray-500">Imagen</span>
                </div>
              ))}
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h2 className="text-xl font-semibold text-[#222] mb-2">
                Descripción
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Hermoso apartamento completamente renovado en el corazón de
                Madrid. Perfecto para parejas o viajeros de negocios. Cuenta con
                todas las comodidades modernas y está ubicado cerca de las
                principales atracciones turísticas.
              </p>
              <div className="flex justify-between text-sm text-[#222] font-medium">
                <div className="text-center">
                  <div className="text-xl">👤</div>
                  <div>4 huéspedes</div>
                </div>
                <div className="text-center">
                  <div className="text-xl">🛏️</div>
                  <div>2 habitaciones</div>
                </div>
                <div className="text-center">
                  <div className="text-xl">🚿</div>
                  <div>1 baño</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h2 className="text-xl font-semibold text-[#222] mb-2">
                Servicios
              </h2>
              <ul className="grid grid-cols-2 gap-2 text-[#222] font-medium">
                <li>📶 WiFi gratuito</li>
                <li>🚗 Estacionamiento</li>
                <li>🍳 Cocina equipada</li>
              </ul>
            </div>

            {/* Botón Publicar Alojamiento */}
            <div className="mt-8">
              <button className="bg-black text-white px-5 py-2 rounded-md font-semibold text-sm">
                Publicar Alojamiento
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm w-full lg:w-auto h-fit border border-gray-200">
            <div className="flex justify-between items-center text-[22px] font-bold mb-6 text-[#222]">
              <span>
                €85{" "}
                <span className="text-base font-normal text-[#717171]">
                  / noche
                </span>
              </span>
              <span className="text-yellow-500 text-base font-semibold flex items-center gap-1">
                ★ <span className="text-[#222] text-sm">4.8</span>
              </span>
            </div>

            {/* Campos de fechas con calendario */}
            <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-[#222] font-semibold">
              <label className="flex flex-col gap-1">
                <span>Check-in</span>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  selectsStart
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={new Date()}
                  placeholderText="Seleccionar"
                  className="w-full border border-[#dddddd] rounded-md px-3 py-[10px] text-[#222] font-normal"
                />
              </label>

              <label className="flex flex-col gap-1">
                <span>Check-out</span>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  selectsEnd
                  startDate={checkInDate}
                  endDate={checkOutDate}
                  minDate={checkInDate || new Date()}
                  placeholderText="Seleccionar"
                  className="w-full border border-[#dddddd] rounded-md px-3 py-[10px] text-[#222] font-normal"
                />
              </label>
            </div>

            <div className="mb-4 text-sm text-[#222] font-semibold">
              <label className="flex flex-col gap-1">
                <span>Huéspedes</span>
                <input
                  type="number"
                  className="border border-[#dddddd] rounded-md px-3 py-[10px] outline-none text-[#222] font-normal"
                  defaultValue={1}
                  min={1}
                />
              </label>
            </div>

            <button
              disabled
              className="bg-[#717171] text-white w-full py-[10px] rounded-md font-semibold text-sm cursor-not-allowed"
            >
              Reservar
            </button>

            <p className="text-[12px] text-[#717171] text-center mt-3">
              No se realizará ningún cargo todavía
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationPage;
