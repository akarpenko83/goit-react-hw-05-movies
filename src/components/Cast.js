import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from 'services/fetch-cast';
import { nanoid } from 'nanoid';

const Cast = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState();

  useEffect(() => {
    fetchCast(movieId)
      .then(response => setResponse(response))
      .catch();
  }, [movieId]);

  if (response) {
    return (
      <ul>
        {response.cast.map(
          ({ name, character, profile_path }) => {
            return (
              <li key={nanoid()}>
                <img
                  width={150}
                  height={225}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : 'https://placehold.co/150x225?text=not+available'
                  }
                  alt={response.tagline}
                ></img>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          },
        )}
      </ul>
    );
  }
};

export default Cast;
