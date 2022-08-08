import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { fetchFilmById } from '../API/api';

import { GoHome } from '../components/GoHome/GoHome';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilmById(movieId).then(data => {
      setDetails(data);
    });
  }, [movieId]);
  return (
    <>
      <GoHome />
      {details && (
        <div>
          <img
            width="250"
            src={
              details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
            }
            alt={details.title ? details.title : details.name}
          />
          <div>
            <h2>{details.original_title}</h2>
            <p>
              User score: <span>{details.vote_average}</span>
            </p>
            <p>
              Overview: <span>{details.overview}</span>
            </p>
            <p>
              Genres:{' '}
              <span>{details.genres.map(genre => genre.name).join(', ')}</span>
            </p>
          </div>
          <ul>
            <li>
              <NavLink state={location.state} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink state={location.state} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </>
  );
};
