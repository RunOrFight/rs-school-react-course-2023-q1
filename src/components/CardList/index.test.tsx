import React from 'react';
import { render, screen } from '@testing-library/react';
import CardList from '.';
import { MOCK_PRODUCT_1, MOCK_PRODUCT_2 } from '../../constants';
import { BrowserRouter } from 'react-router-dom';

describe('CardList', () => {
  it('should render all cards fetched from the API', async () => {
    jest.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: async () => ({ products: [MOCK_PRODUCT_1, MOCK_PRODUCT_2] }),
    } as Response);

    render(
      <BrowserRouter>
        <CardList />
      </BrowserRouter>
    );

    expect(await screen.findByText(MOCK_PRODUCT_1.title)).toBeInTheDocument();
    expect(await screen.findByText(MOCK_PRODUCT_2.title)).toBeInTheDocument();
  });
});
