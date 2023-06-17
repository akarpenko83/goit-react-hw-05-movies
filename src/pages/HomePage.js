import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchTrendingMovies from 'services/fetch-weekly-trends';
import {
  StyledHeader,
  StyledList,
  StyledListItem,
  StyledMovieName,
} from './HomePage.styled';
import { Loading } from 'notiflix';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
              <Link
                to={`movies/${id}`}
                state={{ from: location }}
              >
                <LazyLoadImage
                  width={150}
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                />
                <StyledMovieName>{title}</StyledMovieName>
              </Link>
            </StyledListItem>
          );
        })}
      </StyledList>
    </>
  );
};
export default HomePage;
