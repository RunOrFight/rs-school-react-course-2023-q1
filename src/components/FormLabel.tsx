import React, { FC, LabelHTMLAttributes } from 'react';

type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement>;

const FormLabel: FC<FormLabelProps> = ({ children, ...props }) => {
  return (
    <label className="text-xl font-thin mb-1" {...props}>
      {children}
    </label>
  );
};

export default FormLabel;
