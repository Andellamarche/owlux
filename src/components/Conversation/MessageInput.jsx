import { useState } from 'react';
import Icon from '../Shared/Icon';

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

  return (
    <div className="px-4 py-4 border-t border-owlux-border bg-white">
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        <div className="relative flex items-center bg-white border border-owlux-border rounded-3xl shadow-sm focus-within:border-owlux-primary transition-colors duration-200">
          <button
            type="button"
            className="pl-4 pr-2 text-owlux-text-secondary hover:text-owlux-primary transition-colors"
          >
            <Icon name="plus" size={20} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className="flex-1 py-3 px-2 bg-transparent outline-none text-sm"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className={`mr-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
              input.trim()
                ? 'bg-owlux-primary text-white hover:bg-blue-600'
                : 'bg-owlux-border text-owlux-text-secondary'
            }`}
          >
            <Icon name="send" size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
