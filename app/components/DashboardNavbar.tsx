import React from "react";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { Context } from "@/context/context";
import { useRouter } from "next/navigation";

const DashboardNavbar = () => {
  const router = useRouter();
  const {
    setToken,
    setUserLogin,
    userProfileInfo,
    setUserProfileInfo,
    userLogin,
  } = useContext(Context);

  const cerrarSesion = (e: React.MouseEvent) => {
    e.preventDefault();
    setToken(null);
    setUserLogin(null);
    setUserProfileInfo(null);
    router.push("/auth/login");
  };
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <FaHome className="text-pink-500 text-2xl" />
        <Link href={"/"}>
          <span className="text-xl font-bold text-gray-800">StayHub</span>
        </Link>
      </div>
      <div className="flex flex-grow justify-center space-x-6">
        <p className="text-pink-500">
          {userProfileInfo ? `Bienvenido ${userProfileInfo.name}` : ""}
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600"
          onClick={cerrarSesion}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
