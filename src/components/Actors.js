import React from 'react';
import { actors } from '../data';

const renderActors = () => {
  return actors.map((actor, i) =>
  <div key={i}>
    <h2>{actor.name}</h2>
    {actor.movies.map((movie, i)=><ul key={i}>{movie}</ul>)}
  </div>
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors()}
    </div>
  );
};

export default Actors;
