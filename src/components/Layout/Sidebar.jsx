import { useState } from 'react';
import Logo from '../Shared/Logo';
import { mockChats, apiOptions } from '../../data/mockData';

const Sidebar = ({ selectedChatId, onChatSelect }) => {
  const [selectedApi, setSelectedApi] = useState(apiOptions[0].value);

  return (
    <div className="w-64 bg-owlux-sidebar h-screen flex flex-col shadow-sidebar-left">
      {/* Logo */}
      <Logo />

      {/* Chat History */}
      <div className="flex-1 overflow-y-auto px-2">
        <h3 className="text-xs uppercase text-owlux-text-secondary font-semibold px-3 py-2">
          Historial de Chats
        </h3>
        <div className="space-y-1">
          {mockChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onChatSelect(chat.id)}
              className={`w-full text-left px-3 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                selectedChatId === chat.id
                  ? 'bg-gray-300'
                  : 'hover:bg-gray-200'
              }`}
            >
              <span className="text-lg">{chat.emoji}</span>
              <span className="text-sm truncate flex-1">{chat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* API Selector */}
      <div className="p-4 border-t border-owlux-border">
        <label className="block text-xs text-owlux-text-secondary mb-2">
          Select API
        </label>
        <select
          value={selectedApi}
          onChange={(e) => setSelectedApi(e.target.value)}
          className="w-full h-10 px-3 bg-white border border-owlux-border rounded-lg text-sm focus:outline-none focus:border-owlux-primary"
        >
          {apiOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Sidebar;
