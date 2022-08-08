import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from '../../API/api';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetchFilmReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  return (
    <>
      {reviews && (
        <ul>
          {reviews && reviews.length > 0 ? (
            reviews.map(revie => (
              <li key={revie.id}>
                <div>
                  <b>{revie.author}:</b>
                  <p>{revie.content}</p>
                </div>
              </li>
            ))
          ) : (
            <b>No reviews yet!</b>
          )}
        </ul>
      )}
    </>
  );
};
