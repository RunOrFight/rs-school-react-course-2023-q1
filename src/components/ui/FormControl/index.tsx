import React, { FC, PropsWithChildren } from 'react';

const FormControl: FC<PropsWithChildren> = ({ children }) => {
  return (
    <fieldset role="group" className="w-full flex items-start flex-col relative">
      {children}
    </fieldset>
  );
};

export default FormControl;
