import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';

const RadioGroup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div role="radiogroup" className={css.container}>
      {children}
    </div>
  );
};

export default RadioGroup;
