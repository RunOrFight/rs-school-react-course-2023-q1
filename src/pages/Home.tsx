import { SearchBar } from 'components/ui';
import { AudioCardList } from 'components';
import React from 'react';
import { IAudio } from 'types';

const Home = () => {
  const audios: IAudio[] = [
    {
      id: 1,
      genre: 'techno',
      isPublic: false,
      performer: 'Walter White',
      recordQuality: 'studio',
      releaseDate: new Date(),
      title: 'Audio 1',
      cover: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      genre: 'techno',
      isPublic: true,
      performer: 'Walter White',
      recordQuality: 'amateur',
      releaseDate: new Date(),
      title: 'Audio 2',
      cover: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <SearchBar />
      <div style={{ height: '20px' }}></div>
      <AudioCardList audios={audios} />
    </div>
  );
};

export default Home;
