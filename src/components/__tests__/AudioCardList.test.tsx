import React from 'react';
import { render } from '@testing-library/react';
import { AudioCardList } from '..';

const audios = [
  {
    id: 1,
    title: 'Song 1',
    genre: 'Pop',
    performer: 'Artist 1',
    recordQuality: 'studio',
    releaseDate: new Date('2022-03-30'),
    isPublic: true,
    cover: 'song1.jpg',
  },
  {
    id: 2,
    title: 'Song 2',
    genre: 'Rock',
    performer: 'Artist 2',
    recordQuality: 'live',
    releaseDate: new Date('2022-04-01'),
    isPublic: false,
    cover: 'song2.jpg',
  },
];

describe('AudioCardList', () => {
  it('renders a list of audio cards', () => {
    const { getAllByTestId } = render(<AudioCardList audios={audios} />);
    const audioCards = getAllByTestId('audio-card');
    expect(audioCards).toHaveLength(2);
  });
});
