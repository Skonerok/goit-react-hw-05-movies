import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'e0ee8c9c31fb9f573eda606c9b32d207';

const params = {
    params: {
        api_key: API_KEY
    }
};


export const fetchTrendingMovies = async () => {
    try {
        const response = await axios.get(`/trending/movie/week`, params)
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchSearchingMovies = async movie => {
    try {
        const response = await axios.get(`/search/movie?query=${movie}`, params);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchMovieDetails = async movieId => {
    try {
        const response = await axios.get(`/movie/${movieId}`, params);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchMovieCast = async movieId => {
    try {
        const response = await axios.get(`/movie/${movieId}/credits`, params);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchMovieReview = async movieId => {
    try {
        const response = await axios.get(`/movie/${movieId}/reviews`, params);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
};
