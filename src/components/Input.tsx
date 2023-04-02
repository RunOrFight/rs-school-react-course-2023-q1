import React, { InputHTMLAttributes, forwardRef } from 'react';

type IInputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
  return <input className="border h-10 w-full rounded-md px-5 text-xl" {...props} ref={ref} />;
});

export default Input;
