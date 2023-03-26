import React, { FC, InputHTMLAttributes, RefObject } from 'react';

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: RefObject<HTMLInputElement>;
}

const Radio: FC<RadioProps> = ({ children, inputRef, ...props }) => {
  return (
    <div>
      <input type="radio" className="mr-2" {...props} ref={inputRef} />
      <span>{children}</span>
    </div>
  );
};

export default Radio;
