"use client";

import React, { useState, useContext } from "react";
import { LuHouse, LuCalendarDays, LuHeart } from "react-icons/lu";
import DashboardNavbar from "../components/DashboardNavbar";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Context } from "@/context/context";

const AccommodationPage: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState<Date | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  const [loading, setLoading] = useState(false);
  const { selectLogin, userLogin, userProfileInfo } = useContext(Context);

  const handleReservation = async () => {
    if (!checkInDate || !checkOutDate) return;
    setLoading(true);
    console.log(userLogin);
    console.log(userProfileInfo);
    console.log(userLogin.id);
    console.log(selectLogin.id);

    try {
      const response = await axios.post("http://localhost:8000/reservas/", {
        id_usuario: userLogin.id,
        id_alojamiento: selectLogin.id,
        fecha_reserva: checkInDate.toISOString().split("T")[0],
        fecha_fin: checkOutDate.toISOString().split("T")[0],
      });

      // Si el backend responde con 2xx, entra aquí
      alert("Reserva realizada con éxito.");
      setCheckInDate(null);
      setCheckOutDate(null);
      setLoading(true);
    } catch (error: any) {
      // Puedes acceder a error.response si quieres más detalles
      console.error(error);
      if (error.response?.status === 400) {
        alert("No se puede reservar en esas fechas.");
      } else {
        alert("Ocurrió un error. Intenta nuevamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f9f9f9] min-h-screen text-[#222]">
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-[#222] mb-1">
              {selectLogin?.title}
            </h1>
            <div className="flex items-center text-sm text-gray-600">
              <span className="text-yellow-500 mr-1">★ 4.8</span>
              <span className="mr-1">(124 reseñas)</span>
              <span className="mx-2">•</span>
              <span>{selectLogin?.city}</span>
              <span className="mx-2">•</span>
              <span className="font-semibold text-[#222]">
                {selectLogin?.type}
              </span>
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
                <img
                  key={i}
                  src="casa1.jpg"
                  alt={`Foto ${i + 1}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              ))}
            </div>

            <div className="bg-white p-6 rounded shadow-sm">
              <h2 className="text-xl font-semibold text-[#222] mb-2">
                Descripción
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {selectLogin?.description}
              </p>
              <div className="flex justify-between text-sm text-[#222] font-medium">
                <div className="text-center">
                  <div className="text-xl">👤</div>
                  <div>{(selectLogin?.no_rooms || 0) * 2}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl">🛏️</div>
                  <div>{selectLogin?.no_rooms}</div>
                </div>
                <div className="text-center">
                  <div className="text-xl">🚿</div>
                  <div>{selectLogin?.no_bathrooms}</div>
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
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm w-full lg:w-auto h-fit border border-gray-200">
            <div className="flex justify-between items-center text-[22px] font-bold mb-6 text-[#222]">
              <span>
                ${selectLogin?.price_night}{" "}
                <span className="text-base font-normal text-[#717171]">
                  / noche
                </span>
              </span>
              <span className="text-yellow-500 text-base font-semibold flex items-center gap-1">
                ★ <span className="text-[#222] text-sm">4.8</span>
              </span>
            </div>
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

            <button
              onClick={handleReservation}
              className={
                `w-full py-[10px] rounded-md font-semibold text-sm ` +
                (checkInDate && checkOutDate && !loading
                  ? "bg-pink-500 hover:bg-pink-600 text-white"
                  : "bg-gray-400 text-white cursor-not-allowed")
              }
            >
              {loading ? "Reservando..." : "Reservar"}
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
