const SubQueryHeader = ({ onClose, onNewSubQuery }) => {
  return (
    <div className="h-14 flex items-center justify-between px-4 border-b border-gray-200 bg-white flex-shrink-0">
      <h2 className="font-semibold text-base text-gray-900">Consultas</h2>
      
      <div className="flex items-center gap-2">
        {/* Botón para nueva consulta */}
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
          onClick={onNewSubQuery}
          aria-label="Nueva consulta"
          title="Nueva consulta"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        {/* Botón para cerrar panel */}
        <button 
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-700"
          onClick={onClose}
          aria-label="Cerrar consultas"
          title="Cerrar"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 6L14 14M6 14L14 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SubQueryHeader;
