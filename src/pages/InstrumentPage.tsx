import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, CheckCircle, Package, Truck, Award } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export function InstrumentPage() {
  const { id } = useParams<{ id: string }>();
  const { instruments, addToCart, toggleFavorite, favorites } = useApp();
  
  const instrument = instruments.find(i => i.id === id);
  const isFavorite = instrument ? favorites.includes(instrument.id) : false;

  if (!instrument) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Инструмент не найден</h2>
          <Link to="/" className="text-emerald-600 hover:text-emerald-700">
            Вернуться к каталогу
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к каталогу
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-white shadow-xl">
              <img
                src={instrument.image}
                alt={instrument.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              {instrument.isNew && (
                <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Новинка
                </span>
              )}
              {instrument.isPopular && (
                <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Популярный
                </span>
              )}
              {instrument.originalPrice && (
                <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                  Скидка {Math.round((1 - instrument.price / instrument.originalPrice) * 100)}%
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">{instrument.name}</h1>
                  <p className="text-xl text-emerald-600 font-medium capitalize">
                    {instrument.type === 'string' ? 'Струнный инструмент' : 
                     instrument.type === 'wind' ? 'Духовой инструмент' : 'Ударный инструмент'}
                  </p>
                </div>
                <button
                  onClick={() => toggleFavorite(instrument.id)}
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isFavorite
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                  }`}
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gray-900">
                  {instrument.price.toLocaleString('ru-RU')} ₽
                </span>
                {instrument.originalPrice && (
                  <div className="flex flex-col">
                    <span className="text-2xl text-gray-500 line-through">
                      {instrument.originalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                    <span className="text-sm text-green-600 font-medium">
                      Экономия {(instrument.originalPrice - instrument.price).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2 mb-6">
                {instrument.inStock ? (
                  <>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-green-600 font-medium">В наличии</span>
                  </>
                ) : (
                  <>
                    <Package className="h-5 w-5 text-red-500" />
                    <span className="text-red-600 font-medium">Нет в наличии</span>
                  </>
                )}
              </div>

              {/* Add to Cart Button */}
              {instrument.inStock && (
                <button
                  onClick={() => addToCart(instrument)}
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                >
                  <ShoppingCart className="h-6 w-6" />
                  Добавить в корзину
                </button>
              )}
            </div>

            {/* Description */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Описание</h3>
                <p className="text-gray-700 leading-relaxed">{instrument.fullDescription}</p>
              </div>

              {/* Materials */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Материалы</h3>
                <div className="flex flex-wrap gap-2">
                  {instrument.materials.map((material, index) => (
                    <span
                      key={index}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Origin */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Происхождение</h3>
                <p className="text-gray-700">{instrument.origin}</p>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t">
              <div className="text-center p-4 bg-white rounded-xl">
                <Award className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Ручная работа</h4>
                <p className="text-sm text-gray-600">Изготовлено мастерами</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <Package className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Качество</h4>
                <p className="text-sm text-gray-600">Проверенные материалы</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl">
                <Truck className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <h4 className="font-semibold text-gray-900">Доставка</h4>
                <p className="text-sm text-gray-600">По всему Кыргызстану</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}