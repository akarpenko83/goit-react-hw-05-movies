import axios from 'axios';

const fetchMovieDetails = async id => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=8cf662758bc2884725173cf48e8fe898`;

  try {
    const response = await axios.get(url);
    // console.log(response.data.results);
    if (!response.data) {
      throw new Error();
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }

  // ----------------------------------------------------------------
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4Y2Y2NjI3NThiYzI4ODQ3MjUxNzNjZjQ4ZThmZTg5OCIsInN1YiI6IjY0NTBmYzA5ZTk0MmVlMGUzNTcxYjM0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.grOb1-uRRniPzIdRrlE_imfXX1tY-0ag8yhVTmkB3wQ',
  //   },
  // };

  // fetch(
  //   `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
  //   options,
  // )
  //   .then(response => response.json())
  //   .then(response => console.log(response))
  //   .catch(err => console.error(err));
};
export default fetchMovieDetails;
