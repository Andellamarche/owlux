import React from 'react';

const SubQueryHeader = ({ onClose }) => {
  return (
    <div className="h-14 px-6 flex items-center justify-between border-b border-gray-200 bg-white shadow-header flex-shrink-0 z-[3]">
      <h2 className="text-base font-semibold text-gray-900">Consultas</h2>
      
      <div className="flex items-center gap-2">
        {/* Botón nueva consulta */}
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        {/* Botón cerrar */}
        <button 
          onClick={onClose}
          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SubQueryHeader;
