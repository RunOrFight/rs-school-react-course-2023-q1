import React, { FC, PropsWithChildren } from 'react';

type ICardListProps = PropsWithChildren;

const CardList: FC<ICardListProps> = ({ children }) => {
  return (
    <div className="flex flex-wrap gap-4 overflow-auto h-full" role="list">
      {children?.toString() ? (
        children
      ) : (
        <div className="h-full w-full flex items-center justify-center font-semibold text-3xl">
          {'There is no items :('}
        </div>
      )}
    </div>
  );
};
export default CardList;
