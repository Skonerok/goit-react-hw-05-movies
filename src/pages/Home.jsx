import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies } from 'service/API';
import css from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetchTrendingMovies()
        .then(response => response.results)
        .then(results => setMovies(results));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <main>
      <h1 className={css.trend__title}>Trending today</h1>
      <ul className={css.trend__list}>
        {movies.map(({ id, title, poster_path }) => (
          <li className={css.trend__item} key={id}>
            <Link to={`movies/${id}`} className={css.trend__link}>
              <img
                src={`https://image.tmdb.org/t/p/w200${poster_path}`}
                alt=""
              />
              <p className={css.trend__name}>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;