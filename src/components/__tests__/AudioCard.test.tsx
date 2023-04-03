import React from 'react';
import { render, screen } from '@testing-library/react';
import { AudioCard } from '..';
import { IAudio } from 'types';

describe('AudioCard', () => {
  const audio: IAudio = {
    id: 1111,
    title: 'Title',
    genre: 'Genre',
    performer: 'Performer',
    recordQuality: 'studio',
    releaseDate: new Date(),
    isPublic: true,
    cover: 'https://example.com/image.jpg',
  };

  it('renders without crashing', () => {
    render(<AudioCard audio={audio} />);
    const audioCardElement = screen.getByTestId('audio-card');
    expect(audioCardElement).toBeInTheDocument();
  });

  it('renders audio details correctly', () => {
    render(<AudioCard audio={audio} />);
    const titleElement = screen.getByText('Title');
    expect(titleElement).toBeInTheDocument();

    const genreElement = screen.getByText('Genre');
    expect(genreElement).toBeInTheDocument();

    const performerElement = screen.getByText('Performer');
    expect(performerElement).toBeInTheDocument();

    const publicElement = screen.getByText('Public');
    expect(publicElement).toBeInTheDocument();

    const qualityElement = screen.getByText('studio');
    expect(qualityElement).toHaveClass('bg-green-500');

    const imageElement = screen.getByAltText('image');
    expect(imageElement).toHaveAttribute('src', 'https://example.com/image.jpg');
  });
});
