import { Suspense } from 'react';
import { useEffect, useRef, useState } from 'react';
import {
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import fetchMovieDetails from 'services/fetch-movie-details';
import getGenresList from 'services/getGenresList';
import {
  BackBtn,
  MoreInfoList,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState(null);
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => setResponse(response))
      .catch();
  }, [movieId]);

  if (!response) {
    return <div>no details found</div>;
  }
  return (
    <>
      <BackBtn to={backLinkRef.current}>Go Back</BackBtn>{' '}
      <img
        width={250}
        src={`https://image.tmdb.org/t/p/original${response.poster_path}`}
        alt={response.tagline}
      ></img>
      <h2>{response.title}</h2>
      <p>User Score: {response.vote_average * 10}%</p>
      <h3>Overview</h3>
      <p>{response.overview}</p>
      <h4>Genres</h4>
      <p>{getGenresList(response.genres)}</p>
      <p>Additional information</p>
      <MoreInfoList>
        <BackBtn to="cast">Cast</BackBtn>
        <BackBtn to="reviews">Reviews</BackBtn>
      </MoreInfoList>
      <Suspense
        fallback={<div>Loading... Please wait</div>}
      >
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
