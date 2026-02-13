import { useState } from 'react';
import SubQueryHeader from './SubQueryHeader';
import MessageList from '../Conversation/MessageList';
import MessageInput from '../Conversation/MessageInput';
import { useChat } from '../../hooks/useChat';

const SubQueryPanel = ({ onClose }) => {
  const { messages, isTyping, sendMessage } = useChat([]);
  const [selectedApi, setSelectedApi] = useState('api1');

  const handleNewSubQuery = () => {
    // Placeholder for new sub query functionality
    console.log('Creating new sub-query...');
  };

  return (
    <div className="w-[400px] h-full bg-white shadow-sidebar-right flex flex-col">
      <SubQueryHeader onClose={onClose} onNewSubQuery={handleNewSubQuery} />
      
      {/* API Selector */}
      <div className="px-4 py-3 border-b border-gray-200 bg-white flex-shrink-0">
        <label htmlFor="api-select" className="block text-xs font-medium text-gray-600 mb-2">
          Select API
        </label>
        <select 
          id="api-select"
          value={selectedApi}
          onChange={(e) => setSelectedApi(e.target.value)}
          className="w-full h-10 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white hover:border-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all cursor-pointer"
        >
          <option value="api1">API 1</option>
          <option value="api2">API 2</option>
          <option value="api3">API 3</option>
        </select>
      </div>
      
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={sendMessage} placeholder="Pregunta sobre la consulta..." />
    </div>
  );
};

export default SubQueryPanel;
