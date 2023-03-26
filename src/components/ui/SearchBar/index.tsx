import React from 'react';
import css from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { LOCAL_STORAGE_KEY } from '../../../constants';

interface SearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<object, SearchBarState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    const savedValue = localStorage.getItem(LOCAL_STORAGE_KEY.SEARCH);
    if (savedValue) {
      this.setState({ inputValue: savedValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem(LOCAL_STORAGE_KEY.SEARCH, this.state.inputValue);
  }

  handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputValue: event.target.value });
  }

  render(): React.ReactNode {
    return (
      <div className={css.container}>
        <input
          className={css.input}
          type="text"
          name="search"
          placeholder="Search for..."
          onChange={this.handleInputChange}
          value={this.state.inputValue}
        ></input>
        <button className={css.button} type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default SearchBar;
