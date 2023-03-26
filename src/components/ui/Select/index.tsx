import React, { FC, RefObject, SelectHTMLAttributes } from 'react';
import css from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  inputRef: RefObject<HTMLSelectElement>;
}

const Select: FC<ISelectProps> = ({ children, inputRef, ...props }) => {
  return (
    <div className={css.container}>
      <select ref={inputRef} className={css.select} {...props}>
        {children}
      </select>
      <div className={css.icon}>
        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default Select;
