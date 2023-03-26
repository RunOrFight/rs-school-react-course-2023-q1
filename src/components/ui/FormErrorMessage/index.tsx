import React, { FC, PropsWithChildren } from 'react';

const FormErrorMessage: FC<PropsWithChildren> = ({ children }) => {
  return <span className="text-red-500 text-xs">{children}</span>;
};

export default FormErrorMessage;
