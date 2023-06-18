import { useSearchParams } from 'react-router-dom';
import {
  StyledForm,
  StyledInput,
  SubmitBtn,
} from '../pages/Movies/Movies.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const onSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const queryResult = form.elements.query.value;
    console.log('queryResult is: ', queryResult);

    if (!queryResult) {
      return alert('please enter a query');
    }

    setSearchParams({ query: queryResult });
  };
  return (
    <>
      <StyledForm onSubmit={onSubmit}>
        <StyledInput
          // onChange={evt =>
          //   setSearchParams({ query: evt.target.value })
          // }
          type="text"
          name="query"
          // value={searchParams.get('query') ?? ''}
        ></StyledInput>
        <SubmitBtn type="submit">Search</SubmitBtn>
      </StyledForm>
    </>
  );
};

export default SearchForm;
