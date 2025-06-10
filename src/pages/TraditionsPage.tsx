import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Music, Users, Mountain, Star, Heart, Clock, Award } from 'lucide-react';

export function TraditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-emerald-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к каталогу
          </Link>
          
          <div className="text-center py-16">
            <div className="inline-flex items-center gap-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <Music className="h-6 w-6 text-yellow-400" />
              <span className="font-medium">Музыкальное наследие</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Традиции
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">
                Кыргызской
              </span>
              <span className="block">Музыки</span>
            </h1>
            
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Погрузитесь в богатый мир кыргызской музыкальной культуры, где каждый звук 
              несет в себе историю тысячелетий и душу кочевого народа
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* История */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-600 p-3 rounded-xl">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">История и происхождение</h2>
              </div>
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Кыргызская музыкальная традиция уходит корнями в глубокую древность, 
                  когда кочевые племена Тянь-Шаня создавали мелодии, отражающие красоту 
                  горных пейзажей и ритм кочевой жизни.
                </p>
                
                <p>
                  Музыкальные инструменты кыргызов не просто средство для извлечения звуков — 
                  это священные предметы, через которые передается духовное наследие народа. 
                  Каждый инструмент имеет свою историю, свое предназначение и свое место 
                  в культурной традиции.
                </p>
                
                <p>
                  Особое место в кыргызской музыке занимает эпос "Манас" — один из самых 
                  длинных эпосов в мире, который традиционно исполняется под аккомпанемент 
                  комуза манасчи (сказителями эпоса).
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl p-8">
                <img
                  src="https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Традиционные кыргызские инструменты"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">лет традиций</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Типы инструментов */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Типы инструментов</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Кыргызские музыкальные инструменты делятся на три основные категории, 
              каждая из которых имеет свое уникальное звучание и применение
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Струнные */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl w-fit mb-6">
                <Music className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Струнные инструменты</h3>
              
              <p className="text-gray-600 mb-6">
                Основа кыргызской музыки. Комуз, кыл кыяк, жетиген — каждый инструмент 
                способен передать всю гамму человеческих эмоций.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Комуз — душа кыргызской музыки</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Кыл кыяк — голос степи</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Жетиген — семиструнная мудрость</span>
                </div>
              </div>
            </div>

            {/* Духовые */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl w-fit mb-6">
                <Mountain className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Духовые инструменты</h3>
              
              <p className="text-gray-600 mb-6">
                Инструменты, имитирующие звуки природы — шум ветра в горах, 
                пение птиц, журчание горных ручьев.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Сурнай — торжественный голос</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Чопо чур — глиняная флейта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Темир комуз — железный варган</span>
                </div>
              </div>
            </div>

            {/* Ударные */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-4 rounded-xl w-fit mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ударные инструменты</h3>
              
              <p className="text-gray-600 mb-6">
                Ритмическая основа кыргызской музыки, используемая в церемониях, 
                праздниках и военных походах.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Добулбаш — великий барабан</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Дайра — женский барабан</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-700">Дабыл — ритм жизни</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Мастерство */}
        <section className="mb-20">
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 rounded-3xl p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white bg-opacity-20 p-3 rounded-xl">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Мастерство изготовления</h2>
                </div>
                
                <div className="space-y-6 text-emerald-100 leading-relaxed">
                  <p>
                    Изготовление кыргызских музыкальных инструментов — это искусство, 
                    передаваемое из поколения в поколение. Каждый мастер вкладывает в свою 
                    работу не только технические навыки, но и душу.
                  </p>
                  
                  <p>
                    Материалы выбираются с особой тщательностью: дерево должно быть 
                    определенного возраста и качества, кожа — правильно выделана, 
                    струны — настроены в соответствии с древними традициями.
                  </p>
                  
                  <p>
                    Процесс создания инструмента может занимать от нескольких недель 
                    до нескольких месяцев, в зависимости от сложности и размера инструмента.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                  <div className="text-sm text-emerald-200">Ручная работа</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-sm text-emerald-200">Лет опыта мастеров</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                  <div className="text-sm text-emerald-200">Видов инструментов</div>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">∞</div>
                  <div className="text-sm text-emerald-200">Любовь к традициям</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Современность */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Традиции в современном мире</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Сегодня кыргызские музыкальные инструменты продолжают жить и развиваться, 
              находя свое место в современной музыке и культуре
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Music className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Образование</h3>
              <p className="text-sm text-gray-600">Обучение игре в музыкальных школах и консерваториях</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-green-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Фестивали</h3>
              <p className="text-sm text-gray-600">Участие в международных музыкальных фестивалях</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Исполнители</h3>
              <p className="text-sm text-gray-600">Современные музыканты, сохраняющие традиции</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md text-center">
              <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Наследие</h3>
              <p className="text-sm text-gray-600">Передача знаний будущим поколениям</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}