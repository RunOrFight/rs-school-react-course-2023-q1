import React, { SelectHTMLAttributes, forwardRef } from 'react';

type ISelectProps = SelectHTMLAttributes<HTMLSelectElement>;

const Select = forwardRef<HTMLSelectElement, ISelectProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <select className="border h-10 w-full rounded-md px-5 text-lg" {...rest} ref={ref}>
      {children}
    </select>
  );
});

export default Select;
