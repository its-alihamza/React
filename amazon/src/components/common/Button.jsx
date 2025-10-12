import React from 'react';

const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const baseClasses = 'px-4 py-2 rounded transition-colors focus:outline-none focus:ring-2';
  const variants = {
    primary: 'bg-yellow-400 hover:bg-yellow-500 text-black focus:ring-yellow-600',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-gray-400'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;