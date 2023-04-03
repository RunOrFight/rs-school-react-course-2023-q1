import React, { FC } from 'react';
import { IAudio } from 'types';

interface IAudioCardProps {
  audio: IAudio;
}

const AudioCard: FC<IAudioCardProps> = ({ audio }) => {
  const { title, genre, performer, recordQuality, releaseDate, isPublic, cover } = audio;
  return (
    <article
      data-testid="audio-card"
      className="p-3 bg-white rounded-md shadow-lg flex items-center gap-4 w-96 h-24  whitespace-nowrap"
    >
      <div className="shrink-0">
        <img src={cover} alt="image" className="h-16 w-16 object-cover" />
      </div>
      <div className="overflow-hidden w-2/4">
        <div className="text-xl font-medium text-black">{title}</div>
        <p className="text-sm">{performer}</p>
        <p className="text-slate-500">{genre}</p>
      </div>
      <div className="flex flex-col items-end w-1/4">
        <span className="text-slate-500 text-xl">{isPublic ? 'Public' : 'Private'}</span>
        <span
          className={`${
            recordQuality === 'studio' ? 'bg-green-500' : 'bg-orange-400 '
          } rounded-md px-0.5 text-white w-fit`}
        >
          {recordQuality}
        </span>
        <span className="text-sm">{releaseDate.toDateString()}</span>
      </div>
    </article>
  );
};

export default AudioCard;
