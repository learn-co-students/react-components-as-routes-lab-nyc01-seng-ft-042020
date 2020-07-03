import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <div key={director.name}>
        <h4>{director.name}</h4>
        {director.movies.map(movie => <p>{movie}</p>)}
      </div>)}
    </div>
  );
}

export default Directors
