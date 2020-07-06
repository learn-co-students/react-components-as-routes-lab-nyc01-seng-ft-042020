import React from 'react';
import { directors } from '../data';

const renderDirectors = () => {
  return directors.map((director, i)=>
  <div key={i}>
    <h2>{director.name}</h2>
    {director.movies.map((movie, i)=><ul key={i}>{movie}</ul>)}
  </div>
  )
}

const Directors = () => {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors()}
    </div>
  );
}

export default Directors
