import { useState } from 'react';

const MessageInput = ({ onSend, placeholder = "Ask something..." }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleAttach = () => {
    // Placeholder for attach functionality
    console.log('Attach file clicked');
  };

  return (
    <div className="px-4 py-4 bg-white border-t border-gray-200 flex-shrink-0">
      <div className="relative max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-full hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all bg-white">
          
          {/* Botón adjuntar archivo */}
          <button 
            type="button"
            className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
            onClick={handleAttach}
            aria-label="Adjuntar archivo"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4V16M4 10H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          {/* Input de texto */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 outline-none text-sm text-gray-900 placeholder:text-gray-400 bg-transparent"
          />
          
          {/* Botón enviar (círculo azul) */}
          <button 
            type="submit"
            disabled={!input.trim()}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            aria-label="Enviar mensaje"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageInput;
