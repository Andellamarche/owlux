import React from 'react';

const ConversationHeader = ({ hasSubQuery, onToggleSubQuery }) => {
  return (
    <header className="h-14 px-6 flex items-center justify-between border-b border-gray-200 bg-white shadow-header flex-shrink-0 z-[3]">
      <div className="flex items-center gap-3">
        {/* Botón volver */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 13L5 8L10 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <h1 className="text-base font-semibold text-gray-900">
          Potencia eléctrica recomendada
        </h1>
      </div>
      
      {/* Botón "Nueva consulta" o ">" según estado */}
      {!hasSubQuery ? (
        <button 
          onClick={onToggleSubQuery}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Nueva consulta
        </button>
      ) : (
        <button 
          onClick={onToggleSubQuery}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
    </header>
  );
};

export default ConversationHeader;
