import React from 'react';
import { actors } from '../data';

const actorArray = actors.map((actor) => {
  return (
    <div>
      <h1 className="actor"> {actor.name} </h1>
      <ul> Movies:
      {actor.movies.map((movie) => {
        return(
        <li>
          {movie}
        </li>)
      })}
      </ul>
    </div>
  )
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorArray}
    </div>
  );
};

export default Actors;
