import { useState } from 'react';
import Sidebar from './components/Layout/Sidebar';
import SplitView from './components/Layout/SplitView';
import { mockChats, mockMessages } from './data/mockData';
import { useChat } from './hooks/useChat';

function App() {
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [showSubQuery, setShowSubQuery] = useState(false);
  const { messages, isTyping, sendMessage } = useChat(mockMessages);

  const selectedChat = mockChats.find(chat => chat.id === selectedChatId);

  const handleToggleSubQuery = () => {
    setShowSubQuery(!showSubQuery);
  };

  const handleCloseSubQuery = () => {
    setShowSubQuery(false);
  };

  return (
    <div className="flex h-screen bg-owlux-bg overflow-hidden">
      <Sidebar 
        selectedChatId={selectedChatId} 
        onChatSelect={setSelectedChatId}
      />
      <SplitView
        title={selectedChat?.title || 'Nueva conversación'}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={sendMessage}
        showSubQuery={showSubQuery}
        onToggleSubQuery={handleToggleSubQuery}
        onCloseSubQuery={handleCloseSubQuery}
      />
    </div>
  );
}

export default App;
