import React, { FC, InputHTMLAttributes, RefObject } from 'react';

interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: RefObject<HTMLInputElement>;
}

const Checkbox: FC<ICheckboxProps> = ({ children, inputRef, ...props }) => {
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2" {...props} ref={inputRef} />
      <label>{children}</label>
    </div>
  );
};

export default Checkbox;
