import { AudioCard, CardList, Form } from 'components';
import React, { useState } from 'react';
import { IAudio } from 'types';

const FormPage = () => {
  const [audios, setAudios] = useState<IAudio[]>([]);

  const addAudio = (newAudio: Omit<IAudio, 'id'>) => {
    setAudios((prev) => {
      return [...prev, { ...newAudio, id: prev.length + 1 }];
    });
  };

  return (
    <div className="p-4">
      <Form addAudio={addAudio}></Form>
      <CardList>
        {audios.map((audio) => (
          <AudioCard key={audio.id} audio={audio} />
        ))}
      </CardList>
    </div>
  );
};

export default FormPage;
