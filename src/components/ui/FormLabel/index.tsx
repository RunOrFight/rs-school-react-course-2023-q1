import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';

const FormLabel: FC<PropsWithChildren> = ({ children }) => {
  return <label className={css.label}>{children}</label>;
};

export default FormLabel;
