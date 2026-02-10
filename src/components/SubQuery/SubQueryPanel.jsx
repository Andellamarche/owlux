import { useState } from 'react';
import SubQueryHeader from './SubQueryHeader';
import MessageList from '../Conversation/MessageList';
import MessageInput from '../Conversation/MessageInput';
import { useChat } from '../../hooks/useChat';

const SubQueryPanel = ({ onClose }) => {
  const { messages, isTyping, sendMessage } = useChat([]);

  return (
    <div className="w-1/2 h-screen flex flex-col bg-owlux-subquery-bg border-l-2 border-owlux-primary transition-all duration-300 ease-out">
      <SubQueryHeader onClose={onClose} />
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={sendMessage} placeholder="Pregunta sobre la consulta..." />
    </div>
  );
};

export default SubQueryPanel;
