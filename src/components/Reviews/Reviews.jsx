import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {fetchMovieReview} from 'service/API';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReview(movieId).then(response => setReviews(response.results));
  }, [movieId]);

  return (
    <ul className={css.reviews__list}>
      {reviews.map(({ author, content }) => (
        <li className={css.reviews__item}>
          <p className={css.reviews__author}>Author: {author}.</p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
