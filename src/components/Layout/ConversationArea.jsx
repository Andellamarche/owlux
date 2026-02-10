import ConversationHeader from '../Conversation/ConversationHeader';
import MessageList from '../Conversation/MessageList';
import MessageInput from '../Conversation/MessageInput';

const ConversationArea = ({ 
  title, 
  messages, 
  isTyping, 
  onSendMessage, 
  onToggleSubQuery,
  hasSubQuery 
}) => {
  return (
    <div className={`${hasSubQuery ? 'w-1/2' : 'w-full'} h-screen flex flex-col bg-white transition-all duration-300 ease-out`}>
      <ConversationHeader 
        title={title} 
        onToggleSubQuery={onToggleSubQuery}
        hasSubQuery={hasSubQuery}
      />
      <MessageList messages={messages} isTyping={isTyping} />
      <MessageInput onSend={onSendMessage} />
    </div>
  );
};

export default ConversationArea;
