import React from 'react';
import { render } from '@testing-library/react';
import AudioCard from './index';

const audio = {
  id: 111,
  title: 'Test Audio',
  genre: 'Rock',
  performer: 'Test Performer',
  recordQuality: 'amateur',
  releaseDate: new Date('2022-01-01'),
  isPublic: false,
  cover: 'https://example.com/cover.jpg',
};

describe('AudioCard component', () => {
  it('renders audio', () => {
    const { getByText } = render(<AudioCard audio={audio} />);
    expect(getByText('Test Audio')).toBeInTheDocument();
    expect(getByText('Test Performer')).toBeInTheDocument();
    expect(getByText('Rock')).toBeInTheDocument();
    expect(getByText('Private')).toBeInTheDocument();
    expect(getByText('amateur')).toBeInTheDocument();
  });

  it('renders release date in correct format', () => {
    const { getByText } = render(<AudioCard audio={audio} />);
    expect(getByText('Sat Jan 01 2022')).toBeInTheDocument();
  });

  it('renders cover image with alt text', () => {
    const { getByAltText } = render(<AudioCard audio={audio} />);
    expect(getByAltText('image')).toBeInTheDocument();
  });
});
