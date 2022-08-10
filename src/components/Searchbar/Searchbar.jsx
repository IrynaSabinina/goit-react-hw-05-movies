import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
export const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');
  const handleSearchChange = event => {
    setSearch(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (search.trim() === '') {
      toast.error('Please enter film');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        value={search}
        onChange={handleSearchChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
