import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchCast from 'services/fetch-cast';
import { nanoid } from 'nanoid';
import { Loading } from 'notiflix';
import { StyledList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState();

  useEffect(() => {
    Loading.hourglass();
    fetchCast(movieId)
      .then(response => setResponse(response))
      .catch()
      .finally(
        (window.onload = () => {
          Loading.remove();
        }),
      );
  }, [movieId]);

  if (response) {
    return (
      <StyledList>
        {response.cast.map(
          ({ name, character, profile_path }) => {
            return (
              <li key={nanoid()}>
                <img
                  loading="lazy"
                  width={150}
                  height={225}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/original${profile_path}`
                      : 'https://placehold.co/150x225?text=not+available'
                  }
                  alt={response.tagline}
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          },
        )}
      </StyledList>
    );
  }
};

export default Cast;
