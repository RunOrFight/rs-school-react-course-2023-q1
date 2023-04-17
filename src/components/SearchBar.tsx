import React, { FC, KeyboardEventHandler, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setSearchText } from 'store';

interface SearchBarProps {
  isLoading?: boolean;
}

const SearchBar: FC<SearchBarProps> = ({ isLoading = false }) => {
  const searchText = useAppSelector((state) => state.search.text);
  const [value, setValue] = useState(searchText);
  const dispatch = useAppDispatch();

  const onKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    dispatch(setSearchText(value));
  };

  return (
    <div className="flex border w-full h-full p-4 bg-white rounded-3xl text-3xl" role="searchbox">
      <input
        className="w-full h-full bg-inherit font-semibold "
        type="text"
        name="search"
        placeholder="Search for..."
        onKeyDown={onKeyDown}
        onChange={(e) => setValue(e.target.value)}
        value={value}
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
