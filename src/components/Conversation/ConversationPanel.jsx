import React from 'react';
import ConversationHeader from './ConversationHeader';

const ConversationPanel = ({ hasSubQuery, onToggleSubQuery }) => {
  return (
    <div className={`flex-1 flex flex-col bg-[#FAFAFA] ${hasSubQuery ? 'border-r border-gray-200' : ''}`}>
      {/* CRÍTICO: NO agregar borders de colores, outline, o box-shadow con colores extraños */}
      {/* Solo un border-right gris sutil cuando hay sub-consulta - BUG #1 FIX */}
      
      <ConversationHeader hasSubQuery={hasSubQuery} onToggleSubQuery={onToggleSubQuery} />
      
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* User message */}
          <div className="flex justify-end">
            <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
              <p className="text-sm">¿Qué potencia eléctrica me recomiendas contratar para una vivienda de 90m²?</p>
            </div>
          </div>
          
          {/* AI response */}
          <div className="flex justify-start">
            <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm">
              <p className="text-sm text-gray-900 leading-relaxed">
                Para una vivienda de 90m², te recomendaría contratar una potencia de <strong>5.75 kW</strong> (5750W). 
                Esta es la opción más común para hogares de ese tamaño y permite utilizar varios electrodomésticos 
                simultáneamente sin problemas.
              </p>
              <p className="text-sm text-gray-900 leading-relaxed mt-3">
                Considera que si tienes:
              </p>
              <ul className="text-sm text-gray-900 mt-2 ml-4 space-y-1">
                <li>• Aire acondicionado o calefacción eléctrica</li>
                <li>• Vitrocerámica o inducción</li>
                <li>• Varios electrodomésticos de alto consumo</li>
              </ul>
              <p className="text-sm text-gray-900 leading-relaxed mt-3">
                Podrías necesitar aumentar a <strong>6.9 kW o más</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Message input */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3">
            <input 
              type="text" 
              placeholder="Escribe tu mensaje..."
              className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder-gray-500"
            />
            <button className="text-blue-500 hover:text-blue-600 transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10L18 2L10 18L8 11L2 10Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPanel;
