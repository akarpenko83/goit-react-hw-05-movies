import Query from 'components/Query';
import { useEffect, useRef, useState } from 'react';
import {
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import fetchByQuery from 'services/fetch-by-query';
import { BackBtn } from './MovieDetails.styled';
import {
  StyledForm,
  StyledInput,
  SubmitBtn,
} from './Movies.styled';
import { Loading } from 'notiflix';

const Movies = () => {
  const [response, setResponse] = useState([]);
  const [query, setQuery] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const queryResult = form.elements.query.value;
    console.log('queryResult is: ', queryResult);

    if (!queryResult) {
      return alert('please enter a query');
    }
    setQuery(queryResult);
    setSearchParams({ query: queryResult });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    Loading.hourglass();
    fetchByQuery(query)
      // .then(Loading.hourglass())
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
  }, [query]);

  return (
    <>
      <BackBtn to={backLinkRef.current}>Go Back</BackBtn>

      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          onChange={evt =>
            setSearchParams({ query: evt.target.value })
          }
          type="text"
          name="query"
          value={searchParams.get('query') ?? ''}
        ></StyledInput>
        <SubmitBtn type="submit">Search</SubmitBtn>
      </StyledForm>
      <Query movies={response} />
    </>
  );
};

export default Movies;
