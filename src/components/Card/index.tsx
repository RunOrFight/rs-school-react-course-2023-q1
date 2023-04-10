import React from 'react';
import { Link } from 'react-router-dom';
import { IProduct } from 'types';
import css from './style.module.css';

interface ICardProps {
  product: IProduct;
}

const Card = ({ product }: ICardProps) => {
  return (
    <Link to={'/'}>
      <div className={css.container}>
        <div className={css.preview}>
          <img
            className={css.image}
            src={product.thumbnail}
            alt={`image for product id ${product.id}`}
          />
        </div>
        <div className={css.details}>
          <span className={css.title}>{product.title}</span>
          <br />
          <div className={css.description}>{product.description}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
