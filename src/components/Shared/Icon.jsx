const Icon = ({ name, size = 24, className = '' }) => {
  const icons = {
    plus: '⊕',
    send: '↑',
    close: '✕',
    back: '<',
    forward: '>',
    menu: '☰',
  };

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      {icons[name] || name}
    </span>
  );
};

export default Icon;
