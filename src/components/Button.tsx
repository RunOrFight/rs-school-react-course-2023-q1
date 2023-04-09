import React, { FC, PropsWithChildren } from 'react';

interface IButtonProperties extends PropsWithChildren {
  variant?: 'solid' | 'outline';
}

const Button: FC<IButtonProperties> = ({ children, variant = 'solid' }) => {
  const styleConfig = {
    solid: 'bg-green-600 text-white',
    outline: 'border-green-500 text-green-500',
  };
  return (
    <button
      role="button"
      className={`hover:opacity-90 active:opacity-75 font-semibold rounded-[36px] h-10 w-32 ${styleConfig[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;
