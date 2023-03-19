import { SearchBar } from 'components/ui';
import { CardList } from 'components';
import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <SearchBar />
      <div style={{ height: '20px' }}></div>
      <CardList />
    </div>
  );
};

export default Home;
