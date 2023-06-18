import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { nanoid } from 'nanoid';
import fetchReviews from 'services/fetch-reviews';
import { Loading } from 'notiflix';

const Reviews = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    Loading.arrows();
    fetchReviews(movieId)
      .then(response => setResponse(response))
      .catch()
      .finally(
        (window.onload = () => {
          Loading.remove();
        }),
      );
  }, [movieId]);

  if (!response) {
    return (
      <div>We don`t have any reviews for this movie</div>
    );
  }

  return (
    <ul>
      {response.map(({ author, content }) => {
        return (
          <li key={nanoid()}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
