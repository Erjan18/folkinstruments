import React from 'react';
import { Music, Phone, Mail, MapPin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-3 rounded-xl">
                <Music className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">КырМузыка</h3>
                <p className="text-emerald-400 font-medium">Традиционные инструменты</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Мы сохраняем и передаем музыкальное наследие Кыргызстана, предлагая 
              аутентичные инструменты ручной работы от лучших мастеров страны.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span>+996 (777) 123-456</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-400" />
                <span>info@kyrmuzyka.kg</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span>г. Бишкек, ул. Токтогула 123</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Каталог</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Струнные инструменты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Духовые инструменты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Ударные инструменты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Новинки</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Популярные</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-lg font-semibold mb-6">О нас</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">История компании</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Наши мастера</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Доставка</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Контакты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Отзывы</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
              © 2024 КырМузыка. Все права защищены.
            </p>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <span className="text-gray-400">Сделано с</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-gray-400">для сохранения традиций</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}