import { AudioCard, CardList, Form } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import React from 'react';
import { addFormSubmitions } from 'store';
import { IAudio } from 'types';

const FormPage = () => {
  const formSubmitions = useAppSelector((state) => state.form.submitions);
  const dispatch = useAppDispatch();

  const addAudio = (newAudio: Omit<IAudio, 'id'>) => {
    dispatch(addFormSubmitions(newAudio));
  };

  return (
    <div className="p-4">
      <Form addAudio={addAudio}></Form>
      <CardList>
        {formSubmitions.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </CardList>
    </div>
  );
};

export default FormPage;
