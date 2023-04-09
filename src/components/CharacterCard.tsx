import React, { FC, HTMLAttributes } from 'react';
import { Character } from 'types';
import { Button } from '.';

interface CharacterCardProps extends HTMLAttributes<HTMLDivElement> {
  character: Character;
  variant?: 'brief' | 'detailed';
}

const CharacterCard: FC<CharacterCardProps> = ({ character, variant = 'brief', ...props }) => {
  const { image, status, name, species, gender, location, origin, created } = character;

  const style = {
    brief: {
      container: 'w-[347px] h-[182px]',
      subtitle: 'h-full',
    },
    detailed: {
      container: 'w-[500px] h-[250px]',
      subtitle: '',
    },
  };
  return (
    <div
      className={`flex ${style[variant].container} px-7  rounded-3xl shadow-md justify-center py-5 bg-white`}
      {...props}
    >
      <div className="h-full w-1/2 rounded-3xl">
        <img className="w-full h-full object-cover rounded-3xl" src={image} alt="character_image" />
      </div>
      <div className="w-1/2 flex flex-col h-full items-end text-right">
        <div className="h-7">
          <span className="text-neutral-500 text-xs">{status}</span>
        </div>
        <div className="h-14">
          <span className="font-semibold text-xl ">{name}</span>
        </div>
        <div className={`flex text-neutral-500 gap-5 ${style[variant].subtitle}`}>
          <span>{species} </span>
          <span>{gender}</span>
        </div>
        {variant === 'brief' && (
          <div>
            <Button>More Info</Button>
          </div>
        )}
        {variant === 'detailed' && (
          <div className="text-left p-5 flex flex-col gap-2 overflow-auto h-full">
            <span>Location: {location.name}</span>
            <span>Origin: {origin.name}</span>
            <span>Created: {new Date(created).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
