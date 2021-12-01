import React from 'react';
import { useParams } from 'react-router-dom';
// Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

// Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrump from './BreadCrump';

// Hook
import { useMovieFetch } from '../hooks/useMovieFetch';


// Image
import NoImage from '../images/no-image.jpg';

const Movie = () => {
  const { movieId } = useParams();
  
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if(loading) return <Spinner/>
  if(error) return <div>Something went wrong</div>
  
  return (
    <>
      <BreadCrump movieTitle={movie.original_title}/>
    </>
  );
};

export default Movie;