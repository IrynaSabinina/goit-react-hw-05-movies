import { useEffect, useState } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { fetchSearh } from '../API/api';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(searchParams);
  useEffect(() => {
    if (query === '') {
      return;
    } else {
      fetchSearh(query).then(data => {
        if (data.total_results > 0) {
          setSearchMovieList(data.results);
        } else {
          toast.error('Oops!');
        }
      });
    }
  }, [query]);

  const handleFormSubmit = searchNow => {
    if (query === searchNow) {
      return;
    }
    setQuery(searchNow);
    setSearchParams({ query: searchNow });
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {query && (
        <ul>
          {searchMovieList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
          <Outlet></Outlet>
        </ul>
      )}
    </>
  );
};
export default MoviesPage;
