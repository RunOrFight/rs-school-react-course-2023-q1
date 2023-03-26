import React, { FC, InputHTMLAttributes, RefObject } from 'react';
import css from './style.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement>;
}

const Input: FC<IInputProps> = ({ inputRef, ...props }) => {
  return <input ref={inputRef} className={css.input} {...props} />;
};

export default Input;
