const ConversationHeader = ({ title, onToggleSubQuery, hasSubQuery, onBack }) => {
  return (
    <div className="h-14 flex items-center justify-between px-6 border-b border-gray-200 bg-white flex-shrink-0">
      {/* Lado izquierdo: Botón volver + Título */}
      <div className="flex items-center gap-3">
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
          onClick={onBack}
          aria-label="Volver"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16L6 10L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <h1 className="text-base font-semibold text-gray-900">
          {title}
        </h1>
      </div>
      
      {/* Lado derecho: Botones condicionales */}
      <div className="flex items-center gap-2">
        {/* Botón "Nueva consulta" - solo visible si NO hay sub-consulta */}
        {!hasSubQuery && (
          <button 
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={onToggleSubQuery}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M8 5V11M5 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Nueva consulta
          </button>
        )}
        
        {/* Botón colapsar - solo visible si HAY sub-consulta */}
        {hasSubQuery && (
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
            onClick={onToggleSubQuery}
            aria-label="Colapsar panel"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ConversationHeader;
