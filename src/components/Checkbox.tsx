import React, { InputHTMLAttributes, forwardRef } from 'react';

type ICheckboxProps = InputHTMLAttributes<HTMLInputElement>;

const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div className="flex items-center">
      <input type="checkbox" className="mr-2" {...rest} ref={ref} />
      <label id={rest['aria-labelledby']}>{children}</label>
    </div>
  );
});

export default Checkbox;
