import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';
import { ToastContainer } from 'react-toastify';
import { Layout } from '../components/Layout/Layout';
import { NotFound } from '../pages/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import { MovieDetails } from 'pages/MovieDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};
