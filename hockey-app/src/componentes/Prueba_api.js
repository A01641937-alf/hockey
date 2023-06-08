import React from 'react';
import data from './hockey_API.json';

const Peleas = () => {
  return (
    <div>
      <h1>Lista de peleas de hockey</h1>
      <ul>
        {Object.values(data).map((fight) => (
          <li key={fight.id}>
            <h2>{fight.fighter1} vs {fight.fighter2}</h2>
            <p>Date: {fight.date}</p>
            <p>Time: {fight.time}</p>
            <a href={fight.video}>Ver video</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Peleas;
