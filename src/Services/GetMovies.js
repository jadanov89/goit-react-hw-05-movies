import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '5eab1676d0fa5d33a49abf50327da66d';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};

export const getMovieByID = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};

export const getCastByMovieId = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};

export const getMovieReviewsById = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};

export const getMoviesByName = async query => {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response;
  } catch (error) {
    return console.error(error.message);
  }
};