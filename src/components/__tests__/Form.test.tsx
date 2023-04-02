import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from '..';

test('should call addAudio and reset with the correct arguments when form is submitted', async () => {
  const mockAddAudio = jest.fn();
  const alertMock = jest.spyOn(window, 'alert');
  alertMock.mockImplementation(() => {});

  render(<Form addAudio={mockAddAudio} />);

  const titleInput = screen.getByLabelText(/Title/i);
  userEvent.type(titleInput, 'My Audio Title');

  const performerInput = screen.getByLabelText(/Performer/i);
  userEvent.type(performerInput, 'My Audio Performer');

  const dateInput = screen.getByLabelText(/Release Date/i);
  fireEvent.change(dateInput, { target: { value: '2023-04-03' } });

  const genreSelect = screen.getByLabelText(/Genre/i);
  userEvent.selectOptions(genreSelect, 'rock');

  const qualityRadio = screen.getByLabelText(/Studio/i);
  fireEvent.click(qualityRadio);

  const coverInput = screen.getByLabelText(/Cover/i);
  const file = new File(['hello'], 'hello.png', { type: 'image/png' });
  await waitFor(() => userEvent.upload(coverInput, file));

  const publicCheckbox = screen.getByLabelText(/Public/i);
  fireEvent.click(publicCheckbox);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  await act(async () => {
    fireEvent.click(submitButton);
  });

  expect(mockAddAudio).toHaveBeenCalled();
});
