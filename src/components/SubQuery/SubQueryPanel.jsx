import { useState } from 'react';
import SubQueryHeader from './SubQueryHeader';
import MessageList from '../Conversation/MessageList';
import MessageInput from '../Conversation/MessageInput';
import { useChat } from '../../hooks/useChat';

const SubQueryPanel = ({ onClose }) => {
  const { messages, isTyping, sendMessage } = useChat([]);
  const [selectedApi, setSelectedApi] = useState('api1');

  return (
    <div className="w-1/2 h-screen flex flex-col bg-owlux-subquery-bg shadow-sidebar-right transition-all duration-300 ease-out">
      <SubQueryHeader onClose={onClose} />
      
      {/* API Selector */}
      <div className="p-4 border-b border-owlux-border">
        <label className="text-sm text-gray-600 mb-2 block">Select API</label>
        <select
          value={selectedApi}
          onChange={(e) => setSelectedApi(e.target.value)}
          className="w-full h-10 px-4 border border-gray-300 rounded-lg bg-white text-sm focus:border-blue-500 focus:outline-none"
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
