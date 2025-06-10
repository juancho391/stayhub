import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <FaHome className="text-pink-500 text-2xl" />
        <span className="text-xl font-bold text-gray-800">StayHub</span>
      </div>
      <div className="flex flex-grow justify-center space-x-6">
        <Link href="/">
          <p className="text-gray-600 hover:text-pink-500 cursor-pointer">
            Inicio
          </p>
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/auth/login">
          <button className="text-gray-600 hover:text-pink-500 px-4 py-2">
            Iniciar Sesión
          </button>
        </Link>
        <Link href="/auth/register">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600">
            Registrarse
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
