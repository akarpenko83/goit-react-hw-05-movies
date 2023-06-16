import axios from 'axios';

const fetchByQuery = async query => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&api_key=8cf662758bc2884725173cf48e8fe898`;

  try {
    const response = await axios.get(url);

    if (!response.data.results) {
      throw new Error();
    }
    // console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchByQuery;
