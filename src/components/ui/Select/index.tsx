import React, { FC, PropsWithChildren } from 'react';
import css from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Select: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={css.container}>
      <select className={css.select}>{children}</select>
      <div className={css.icon}>
        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Select;
