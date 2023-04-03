import AudioCard from 'components/AudioCard';
import React, { FC } from 'react';
import { IAudio } from 'types';

interface IAudioCardListProps {
  audios: IAudio[];
}

const AudioCardList: FC<IAudioCardListProps> = ({ audios }) => {
  return (
    <div className="flex flex-wrap gap-4" role="list">
      {audios.map((audio) => (
        <AudioCard key={audio.id} audio={audio} />
      ))}
    </div>
  );
};
export default AudioCardList;
