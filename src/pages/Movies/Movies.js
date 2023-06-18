import MovieList from 'components/MovieList';
import { useEffect, useRef, useState } from 'react';
import {
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import fetchByQuery from 'services/fetch-by-query';
import { BackBtn } from '../MovieDetails/MovieDetails.styled';
// import {
//   StyledForm,
//   StyledInput,
//   SubmitBtn,
// } from './Movies.styled';
import { Loading } from 'notiflix';
import SearchForm from 'components/SearchForm';

const Movies = () => {
  const [response, setResponse] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  // const handleSubmit = queryResult => {
  //   evt.preventDefault();
  //   const form = evt.currentTarget;
  //   const queryResult = form.elements.query.value;
  //   console.log('queryResult is: ', queryResult);

  //   if (!queryResult) {
  //     return alert('please enter a query');
  //   }

  //   setSearchParams({ query: queryResult });
  // };

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    Loading.hourglass();
    fetchByQuery(searchParams.get('query'))
      .then(response => {
        if (response.length === 0) {
          throw new Error(alert('No movies found'));
        }
        setResponse(response);
      })
      .catch()
      .finally(
        (window.onload = () => {
          Loading.remove();
        }),
      );
  }, [searchParams]);

  return (
    <>
      <BackBtn to={backLinkRef.current}>Go Back</BackBtn>

      <SearchForm />
      <MovieList movies={response} />
    </>
  );
};

export default Movies;
