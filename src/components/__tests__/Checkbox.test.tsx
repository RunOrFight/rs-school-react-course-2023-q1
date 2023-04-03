import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from '..';

describe('Checkbox', () => {
  it('should render without errors', () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
  });

  it('should display the label text', () => {
    const labelText = 'Test label';
    render(<Checkbox aria-labelledby="test">{labelText}</Checkbox>);
    const label = screen.getByText(labelText);
    expect(label).toBeInTheDocument();
  });

  it('should call the onChange function when the checkbox is clicked', () => {
    const onChange = jest.fn();
    render(<Checkbox onChange={onChange} />);
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
