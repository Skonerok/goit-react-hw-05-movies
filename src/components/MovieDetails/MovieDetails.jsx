import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '.../service/API';
import PropTypes from 'prop-types';

export const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        async function getFetchMovies(movieId) {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                alert('Page is not found :(');
            };
        }
        getFetchMovies();
    }, [movieId])
    if (Object.keys(movie).length > 0) {
        const { title, poster_path, genres, overview } = movie;
        const movieGenres = genres.map(genre => genre.name).join(', ');

        return (
            <>
                <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt={title} />
                <h2>{title}</h2>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <p>{movieGenres}</p>
            </>
        );
    }
};

MovieDetails.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.string,
  overview: PropTypes.string,
};
