import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../';

describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders with correct props', () => {
    render(<Input type="text" placeholder="Enter your name" />);
    const inputElement = screen.getByPlaceholderText('Enter your name');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('renders with default styles', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveClass('border h-10 w-full rounded-md px-5 text-xl');
  });

  it('forwards refs correctly', () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<Input ref={inputRef} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBe(inputRef.current);
  });
});
