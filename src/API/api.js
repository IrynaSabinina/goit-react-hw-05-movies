import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '5e2c39ea82f0a596cc3267d12df3039c';

const defaultParams = {
  api_key: API_KEY,
};

const moviesApi = axios.create({
  baseURL: BASE_URL,
  params: defaultParams,
});

export const fetchTrandFilm = async () => {
  const { data } = await moviesApi.get('/trending/movie/week');
  return data;
};

export const fetchSearh = async query => {
  const { data } = await moviesApi.get('/search/movie', {
    params: { query },
  });
  return data;
};

export const fetchFilmById = async id => {
  const { data } = await moviesApi.get(`/movie/${id}`);
  return data;
};

export const fethFilmCast = async id => {
  const { data } = await moviesApi.get(`/movie/${id}/credits`);
  return { data };
};

export const fetchFilmReviews = async id => {
  const { data } = await moviesApi.get(`/movie/${id}/reviews`);
  return { data };
};
