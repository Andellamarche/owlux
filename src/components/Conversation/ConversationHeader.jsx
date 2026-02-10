import Icon from '../Shared/Icon';

const ConversationHeader = ({ title, onToggleSubQuery, hasSubQuery }) => {
  return (
    <div className="h-14 px-4 flex items-center border-b border-owlux-border bg-white">
      <div className="flex items-center gap-2 flex-1">
        <button className="p-1 hover:bg-owlux-sidebar rounded transition-colors">
          <Icon name="back" size={18} />
        </button>
        <h2 className="text-base font-semibold text-owlux-text truncate">{title}</h2>
      </div>
      {!hasSubQuery && (
        <button
          onClick={onToggleSubQuery}
          className="p-2 hover:bg-owlux-sidebar rounded-lg transition-colors flex items-center gap-2"
          title="Nueva consulta"
        >
          <Icon name="plus" size={18} />
          <span className="text-sm">Nueva consulta</span>
        </button>
      )}
    </div>
  );
};

export default ConversationHeader;
