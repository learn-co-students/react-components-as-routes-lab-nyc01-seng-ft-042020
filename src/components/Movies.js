import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => <div key={movie.title}>
        <h4>{movie.title}</h4>
        <p>{movie.time}</p>
        <p>{movie.metascore ? movie.metascore : "no score"}</p>
        {movie.genres.map(genre => <p>{genre}</p>)}
      </div>)}
    </div>
  );
};

export default Movies;
