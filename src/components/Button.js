const Button = ({ title, icon, variant = 'primary', className = '', onClick }) => {
  const baseStyles =
    'flex justify-between items-center gap-2 border text-sm font-medium px-3 py-1.5 rounded-full';
  const variantStyles = {
    primary: 'bg-[#1A73E8] text-white hover:bg-blue-700',
    secondary: 'bg-[#F3F7FE] text-[#1A73E8]',
    outline: 'bbg-white text-[#1A73E8] hover:bg-gray-50',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant] || ''} ${className}`}
      onClick={onClick}
    >
      {icon && <span>{icon}</span>}
      <span>
        {title}
      </span>
    </button>
  );
};

export default Button;