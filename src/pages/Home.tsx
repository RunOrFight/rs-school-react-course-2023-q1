import { CharacterCard, SearchBar, Window } from 'components';
import { CardList } from 'components';
import React, { useState } from 'react';
import { Character } from 'types';
import { useAppSelector } from 'hooks';
import { useGetCharactersByNameQueryQuery } from 'api';

const Home = () => {
  const [isWindowVisible, setIsWindowVisible] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  const searchText = useAppSelector((state) => state.search.text);
  const { data, error, isFetching } = useGetCharactersByNameQueryQuery(searchText);

  const selectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setIsWindowVisible(true);
  };

  return (
    <div className="flex flex-col  h-full">
      <div className=" h-20">
        <SearchBar isLoading={isFetching} />
      </div>

      {<div className="mb-5 pl-5">{searchText && `Press Enter to show result`}</div>}

      {error ? (
        <pre className="text-3xl text-red-500 text-center">{JSON.stringify(error)}</pre>
      ) : (
        <CardList>
          {data?.results.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              onClick={() => selectCharacter(character)}
            />
          ))}
        </CardList>
      )}

      {isWindowVisible && selectedCharacter && (
        <Window setIsVisible={setIsWindowVisible}>
          <CharacterCard character={selectedCharacter} variant="detailed" />
        </Window>
      )}
    </div>
  );
};

export default Home;
