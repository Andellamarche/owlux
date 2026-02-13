import { useEffect, useRef } from 'react';
import Message from './Message';

const MessageList = ({ messages, isTyping }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      <div className="max-w-3xl mx-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-owlux-text-secondary">
            <p>Start a conversation</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-owlux-assistant-msg px-4 py-3 rounded-xl shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-owlux-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-owlux-text-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-owlux-text-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;
