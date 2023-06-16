import axios from 'axios';

const fetchCast = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=8cf662758bc2884725173cf48e8fe898`;

  try {
    const response = await axios.get(url);

    if (!response.data) {
      throw new Error();
    }
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
export default fetchCast;
