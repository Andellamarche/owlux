const Button = ({ children, onClick, className = '', variant = 'primary', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-lg transition-colors duration-200 font-medium';
  
  const variants = {
    primary: 'bg-owlux-primary text-white hover:bg-blue-600',
    secondary: 'bg-owlux-sidebar text-owlux-text hover:bg-gray-300',
    ghost: 'bg-transparent hover:bg-owlux-sidebar text-owlux-text',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
