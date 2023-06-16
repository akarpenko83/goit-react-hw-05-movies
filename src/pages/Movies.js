import Query from 'components/Query';
import { useEffect, useRef, useState } from 'react';
import {
  Link,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import fetchByQuery from 'services/fetch-by-query';

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
    fetchByQuery(query)
      .then(response => setResponse(response))
      .catch();
  }, [query]);

  return (
    <>
      <Link to={backLinkRef.current}>Back</Link>

      <form onSubmit={handleSubmit}>
        <input
          onChange={evt =>
            setSearchParams({ query: evt.target.value })
          }
          type="text"
          name="query"
          value={searchParams.get('query') ?? ''}
        ></input>
        <button type="submit">Search</button>
      </form>
      <Query movies={response} />
    </>
  );
};

export default Movies;
