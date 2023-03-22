import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';

const FormControl: FC<PropsWithChildren> = ({ children }) => {
  return (
    <fieldset role="group" className={css.container}>
      {children}
    </fieldset>
  );
};

export default FormControl;
