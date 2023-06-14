import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import fetchTradingMovies from 'services/fetch-weekly-trends';

export const HomePage = () => {
  const [response, setResponse] = useState([]);
  const location = useLocation();

  console.log('🚀 ~ HomePage ~ location:', location);

  useEffect(() => {
    fetchTradingMovies()
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
