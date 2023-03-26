import React from 'react';
import { render } from '@testing-library/react';
import AudioCardList from '.';

const audios = [
  {
    id: 1,
    title: 'Test Audio 1',
    genre: 'Rock',
    performer: 'Test Performer 1',
    recordQuality: 'demo',
    releaseDate: new Date('2022-01-01'),
    isPublic: false,
    cover: 'https://example.com/cover1.jpg',
  },
  {
    id: 2,
    title: 'Test Audio 2',
    genre: 'Pop',
    performer: 'Test Performer 2',
    recordQuality: 'studio',
    releaseDate: new Date('2022-02-01'),
    isPublic: true,
    cover: 'https://example.com/cover2.jpg',
  },
];

describe('AudioCardList component', () => {
  it('renders AudioCard for each audio in audios prop', () => {
    const { getAllByTestId } = render(<AudioCardList audios={audios} />);
    expect(getAllByTestId('audio-card').length).toBe(audios.length);
  });
});
