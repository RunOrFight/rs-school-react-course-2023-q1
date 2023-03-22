import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';
const Radio: FC<PropsWithChildren> = ({ children }) => {
  return (
    <label className={css.container}>
      <input type="radio" className={css.input} />
      <span className={css.control}></span>
      <span className={css.label}>{children}</span>
    </label>
  );
};

export default Radio;
