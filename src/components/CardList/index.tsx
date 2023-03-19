import { Card } from 'components';
import React, { FC } from 'react';
import { IProduct } from 'types';
import css from './style.module.css';

interface ICardListProps {
  products: IProduct[];
}

const CardList: FC<ICardListProps> = ({ products }) => {
  return (
    <div className={css.container}>
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CardList;
