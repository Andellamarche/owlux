import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-[#F5F5F5] flex flex-col border-r border-gray-200 shadow-sidebar-left relative">
      {/* Logo */}
      <div className="p-6 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
            🦉
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            OWLUX
          </h1>
        </div>
      </div>
      
      {/* Historial de chats - scrolleable */}
      <div className="flex-1 overflow-y-auto px-4 pb-32 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 px-2">
          Historial de Chats
        </div>
        
        <div className="space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-300 hover:bg-gray-200 transition-colors text-left">
            <span className="text-lg leading-none">🔥</span>
            <span className="text-sm font-medium text-gray-900 truncate flex-1">
              Potencia eléctrica recomendada
            </span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors text-left">
            <span className="text-lg leading-none">💡</span>
            <span className="text-sm text-gray-900 truncate flex-1">
              Análisis de factura de luz
            </span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors text-left">
            <span className="text-lg leading-none">⚡</span>
            <span className="text-sm text-gray-900 truncate flex-1">
              Consulta sobre tarifas
            </span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors text-left">
            <span className="text-lg leading-none">📌</span>
            <span className="text-sm text-gray-900 truncate flex-1">
              Recomendaciones de ahorro
            </span>
          </button>
        </div>
      </div>
      
      {/* API Selector - fijo al fondo SIN línea negra - BUG #2 FIX */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pt-4 pb-6 bg-gradient-to-t from-[#F5F5F5] via-[#F5F5F5]/95 to-transparent pointer-events-auto">
        <label htmlFor="api-select" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
          Select API
        </label>
        
        <select 
          id="api-select"
          className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-white text-sm text-gray-900 cursor-pointer transition-all hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="openai">OpenAI GPT-4</option>
          <option value="gemini">Gemini 3 Flash Preview</option>
          <option value="claude">Claude 3 Opus</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;
