import { useEffect, useState } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { fetchSearh } from '../API/api';
import { Link } from 'react-router-dom';

export const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchMovieList, setSearchMovieList] = useState([]);

  useEffect(() => {
    if (query === '') {
      return;
    }
    fetchSearh(query).then(data => setSearchMovieList(data.results));
  }, [query]);

  const handleFormSubmit = searchNow => {
    if (query === searchNow) {
      return;
    }
    setQuery(searchNow);
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {query && (
        <ul>
          {searchMovieList.map(movie => (
            <li key={movie.id}>
              <Link to={movie.id}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
