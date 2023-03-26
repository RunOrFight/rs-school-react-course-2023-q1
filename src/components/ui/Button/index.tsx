import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';

interface IButtonProperties extends PropsWithChildren {
  variant?: 'solid' | 'outline';
}

const Button: FC<IButtonProperties> = ({ children, variant = 'solid' }) => {
  return (
    <button role="button" className={`${css.button} ${css[variant]}`}>
      {children}
    </button>
  );
};

export default Button;
