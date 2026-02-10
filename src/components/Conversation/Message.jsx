const Message = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      <div
        className={`${
          isUser
            ? 'bg-user-bubble max-w-[70%] rounded-tl-xl rounded-tr-xl rounded-bl-xl rounded-br-sm'
            : 'bg-owlux-assistant-msg max-w-[80%] rounded-tl-xl rounded-tr-xl rounded-br-xl rounded-bl-sm'
        } px-4 py-3 shadow-sm`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

export default Message;
