import React from 'react';
import { ArrowRight, Music2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="text-white font-medium">Аутентичные инструменты Кыргызстана</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Музыкальные
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
              Традиции
            </span>
            <span className="block">Кыргызстана</span>
          </h1>

          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя богатое наследие кыргызской музыкальной культуры. 
            От древнего комуза до торжественного добулбаша — каждый инструмент несет в себе 
            душу и историю кочевого народа.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Смотреть каталог
              <ArrowRight className="h-5 w-5" />
            </button>
            <Link 
              to="/traditions"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-emerald-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Music2 className="h-5 w-5" />
              О традициях
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-emerald-700">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-emerald-200">Видов инструментов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-emerald-200">Лет традиций</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-200">Ручная работа</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}