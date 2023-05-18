import { MovieItem } from "./MovieItem/MovieItem";
import PropTypes from 'prop-types';

export const MovieList = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, original_title, }) => {
                return <MovieItem key={id} title = { original_title } id = { id } />;
            })}
        </ul>
    );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};