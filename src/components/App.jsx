import { Routes, Route } from 'react-router-dom';
// import { HomePage } from '../pages/HomePage';
// import { MoviesPage } from '../pages/MoviesPage';
import { ToastContainer } from 'react-toastify';
import { Layout } from '../components/Layout/Layout';
import { NotFound } from '../pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Cast } from './Cast/Cast';
// import { Reviews } from './Reviews/Reviews';
import { lazy, Suspense } from 'react';

const HomePageLazy = lazy(() => import('../pages/HomePage'));
const MoviesPageLazy = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsLazy = lazy(() => import('../pages/MovieDetails'));
const CastLazy = lazy(() => import('./Cast/Cast'));
const ReviewsLazy = lazy(() => import('./Reviews/Reviews'));
// const NotFoundLazy = lazy(() => import('../pages/NotFound'));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <HomePageLazy />
              </Suspense>
            }
          />
          <Route
            path="/movies"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MoviesPageLazy />
              </Suspense>
            }
          />
          <Route
            path="/movies/:movieId"
            element={
              <Suspense fallback={<p>Loading...</p>}>
                <MovieDetailsLazy />
              </Suspense>
            }
          >
            <Route
              path="cast"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <CastLazy />
                </Suspense>
              }
            />
            <Route
              path="reviews"
              element={
                <Suspense fallback={<p>Loading...</p>}>
                  <ReviewsLazy />
                </Suspense>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
