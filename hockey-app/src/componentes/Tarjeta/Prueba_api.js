import React from 'react';
import data from '../../APIs/hockey_API.json';

const Peleas = () => {
  return (
    <>
      <h1>Lista de peleas de hockey</h1>
      <ul>
      {Object.values(data).map((fight) => (
        <li key={fight.id}>
          <div class="card text-center">
            <div class="card-header">
              Featured
            </div>
            <div class="card-body">
              <h5 class="card-title">{fight.fighter1} vs {fight.fighter2}</h5>
              <p class="card-text">La fecha del combate fue el {fight.date}</p>
              <p class="card-text">El combate duro {fight.time}</p>
              <a href={fight.video}>Ver video</a>
            </div>
            <div class="card-footer text-body-secondary">
              2 days ago
            </div>
          </div>
        </li>
        ))}
      </ul>
    </>
    
  );
};

export default Peleas;
