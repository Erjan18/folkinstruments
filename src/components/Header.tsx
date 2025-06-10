import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, Heart, Music } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

export function Header() {
  const { searchQuery, setSearchQuery, getCartItemsCount, favorites } = useApp();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className="bg-white shadow-lg border-b-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl group-hover:shadow-lg transition-all duration-300">
              <Music className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">КырМузыка</h1>
              <p className="text-sm text-emerald-600 font-medium">Традиционные инструменты</p>
            </div>
          </Link>

          {/* Search Bar */}
          {isHomePage && (
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Поиск инструментов..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-3 rounded-full border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300 bg-gray-50 focus:bg-white"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/favorites"
              className="relative p-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300"
            >
              <Heart className="h-6 w-6" />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </Link>
            
            <Link
              to="/cart"
              className="relative p-3 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300"
            >
              <ShoppingCart className="h-6 w-6" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}