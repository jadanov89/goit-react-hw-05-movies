import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastByMovieId } from '../../Services/GetMovies';
import { ActorPicture, CastWrapper, ActorInfoWrapper } from './Cast.styled';
import notFound from '../../images/not-found.png';

const Cast = () => {
  const [castActors, setCastActors] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    getCastByMovieId(movieId).then(response =>
      setCastActors(response.data.cast)
    );
  }, [movieId]);

  if (!castActors) {
    return null;
  }

  return (
    <CastWrapper>
      {castActors.map(castActor => {
        return (
          <ActorInfoWrapper key={castActor.credit_id}>
            <ActorPicture
              src={
                castActor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${castActor.profile_path}`
                  : notFound
              }
              alt=""
            />
            <p>{castActor.name}</p>
            <p>Character: {castActor.character}</p>
          </ActorInfoWrapper>
        );
      })}
    </CastWrapper>
  );
};

export default Cast;