import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { SearchBar } from '..';
import { LOCAL_STORAGE_KEY } from '../../constants';

test('renders search bar component', () => {
  const { getByRole } = render(<SearchBar />);
  const searchBox = getByRole('searchbox');
  expect(searchBox).toBeInTheDocument();
});

test('updates localStorage when input value changes', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const searchInput = getByPlaceholderText('Search for...');
  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH)).toBe('test');
});

test('updates input value when value changes', () => {
  const { getByPlaceholderText } = render(<SearchBar />);
  const searchInput = getByPlaceholderText('Search for...');
  fireEvent.change(searchInput, { target: { value: 'test' } });
  expect((searchInput as HTMLInputElement).value).toBe('test');
});
