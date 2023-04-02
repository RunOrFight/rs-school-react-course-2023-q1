import React, { InputHTMLAttributes, forwardRef } from 'react';

type RadioProps = InputHTMLAttributes<HTMLInputElement>;

const Radio = forwardRef<HTMLInputElement, RadioProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div>
      <input type="radio" className="mr-2" {...rest} ref={ref} />
      <span>{children}</span>
    </div>
  );
});

export default Radio;
