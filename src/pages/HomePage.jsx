import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrandFilm } from '../API/api';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetchTrandFilm().then(data => setFilms(data.results));
  }, []);

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={film.id}>{film.title}</Link>
        </li>
      ))}
    </ul>
  );
};
