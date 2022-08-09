import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrandFilm } from '../API/api';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrandFilm().then(data => setFilms(data.results));
  }, []);

  return (
    <>
      <h1>Tranding films</h1>
      <ul>
        {films.map(film => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={location}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
export default HomePage;
