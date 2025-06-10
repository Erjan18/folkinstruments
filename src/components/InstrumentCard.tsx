import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Sparkles, Tag } from 'lucide-react';
import { Instrument } from '../types';
import { useApp } from '../contexts/AppContext';

interface InstrumentCardProps {
  instrument: Instrument;
}

export function InstrumentCard({ instrument }: InstrumentCardProps) {
  const { addToCart, toggleFavorite, favorites } = useApp();
  const isFavorite = favorites.includes(instrument.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(instrument);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleFavorite(instrument.id);
  };

  return (
    <Link to={`/instrument/${instrument.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-emerald-200">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={instrument.image}
            alt={instrument.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2">
            {instrument.isNew && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                Новинка
              </span>
            )}
            {instrument.isPopular && (
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                Популярный
              </span>
            )}
            {instrument.originalPrice && (
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Tag className="h-3 w-3" />
                Скидка
              </span>
            )}
          </div>

          {/* Stock Status */}
          {!instrument.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold">
                Нет в наличии
              </span>
            </div>
          )}

          {/* Favorite Button */}
          <button
            onClick={handleToggleFavorite}
            className={`absolute top-4 right-4 p-2 rounded-full transition-all duration-300 ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-600 hover:bg-red-50 hover:text-red-500'
            }`}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                {instrument.name}
              </h3>
              <p className="text-sm text-emerald-600 font-medium capitalize">
                {instrument.type === 'string' ? 'Струнный' : 
                 instrument.type === 'wind' ? 'Духовой' : 'Ударный'}
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {instrument.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  {instrument.price.toLocaleString('ru-RU')} ₽
                </span>
                {instrument.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {instrument.originalPrice.toLocaleString('ru-RU')} ₽
                  </span>
                )}
              </div>
              {instrument.originalPrice && (
                <span className="text-sm text-green-600 font-medium">
                  Экономия {(instrument.originalPrice - instrument.price).toLocaleString('ru-RU')} ₽
                </span>
              )}
            </div>

            {instrument.inStock && (
              <button
                onClick={handleAddToCart}
                className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center gap-2 font-medium"
              >
                <ShoppingCart className="h-4 w-4" />
                В корзину
              </button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}