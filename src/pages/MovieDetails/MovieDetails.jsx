import { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieByID } from '../../Services/GetMovies';

import {
  MoviePosterImage,
  DetailsWrapper,
  InfoWrapper,
  GenresWrapper,
  MovieGenre,
  InfoLink,
  InfoLinksList,
  GenresTitle,
  BackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    getMovieByID(Number(movieId)).then(movie => setMovieInfo(movie.data));
  }, [movieId]);

  const makeMovieDate = date => {
    const fitDate = date.slice(0, 4);
    return fitDate;
  };

  const backLinkRef = location.state?.from ?? '/';

  if (!movieInfo) {
    return null;
  }

  return (
    <>
      <DetailsWrapper>
        <MoviePosterImage
          src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`}
          alt=""
        />
        <InfoWrapper>
          <h2>{`${movieInfo.title} (${makeMovieDate(
            movieInfo.release_date
          )})`}</h2>
          <p>
            User score: {((movieInfo.vote_average / 10) * 100).toFixed(0)} %
          </p>
          <h3>Overveiw:</h3>
          <p>{movieInfo.overview}</p>
          <GenresTitle>Genres:</GenresTitle>
          <GenresWrapper>
            {movieInfo.genres.map(genre => (
              <MovieGenre key={genre.id}>{genre.name}</MovieGenre>
            ))}
          </GenresWrapper>
          <BackLink to={backLinkRef}>Go back</BackLink>
        </InfoWrapper>
      </DetailsWrapper>
      <div>
        <InfoLinksList>
          <li>
            <InfoLink to="cast" state={{ from: backLinkRef }}>
              Cast
            </InfoLink>
          </li>
          <li>
            <InfoLink to="reviews" state={{ from: backLinkRef }}>
              Reviews
            </InfoLink>
          </li>
        </InfoLinksList>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;