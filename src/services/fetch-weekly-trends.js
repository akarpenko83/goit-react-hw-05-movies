import axios from 'axios';

const fetchTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=8cf662758bc2884725173cf48e8fe898`;

  try {
    const response = await axios.get(url);
    // console.log(response.data.results);
    if (response.data.results.length === 0) {
      throw new Error();
    }

    return response.data.results;
  } catch (error) {
    console.log('закончились фильмы');
  }
};
export default fetchTrendingMovies;
