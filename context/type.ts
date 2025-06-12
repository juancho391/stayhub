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
