import { Routes, Route } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route
            path="movies/:movieId"
            element={<MovieDetails />}
          >
            <Route path="cast" element={<Cast />} />

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={<div>PAGE NOT FOUND</div>}
        />
      </Routes>
    </>
  );
};
export default App;
