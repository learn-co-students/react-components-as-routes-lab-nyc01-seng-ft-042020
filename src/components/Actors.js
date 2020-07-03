import React from 'react';
import { actors } from '../data';

const Actors = () => {

  function renderMovies(actor) {
    return actor.movies.map(movie => <p>{movie}</p>)
  }

  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <div key={actor.name} className="actor">
        <h4>{actor.name}</h4>
        {renderMovies(actor)}
      </div>)}
    </div>
  );
};

export default Actors;
