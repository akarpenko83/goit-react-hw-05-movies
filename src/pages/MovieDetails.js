import { useEffect, useRef, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import fetchMovieDetails from 'services/fetch-movie-details';
import getGenresList from 'services/getGenresList';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [response, setResponse] = useState();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => setResponse(response))
      .catch();
  }, [movieId]);

  if (response) {
    return (
      <>
        <Link to={backLinkRef.current}>Back</Link>
        <h2>Movie Name: {response.title}</h2>
        <img
          width={250}
          src={`https://image.tmdb.org/t/p/original${response.poster_path}`}
          alt={response.tagline}
        ></img>

        <p>User Score: {response.vote_average * 10}%</p>
        <h3>Overview</h3>
        <p>{response.overview}</p>
        <h4>Genres</h4>
        <p>{getGenresList(response.genres)}</p>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </>
    );
  }
  return <div>no details found</div>;
};

export default MovieDetails;