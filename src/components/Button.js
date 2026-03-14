import React from 'react';

function Button({ type, variant = 'primary', children, ...rest }) {
  const baseClasses = 'px-6 py-3 rounded-md font-bold transition-all duration-300 ease-in-out focus:outline-none';
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:from-purple-700 hover:to-violet-700',
    secondary: 'bg-gray-700 text-white hover:bg-gray-600 border border-white border-opacity-30',
  };

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...rest}
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      className="px-6 py-3 rounded-md font-bold transition-all duration-300 ease-in-out focus:outline-none bg-gray-800 text-white border border-white border-opacity-30 hover:bg-gray-700"
      {...rest}
    >
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;

