import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { InstrumentCard } from '../components/InstrumentCard';

export function FavoritesPage() {
  const { instruments, favorites } = useApp();
  
  const favoriteInstruments = instruments.filter(instrument => 
    favorites.includes(instrument.id)
  );

  if (favoriteInstruments.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Список избранного пуст</h2>
          <p className="text-gray-600 mb-8">Добавьте понравившиеся инструменты в избранное</p>
          <Link
            to="/"
            className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
          >
            Перейти к каталогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к каталогу
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Heart className="h-10 w-10 text-red-500 fill-current" />
            Избранные инструменты
          </h1>
          <p className="text-xl text-gray-600">
            {favoriteInstruments.length} {favoriteInstruments.length === 1 ? 'инструмент' : 
             favoriteInstruments.length < 5 ? 'инструмента' : 'инструментов'} в вашем списке избранного
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteInstruments.map(instrument => (
            <InstrumentCard key={instrument.id} instrument={instrument} />
          ))}
        </div>
      </div>
    </div>
  );
}