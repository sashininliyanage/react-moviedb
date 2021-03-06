import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrump from './BreadCrump';
import MovieInfo from './MovieInfo';
import MovieInfoBar from './MovieInfoBar';
import Actor from './Actor';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';


// Image
import NoImage from '../images/no-image.jpg';


const Movie = () => {
  const { movieId } = useParams();
  
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);
  sessionStorage.setItem('movieData', JSON.stringify(movie));

  if(loading) return <Spinner/>
  if(error) return <div>Something went wrong</div>
  
  return (
    <>
      <BreadCrump movieTitle={movie.title}/>
      <MovieInfo movie={movie}/>
      {/* <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/> */}
      <MovieInfoBar buttons={["actors","about","videos","similar movies"]}/>
      <Outlet movie={movie}/>
    </>
    
  );
};
export default Movie;