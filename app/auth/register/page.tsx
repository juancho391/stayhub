"use client";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordEqual, setIsPasswordEqual] = useState(true);
  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsPasswordEqual(true);

    const formData = new FormData(e.currentTarget);
    const confirmPassword = formData.get("confirmPassword");
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      age: formData.get("age"),
      cedula: formData.get("cedula"),
    };

    if (data.password !== confirmPassword) {
      setIsPasswordEqual(false);
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/users/register",
        data
      );
      if (response.status === 201) {
        router.push("/auth/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          {/* StayHub logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-12 h-12 text-pink-500 mb-2"
          >
            <path
              fillRule="evenodd"
              d="M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 4.06 5.03 11.03a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M12 5.25l-.75.75H4.878a3 3 0 0 0-2.995 3.176l.35 3.5a3 3 0 0 0 3.09 2.65l2.218-.369.368 2.219a3 3 0 0 0 2.65 3.09l3.5.35a3 3 0 0 0 3.176-2.995V15.75a.75.75 0 0 1 1.5 0v2.75a4.5 4.5 0 0 1-4.707 4.492l-3.62-.362a4.5 4.5 0 0 1-4.28-4.707l-.362-3.62a4.5 4.5 0 0 1 4.492-4.707H12A.75.75 0 0 1 12 5.25Z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-2xl font-semibold text-gray-800">StayHub</h1>
          <h2 className="text-xl font-semibold text-gray-800 mt-4">
            Crear cuenta
          </h2>
          <p className="text-gray-600">Únete a nuestra comunidad</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Registro</h3>
          <p className="text-gray-600 mb-6">
            Completa la información para crear tu cuenta
          </p>

          <form onSubmit={handlerSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Juan"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                />
              </div>
              <div>
                <label
                  htmlFor="no_cedula"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Número de Cédula
                </label>
                <input
                  type="text"
                  id="cedula"
                  name="cedula"
                  placeholder="123456789"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="edad"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Edad
              </label>
              <input
                type="number"
                id="age"
                name="age"
                placeholder="30"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tu@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mínimo 8 caracteres"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Repite tu contraseña"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-900"
              />
            </div>
            <p className="text-red-500">
              {!isPasswordEqual ? "Las contraseñas no coinciden" : ""}
            </p>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2"
            >
              {isLoading ? "Cargando..." : "Crear Cuenta"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            ¿Ya tienes cuenta?{" "}
            <a href="/auth/login" className="text-pink-600 hover:underline">
              Inicia sesión aquí
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
