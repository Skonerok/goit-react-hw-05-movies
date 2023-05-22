import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import {fetchMovieDetails} from 'service/API';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
    const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const { poster_path, title, vote_average, overview, genres } = movieData;
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    fetchMovieDetails(movieId).then(response => setMovieData(response));
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref.current} className={css.details__backLink}>
        Go back
      </Link>
      <div className={css.details__position}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            width="400"
          />
        )}
        <div className={css.details__info}>
          <h2>{title}</h2>
          <p>User score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres && (
            <ul>
              {genres.map(({ name }) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <h4 className={css.details__title}>Additional information</h4>
        <ul className={css.details__list}>
          <li>
            <Link to="cast" className={css.details__link}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={css.details__link}>
              Rewiews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};