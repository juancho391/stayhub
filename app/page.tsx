import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import ApartmentCard from "./components/ApartmentCard";

export default function Home() {
  const apartments = [
    {
      id: 1,
      image: "/apartment1.jpg",
      title: "Apartamento moderno en el centro",
      location: "Madrid",
      guests: 4,
      type: "Apartamento",
      reviews: 124,
      price: 85,
      rating: 4.8,
    },
    {
      id: 2,
      image: "/apartment2.jpg",
      title: "Casa con jardín privado",
      location: "Barcelona",
      guests: 6,
      type: "Casa",
      reviews: 89,
      price: 120,
      rating: 4.9,
    },
    {
      id: 3,
      image: "/apartment3.jpg",
      title: "Loft industrial renovado",
      location: "Valencia",
      guests: 2,
      type: "Apartamento",
      reviews: 156,
      price: 95,
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="h-64 bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl font-bold">
            Encuentra tu lugar perfecto
          </h1>
          <p className="text-white text-lg mt-2">
            Descubre alojamientos únicos en todo el mundo
          </p>
        </div>
      </div>
      <SearchBar />

      <section className="container mx-auto px-4 py-8 mt-4">
        <h2 className="text-2xl font-bold mb-6 text-black">
          Alojamientos disponibles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </section>
    </div>
  );
}
