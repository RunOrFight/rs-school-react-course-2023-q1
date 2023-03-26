import React, { FC, PropsWithChildren } from 'react';

const RadioGroup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div role="radiogroup" className="h-10 flex items-center gap-4">
      {children}
    </div>
  );
};

export default RadioGroup;
