import React from 'react';
import { movies } from '../data';

const movieArray = movies.map((movie) => {
  return (
  <div>
    <p>Movie title: {movie.title}</p>
    <p>Movie time: {movie.time}</p>
      <ul> Genres: 
        {movie.genres.map((genre) => {
          return <li>{genre}</li>
        })}
     </ul>
  </div>)
})

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movieArray}
    </div>
  );
};

export default Movies;
