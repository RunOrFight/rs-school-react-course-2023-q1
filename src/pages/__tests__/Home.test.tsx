import React from 'react';
import { render, screen } from '@testing-library/react';
import { HomePage } from '..';

test('renders search bar and audio card list', () => {
  render(<HomePage />);
  const searchBar = screen.getByRole('searchbox');
  const audioCardList = screen.getByRole('list');

  expect(searchBar).toBeInTheDocument();
  expect(audioCardList).toBeInTheDocument();
});
