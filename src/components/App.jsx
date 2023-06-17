import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import SharedLayout from './SharedLayout';
const HomePage = lazy(() => import('pages/HomePage'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() =>
  import('pages/MovieDetails'),
);
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

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
