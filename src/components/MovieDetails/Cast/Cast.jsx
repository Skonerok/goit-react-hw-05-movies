import PropTypes from 'prop-types';

export const Cast = ({ cast }) => {
    return (
        <>
            {<ul> {cast.map(({ id, name, profile_path }) => {
                return (
                    <li key={id}>
                        <img width={150} src={`https://image.tmdb.org/t/p/original${profile_path}`} alt={name} />
                        <p>{name}</p>
                    </li>
                );
            })}
            </ul>
            }
        </>
    );
};

Cast.PropTypes = {
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            profile_path: PropTypes.string,
        })
    ),
};