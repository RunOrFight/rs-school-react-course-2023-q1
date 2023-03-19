import { SearchBar } from 'components/ui';
import { CardList } from 'components';
import React, { useEffect, useState } from 'react';
import { IProduct } from 'types';

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <SearchBar />
      <div style={{ height: '20px' }}></div>
      <CardList products={products}></CardList>
    </div>
  );
};

export default Home;
