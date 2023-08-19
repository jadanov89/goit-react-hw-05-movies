import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchInput, SearchButton, SearchForm } from './SearchBox.styled';

export const SearchBox = ({ changeURL }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearchQuery = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }

    changeURL(searchQuery);

    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search for movies"
        value={searchQuery}
        onChange={handleSearchQuery}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchForm>
  );
};

SearchBox.propTypes = {
  changeURL: PropTypes.func.isRequired,
};