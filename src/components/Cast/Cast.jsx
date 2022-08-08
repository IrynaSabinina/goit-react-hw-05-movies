import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fethFilmCast } from '../../API/api';

export const Cast = () => {
  const [credits, setCredits] = useState();
  const { movieId } = useParams();

  useEffect(() => {
    fethFilmCast(movieId).then(({ data }) => {
      setCredits(data);
    });
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul>
          {credits.cast && credits.cast.length > 0 ? (
            credits.cast.map(credit => (
              <li key={credit.id}>
                <img
                  src={
                    credit.profile_path
                      ? `https://image.tmdb.org/t/p/w300${credit.profile_path}`
                      : `https://i.gifer.com/origin/3f/3fcf565ccc553afcfd89858c97304705.gif`
                  }
                  alt={credit.name}
                />
                <p>{credit.name}</p>
                <p>{credit.character}</p>
              </li>
            ))
          ) : (
            <b>Nobody was found!</b>
          )}
        </ul>
      )}
    </>
  );
};
