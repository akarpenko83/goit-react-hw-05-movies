import {
  StyledList,
  StyledListItem,
  StyledMovieName,
} from 'pages/HomePage/HomePage.styled';
import { useLocation } from 'react-router-dom';

export const Query = props => {
  const location = useLocation();

  return (
    <>
      <StyledList>
        {props.movies?.map(({ id, title, poster_path }) => {
          return (
            <StyledListItem key={id}>
              <StyledMovieName
                to={`/movies/${id}`}
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

export default Query;
