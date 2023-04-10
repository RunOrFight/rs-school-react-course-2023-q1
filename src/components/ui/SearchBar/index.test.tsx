import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from '.';
import { LOCAL_STORAGE_KEY } from '../../../constants';

describe('Searchbar component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should render with saved value from localStorage', () => {
    localStorage.setItem(LOCAL_STORAGE_KEY.SEARCH, 'test');
    const { getByDisplayValue } = render(<SearchBar />);
    expect(getByDisplayValue('test')).toBeInTheDocument();
  });

  it('should save input value to localStorage when unmounting', () => {
    const { getByRole, unmount } = render(<SearchBar />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    unmount();
    expect(localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH)).toEqual('test');
  });

  it('should update input value on user input', () => {
    const { getByRole } = render(<SearchBar />);
    const input = getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toEqual('test');
  });
});
