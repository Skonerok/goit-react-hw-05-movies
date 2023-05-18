import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../service/API';
import { Cast } from '../components/MovieDetails/Cast/Cast';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});

  useEffect(() => {
    const getCastInfo = async id => {
      try {
        const data = await fetchMovieCast(id);
        const result = data.cast.map(
          ({ name, character, profile_path, id }) => ({
            name,
            character,
            profile_path,
            id,
          })
        );
        if (!result.length) {
          throw new Error('There is no information');
        }
        setCast(result);
      } catch (error) {
        alert(error.message);
      }
    };
    getCastInfo(movieId);
  }, [movieId]);

  if (Object.keys(cast).length > 0)
    return (
      <>
        <Cast cast={cast} />
      </>
    );
};
