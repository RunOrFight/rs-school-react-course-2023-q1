import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { LOCAL_STORAGE_KEY } from '../constants';

interface SearchBarProps {
  searchValue?: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  isLoading?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ setSearchValue, searchValue = '', isLoading = false }) => {
  useEffect(() => () => localStorage.setItem(LOCAL_STORAGE_KEY.SEARCH, searchValue!));

  return (
    <div className="flex border w-full h-full p-4 bg-white rounded-3xl text-3xl" role="searchbox">
      <input
        className="w-full h-full bg-inherit font-semibold "
        type="text"
        name="search"
        placeholder="Search for..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue!}
      ></input>
      <button type="button">
        {
          <FontAwesomeIcon
            className={isLoading ? 'animate-spin' : ''}
            icon={isLoading ? faSpinner : faSearch}
          />
        }
      </button>
    </div>
  );
};

export default SearchBar;
