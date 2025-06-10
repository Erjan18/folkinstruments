import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export function CartPage() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useApp();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="h-24 w-24 text-gray-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Корзина пуста</h2>
          <p className="text-gray-600 mb-8">Добавьте инструменты из каталога</p>
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Продолжить покупки
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <ShoppingCart className="h-8 w-8 text-emerald-600" />
              Корзина ({cart.length} {cart.length === 1 ? 'товар' : cart.length < 5 ? 'товара' : 'товаров'})
            </h1>
          </div>

          <div className="divide-y">
            {cart.map(({ instrument, quantity }) => (
              <div key={instrument.id} className="p-6 flex flex-col sm:flex-row gap-6">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={instrument.image}
                    alt={instrument.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between">
                    <div className="mb-4 sm:mb-0">
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {instrument.name}
                      </h3>
                      <p className="text-sm text-emerald-600 capitalize mb-2">
                        {instrument.type === 'string' ? 'Струнный' : 
                         instrument.type === 'wind' ? 'Духовой' : 'Ударный'}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {instrument.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(instrument.id, quantity - 1)}
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                          disabled={quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-12 text-center font-semibold text-lg">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(instrument.id, quantity + 1)}
                          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(instrument.id)}
                        className="p-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="mt-4 text-right">
                    <span className="text-lg font-semibold text-gray-900">
                      Итого: {(instrument.price * quantity).toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="p-6 border-t bg-gray-50">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-right">
                <p className="text-sm text-gray-600 mb-1">Общая стоимость:</p>
                <p className="text-3xl font-bold text-gray-900">
                  {getCartTotal().toLocaleString('ru-RU')} ₽
                </p>
              </div>
              
              <Link 
                to="/checkout"
                className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors"
              >
                Оформить заказ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}