import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchSearchingMovies } from 'service/API';
import css from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieName = searchParams.get('movieName');


  useEffect(() => {
    if (movieName) {
      fetchSearchingMovies(movieName).then(response =>
        setMovie(response.results)
      );
    }
  }, [movieName]);

  const handleChange = e => {
    const query = e.target.value;
    setQuery(query);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query === '') {
      return;
    }

    setSearchParams({ movieName: query });
    fetchSearchingMovies(movieName).then(response =>
      setMovie(response.results)
    );

    setQuery('');
  };

  return (
    <main>
      <form onSubmit={handleSubmit} className={css.search__form}>
        <label>
          <input
            className={css.search__input}
            type="text"
            value={query}
            onChange={handleChange}
          />
        </label>
        <button className={css.search__button}>Search</button>
      </form>

      <ul className={css.movie__list}>
        {movie.length !== 0 ? (
          movie.map(({ id, title, poster_path }) => (
            <li className={css.movie__item} key={id}>
              <Link to={`${id}`} state={{ from: location }} className={css.movie__link}>
                {poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                    alt=""
                  />
                )}
                <p className={css.movie__name}>{title}</p>
              </Link>
            </li>
          ))
        ) : (
          <b>Please use the form above to search for a movie</b>
        )}
      </ul>
    </main>
  );
};

export default Movies;