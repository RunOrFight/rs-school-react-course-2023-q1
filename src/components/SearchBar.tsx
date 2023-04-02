import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LOCAL_STORAGE_KEY } from '../constants';

const SearchBar = () => {
  const initValue = localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH || '');
  const [inputValue, setInputValue] = useState(initValue);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY.SEARCH, inputValue!);
  }, [inputValue]);

  return (
    <div className="flex border w-fit p-4" role="searchbox">
      <input
        type="text"
        name="search"
        placeholder="Search for..."
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue!}
      ></input>
      <button className="" type="submit">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
