import React, { FC, PropsWithChildren } from 'react';

const FormLabel: FC<PropsWithChildren> = ({ children }) => {
  return <label className="text-xl font-thin mb-1">{children}</label>;
};

export default FormLabel;
