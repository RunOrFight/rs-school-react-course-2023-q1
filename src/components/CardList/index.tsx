import { Card } from 'components';
import React, { useEffect, useState } from 'react';
import { IProduct } from 'types';
import css from './style.module.css';

const CardList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div className={css.container}>
      {products.map((product) => (
        <Card key={product.id} product={product}></Card>
      ))}
    </div>
  );
};

export default CardList;
