import { CharacterCard, SearchBar, Window } from 'components';
import { CardList } from 'components';
import { LOCAL_STORAGE_KEY } from '../constants';
import React, { KeyboardEventHandler, useState } from 'react';
import { ApiResponse, Character } from 'types';
import useFetch from 'hooks/useFetch';

const apiUrl = 'https://rickandmortyapi.com/api/character';

const Home = () => {
  const [isWindowVisible, setIsWindowVisible] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH) || ''
  );

  const [{ data, error, status }, refetch] = useFetch<ApiResponse<Character>>(apiUrl);

  const selectCharacter = (character: Character) => {
    setSelectedCharacter(character);
    setIsWindowVisible(true);
  };

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    const query = `?name=${searchValue}`;
    refetch(query);
  };

  return (
    <div tabIndex={0} onKeyDown={onKeyDown} className="flex flex-col  h-full">
      <div className=" h-20">
        <SearchBar
          isLoading={status === 'fetching'}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </div>

      {<div className="mb-5 pl-5">{searchValue && `Press Enter to show result`}</div>}

      {error ? (
        <pre className="text-3xl text-red-500 text-center">{JSON.stringify(error.message)}</pre>
      ) : (
        <CardList>
          {data?.results?.map((character) => (
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
