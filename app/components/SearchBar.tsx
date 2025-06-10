import React from "react";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center p-4 -mt-16 relative z-10">
      <div className="flex items-center bg-white rounded-full shadow-lg p-2 space-x-4 w-full max-w-2xl">
        <div className="flex-1 px-4 py-2">
          <input
            type="text"
            placeholder="¿A dónde quieres ir?"
            className="w-full outline-none text-gray-800"
          />
        </div>
        <div className="flex-1 px-4 py-2 border-l border-gray-200 flex items-center justify-between">
          <select
            aria-label="Tipo de alojamiento"
            className="w-full outline-none text-gray-800 bg-white"
          >
            <option value="">Tipo de alojamiento</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="todos">Todos</option>
          </select>
        </div>
        <button className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 flex items-center space-x-2">
          <FaSearch />
          <span>Buscar</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
