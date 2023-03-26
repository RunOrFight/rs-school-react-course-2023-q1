import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '.';

describe('Form Component', () => {
  test('should submit a form with valid data', async () => {
    const addAudioMock = jest.fn();
    const { getByLabelText } = render(<Form addAudio={addAudioMock} />);
    const titleInput = getByLabelText('Title');
    const performerInput = getByLabelText('Perfomer');
    const releaseDateInput = getByLabelText('Release Date');
    const genreSelect = getByLabelText('Genre');
    const amateurRecordInput = getByLabelText('Amateur');
    const studioRecordInput = getByLabelText('Studio');
    const isPublicInput = getByLabelText('Public');

    await userEvent.type(titleInput, 'Some title');
    await userEvent.type(performerInput, 'Some performer');
    await userEvent.type(releaseDateInput, '2022-03-27');
    fireEvent.change(genreSelect, { target: { value: 'rock' } });
    fireEvent.click(amateurRecordInput);
    fireEvent.click(isPublicInput);

    expect(titleInput).toHaveValue('Some title');
    expect(performerInput).toHaveValue('Some performer');
    expect(releaseDateInput).toHaveValue('2022-03-27');
    expect(genreSelect).toHaveValue('rock');
    expect(amateurRecordInput).toBeChecked();
    expect(studioRecordInput).not.toBeChecked();
    expect(isPublicInput).toBeChecked();

    const submitButton = screen.getByRole('button');

    fireEvent.click(submitButton);

    expect(addAudioMock).toHaveBeenCalledWith({
      title: 'Some title',
      performer: 'Some performer',
      releaseDate: new Date('2022-03-27'),
      genre: 'rock',
      recordQuality: 'amateur',
      cover: 'https://picsum.photos/200/300',
      isPublic: true,
    });
  });
});
