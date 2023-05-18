import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MovieItem = ({ id, title }) => {
  return (
    <>
      <li>
        <Link to={`/movies/${id}`}>
          <p>{title}</p>
        </Link>
      </li>
    </>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};