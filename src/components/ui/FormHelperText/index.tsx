import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';

const FormHelperText: FC<PropsWithChildren> = ({ children }) => {
  return <div className={css.text}>{children}</div>;
};

export default FormHelperText;
