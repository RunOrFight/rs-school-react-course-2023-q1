import React, { FC, HTMLInputTypeAttribute } from 'react';
import css from './style.module.css';

interface IInputProps {
  type: HTMLInputTypeAttribute;
}

const Input: FC<IInputProps> = ({ type }) => {
  return <input className={css.input} type={type} />;
};

export default Input;
