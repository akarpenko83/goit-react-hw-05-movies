import { Link, useLocation } from 'react-router-dom';

export const Query = props => {
  const location = useLocation();

  return (
    <>
      <ul>
        {props.movies?.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
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

export default Query;
