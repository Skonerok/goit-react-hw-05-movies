import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {fetchMovieCast} from "service/API";
import css from './Cast.module.css';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
  
  useEffect(() => {
    fetchMovieCast(movieId).then(response => setCast(response.cast))
  }, [movieId]);
  
    return (
      <ul className={css.cast__list}>
        {cast.map(({ id, profile_path, name }) => (
          <li key={id} className={css.cast__item}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${profile_path}`}
                        alt={name}
                        width={150}
              />
            )}
            <p>{name}</p>
          </li>
        ))}
      </ul>
    );
}
