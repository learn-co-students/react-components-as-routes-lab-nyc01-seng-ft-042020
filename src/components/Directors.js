import React from 'react';
import { directors } from '../data';

const directorArray = directors.map((director) => {
  return (
    <div>
      <h1> {director.name} </h1>
      <ul> Movies:
      {director.movies.map((movie) => {
        return(
        <li>
          {movie}
        </li>)
      })}
      </ul>
    </div>
  )
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directorArray}
    </div>
  );
}

export default Directors
