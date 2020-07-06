import React from 'react';
import { movies } from '../data';

const renderMovies = () => {
  return movies.map((movie, i)=>
    <div key={i}>
      <h2>{movie.title}</h2>
      <h3>{movie.time} minutes</h3>
      {movie.genres.map((genre, i)=><ul key={i}>{genre}</ul>)}
    </div>
  )
}

const Movies = () => {
  return (
    <div>
        <h1>Movies</h1>
        <div>
          {renderMovies()}
        </div>
    </div>
  );
};

export default Movies;
