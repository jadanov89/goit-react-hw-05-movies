import { useState, useEffect } from 'react';
import { getMoviesByName } from '../../Services/GetMovies';
import { useSearchParams, useLocation } from 'react-router-dom';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList, MoviesListItem, MoviesListLink } from './Movies.styled';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!queryName) {
      setSearchedMovies([]);
      return;
    }

    getMoviesByName(queryName).then(movies => {
      setSearchedMovies(movies.data.results);
    });
  }, [queryName]);

  const changeURL = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  return (
    <div>
      <SearchBox changeURL={changeURL} />
      {searchedMovies.length > 0 && (
        <MoviesList>
          {searchedMovies.map(movie => (
            <MoviesListItem key={movie.id}>
              <MoviesListLink
                to={`/movies/${movie.id}`}
                state={{ from: location }}
              >
                {movie.original_title}
              </MoviesListLink>
            </MoviesListItem>
          ))}
        </MoviesList>
      )}
    </div>
  );
};

export default Movies;