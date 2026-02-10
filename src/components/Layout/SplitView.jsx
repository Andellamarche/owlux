import ConversationArea from './ConversationArea';
import SubQueryPanel from '../SubQuery/SubQueryPanel';

const SplitView = ({ 
  title, 
  messages, 
  isTyping, 
  onSendMessage, 
  showSubQuery,
  onToggleSubQuery,
  onCloseSubQuery 
}) => {
  return (
    <div className="flex flex-1 overflow-hidden">
      <ConversationArea
        title={title}
        messages={messages}
        isTyping={isTyping}
        onSendMessage={onSendMessage}
        onToggleSubQuery={onToggleSubQuery}
        hasSubQuery={showSubQuery}
      />
      {showSubQuery && <SubQueryPanel onClose={onCloseSubQuery} />}
    </div>
  );
};

export default SplitView;
