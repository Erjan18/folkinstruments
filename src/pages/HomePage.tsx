import React, { useMemo } from 'react';
import { Hero } from '../components/Hero';
import { FilterBar } from '../components/FilterBar';
import { InstrumentCard } from '../components/InstrumentCard';
import { useApp } from '../contexts/AppContext';

export function HomePage() {
  const { instruments, searchQuery, selectedType } = useApp();

  const filteredInstruments = useMemo(() => {
    return instruments.filter(instrument => {
      const matchesSearch = searchQuery === '' || 
        instrument.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        instrument.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = selectedType === '' || instrument.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [instruments, searchQuery, selectedType]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Каталог инструментов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Каждый инструмент изготовлен вручную мастерами, сохраняющими древние традиции 
            кыргызского народа
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters */}
          <div className="lg:col-span-1">
            <FilterBar />
          </div>

          {/* Instruments Grid */}
          <div className="lg:col-span-3">
            {filteredInstruments.length > 0 ? (
              <>
                <div className="flex items-center justify-between mb-8">
                  <p className="text-gray-600">
                    Найдено инструментов: <span className="font-semibold">{filteredInstruments.length}</span>
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredInstruments.map(instrument => (
                    <InstrumentCard key={instrument.id} instrument={instrument} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Инструменты не найдены
                </h3>
                <p className="text-gray-600">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}