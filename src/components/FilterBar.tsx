import React from 'react';
import { useApp } from '../contexts/AppContext';

const typeLabels = {
  '': 'Все инструменты',
  'string': 'Струнные',
  'wind': 'Духовые',
  'percussion': 'Ударные',
};

export function FilterBar() {
  const { selectedType, setSelectedType } = useApp();

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Фильтры</h3>
      
      <div className="space-y-3">
        <h4 className="font-medium text-gray-700">Тип инструмента</h4>
        <div className="flex flex-wrap gap-2">
          {Object.entries(typeLabels).map(([type, label]) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedType === type
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-emerald-100 hover:text-emerald-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}