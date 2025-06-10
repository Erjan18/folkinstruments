import React, { createContext, useContext, ReactNode } from 'react';
import { Instrument, CartItem } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { instruments } from '../data/instruments';

interface AppContextType {
  instruments: Instrument[];
  cart: CartItem[];
  favorites: string[];
  searchQuery: string;
  selectedType: string;
  addToCart: (instrument: Instrument) => void;
  removeFromCart: (instrumentId: string) => void;
  updateQuantity: (instrumentId: string, quantity: number) => void;
  toggleFavorite: (instrumentId: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedType: (type: string) => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [searchQuery, setSearchQuery] = useLocalStorage<string>('searchQuery', '');
  const [selectedType, setSelectedType] = useLocalStorage<string>('selectedType', '');

  const addToCart = (instrument: Instrument) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.instrument.id === instrument.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.instrument.id === instrument.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { instrument, quantity: 1 }];
    });
  };

  const removeFromCart = (instrumentId: string) => {
    setCart(prevCart => prevCart.filter(item => item.instrument.id !== instrumentId));
  };

  const updateQuantity = (instrumentId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(instrumentId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.instrument.id === instrumentId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const toggleFavorite = (instrumentId: string) => {
    setFavorites(prevFavorites =>
      prevFavorites.includes(instrumentId)
        ? prevFavorites.filter(id => id !== instrumentId)
        : [...prevFavorites, instrumentId]
    );
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.instrument.price * item.quantity, 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const value: AppContextType = {
    instruments,
    cart,
    favorites,
    searchQuery,
    selectedType,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleFavorite,
    setSearchQuery,
    setSelectedType,
    getCartTotal,
    getCartItemsCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}