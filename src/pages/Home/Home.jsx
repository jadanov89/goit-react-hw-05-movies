import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../Services/GetMovies';
import { TrendingList, TrendingItem, Link } from './Home.styled';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies().then(trending =>
      setTrendingMovies(trending.data.results)
    );
  }, []);

  return (
    <div>
      <h1>Trending today:</h1>
      <TrendingList>
        {trendingMovies.map(({ id, title }) => (
          <TrendingItem key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </TrendingItem>
        ))}
      </TrendingList>
    </div>
  );
};