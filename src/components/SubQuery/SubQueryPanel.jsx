import React from 'react';
import SubQueryHeader from './SubQueryHeader';

const SubQueryPanel = ({ onClose }) => {
  return (
    <aside className="flex-1 h-screen bg-[#FAFAFA] flex flex-col border-l border-gray-200 shadow-sidebar-right relative z-[5]">
      {/* CRÍTICO: Mismo background #FAFAFA que ConversationPanel - BUG #1 FIX */}
      {/* Solo border-left gris sutil para separar */}
      {/* shadow-sidebar-right aplicada - BUG #3 FIX */}
      
      <SubQueryHeader onClose={onClose} />
      
      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto p-6 pb-48">
        <div className="space-y-6">
          {/* Query item */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600 flex-shrink-0">
                Q1
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-medium mb-2">
                  ¿Cuánto cuesta aumentar la potencia contratada?
                </p>
                <p className="text-xs text-gray-600">
                  El coste de aumentar la potencia depende de varios factores...
                </p>
              </div>
            </div>
          </div>
          
          {/* Query item */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm font-semibold text-blue-600 flex-shrink-0">
                Q2
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900 font-medium mb-2">
                  ¿Qué diferencia hay entre 5.75 kW y 6.9 kW?
                </p>
                <p className="text-xs text-gray-600">
                  La principal diferencia es la cantidad de potencia disponible...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Input (absoluto) */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white p-4 z-[2]">
        <div className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3">
          <input 
            type="text" 
            placeholder="Nueva consulta..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500"
          />
          <button className="text-blue-500 hover:text-blue-600 transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10L18 2L10 18L8 11L2 10Z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* API Selector (absoluto al fondo) - SIN línea negra - BUG #2 FIX */}
      <div className="absolute bottom-0 left-0 right-0 px-6 pt-20 pb-6 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/95 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
          <label htmlFor="api-select-sub" className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
            Select API
          </label>
          
          <select 
            id="api-select-sub"
            className="w-full h-10 px-3 border border-gray-300 rounded-lg bg-white text-sm text-gray-900 cursor-pointer transition-all hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="openai">OpenAI GPT-4</option>
            <option value="gemini">Gemini 3 Flash Preview</option>
            <option value="claude">Claude 3 Opus</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default SubQueryPanel;
