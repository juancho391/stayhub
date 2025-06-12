export interface Lodging {
  id: string;
  title: string;
  description: string;
  no_rooms: number;
  no_bathrooms: number;
  price_night: number;
  images: string[];
  city: string;
  propietario: number;
  characteristics: string[];
  nearby_areas: string[];
  type: string;
}

export interface Bookings {
  id: string;
  id_alojamiento: string;
  fecha_fin: string;
  lodging_id: string;
  id_usuario: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  cedula: string;
  age: number;
  bookings: Bookings[];
  lodgings: Lodging[];
}
