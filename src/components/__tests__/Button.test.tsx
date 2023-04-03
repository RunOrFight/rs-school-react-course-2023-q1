import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '..';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders with default styles', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('h-12 w-32 rounded-lg bg-green-500 text-white');
  });

  it('renders with outline variant', () => {
    render(<Button variant="outline" />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('h-12 w-32 rounded-lg border-green-500 text-green-500');
  });

  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Click me');
  });
});
