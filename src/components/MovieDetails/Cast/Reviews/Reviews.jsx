import PropTypes from 'prop-types';

export const Reviews = ({reviews}) => {
    return (
        <>
            <ul>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                        <p>{author}</p>
                        <p>{content}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};