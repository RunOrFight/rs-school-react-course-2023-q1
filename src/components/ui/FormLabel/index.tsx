import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';

const FormLabel: FC<PropsWithChildren> = ({ children }) => {
  return <legend className={css.label}>{children}</legend>;
};

export default FormLabel;
