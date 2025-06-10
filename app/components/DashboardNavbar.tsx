import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const DashboardNavbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <FaHome className="text-pink-500 text-2xl" />
        <span className="text-xl font-bold text-gray-800">StayHub</span>
      </div>
      <div className="flex space-x-4">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
