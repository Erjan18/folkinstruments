export interface Instrument {
  id: string;
  name: string;
  type: 'string' | 'wind' | 'percussion';
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  fullDescription: string;
  materials: string[];
  origin: string;
  inStock: boolean;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  instrument: Instrument;
  quantity: number;
}

export interface AppState {
  instruments: Instrument[];
  cart: CartItem[];
  favorites: string[];
  searchQuery: string;
  selectedType: string;
}