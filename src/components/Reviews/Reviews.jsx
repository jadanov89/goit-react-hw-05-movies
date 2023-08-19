import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviewsById } from '../../Services/GetMovies';
import { ReviewWrapper, ReviewContent, NoReviews } from './Reviews.styled';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviewsById(movieId).then(response =>
      setMovieReviews(response.data.results)
    );
  }, [movieId]);
  if (!movieReviews) {
    return null;
  }

  return (
    <div>
      {!movieReviews.length && (
        <NoReviews>
          <p>Sorry we don't have any reviews for this movie</p>
        </NoReviews>
      )}
      {movieReviews.map(review => {
        return (
          <ReviewWrapper key={review.id}>
            <h3>Author: {review.author}</h3>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewWrapper>
        );
      })}
    </div>
  );
};

export default Reviews;