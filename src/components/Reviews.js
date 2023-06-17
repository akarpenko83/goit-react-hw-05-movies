import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { nanoid } from 'nanoid';
import fetchReviews from 'services/fetch-reviews';
import { Loading } from 'notiflix';

const Reviews = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState();

  useEffect(() => {
    Loading.arrows();
    fetchReviews(movieId)
      .then(response => setResponse(response))
      .then(
        (window.onload = () => {
          Loading.remove();
        }),
      )
      .catch();
  }, [movieId]);

  if (response) {
    console.log(response.length);
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
  }
  return (
    <div>We don`t have any reviews for this movie</div>
  );
};

export default Reviews;
