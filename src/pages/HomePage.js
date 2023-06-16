import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchTrendingMovies from 'services/fetch-weekly-trends';

export const HomePage = () => {
  const [response, setResponse] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies()
      .then(response => setResponse(response))
      .catch();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {response.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`movies/${id}`}
                state={{ from: location }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
