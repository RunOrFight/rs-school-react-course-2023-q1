import React, { FC, PropsWithChildren } from 'react';

interface IButtonProperties extends PropsWithChildren {
  variant?: 'solid' | 'outline';
}

const Button: FC<IButtonProperties> = ({ children, variant = 'solid' }) => {
  const styleConfig = {
    solid: 'bg-green-500 text-white',
    outline: 'border-green-500 text-green-500',
  };
  return (
    <button role="button" className={`h-12 w-32 rounded-lg ${styleConfig[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
