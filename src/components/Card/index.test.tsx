import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MOCK_PRODUCT_1 } from '../../constants';
import Card from './index';

describe('Card component', () => {
  it('should render product details correctly', () => {
    render(
      <BrowserRouter>
        <Card product={MOCK_PRODUCT_1} />
      </BrowserRouter>
    );

    const productTitleElement = screen.getByText(MOCK_PRODUCT_1.title);
    const productDescriptionElement = screen.getByText(MOCK_PRODUCT_1.description);

    expect(productTitleElement).toBeInTheDocument();
    expect(productDescriptionElement).toBeInTheDocument();
  });
});
