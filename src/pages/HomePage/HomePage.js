import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import fetchTrendingMovies from 'services/fetch-weekly-trends';
import {
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledMovieName,
} from './HomePage.styled';
import { Loading } from 'notiflix';

const HomePage = () => {
  const [response, setResponse] = useState([]);
  const location = useLocation();

  useEffect(() => {
    Loading.arrows();
    fetchTrendingMovies()
      .then(response => setResponse(response))
      .then(
        (window.onload = () => {
          Loading.remove();
        }),
      )
      .catch();
  }, []);

  return (
    <>
      <StyledHeader>Trending today</StyledHeader>
      <StyledList>
        {response.map(({ id, title, poster_path }) => {
          return (
            <StyledListItem key={id}>
              <StyledMovieName
                to={`movies/${id}`}
                state={{ from: location }}
              >
                <img
                  loading="lazy"
                  width={200}
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/original${poster_path}`
                      : 'https://placehold.co/150x225?text=not+available'
                  }
                  alt={title}
                />
                {title}
              </StyledMovieName>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
};
export default HomePage;
