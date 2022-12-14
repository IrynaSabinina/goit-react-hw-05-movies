import { useEffect, useState } from 'react';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { fetchSearh } from '../API/api';
import { Link, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { GoHome } from '../components/GoHome/GoHome';

const MoviesPage = () => {
  const [searchMovieList, setSearchMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  console.log(searchMovieList);
  useEffect(() => {
    if (query === '') {
      return;
    } else {
      fetchSearh(query).then(data => {
        console.log(data.results);

        if (data.total_results > 0) {
          setSearchMovieList(data.results);
        } else {
          toast.error('Oops!');
        }
      });
    }
  }, [query]);

  const handleFormSubmit = searchNow => {
    setSearchParams({ query: searchNow });
  };
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {query && (
        <>
          {query.length === 0 ? (
            <>
              <GoHome />
            </>
          ) : (
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
      )}
    </>
  );
};
export default MoviesPage;
