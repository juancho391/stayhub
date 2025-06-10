import { FaHotel } from "react-icons/fa";
import { Quicksand } from 'next/font/google';

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function LoginPage() {
  return (
    <div className={`flex justify-center items-center min-h-screen bg-gray-100 ${quicksand.className}`}>
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6 text-[#ab040f]">
          <FaHotel size={50} />
        </div>
        <h1 className="text-2xl font-semibold text-center mb-2 text-black">StayHub</h1>
        <h2 className="text-xl text-center mb-6 text-black">Iniciar Sesión</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6">
          <form className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Ingresa tu correo electrónico" 
              required 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-gray-500"
            />
            <input 
              type="password" 
              placeholder="Ingresa tu contraseña" 
              required 
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black placeholder:text-gray-500"
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Ingresar
            </button>
          </form>
        </div>
        <p className="text-center text-sm text-black">
          ¿No tienes una cuenta? {" "}
          <a href="/register" className="text-blue-600 font-semibold hover:underline">
            Regístrate aquí
          </a>
        </p>
      </div>
    </div>
  );
}
