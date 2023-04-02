import { SearchBar } from 'components';
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
    <div className="p-5">
      <SearchBar />
      <div className="h-5"></div>
      <AudioCardList audios={audios} />
    </div>
  );
};

export default Home;
