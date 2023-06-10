import React from 'react';
import Row from './carta.js';
import './card.css'

function Table() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/jugadores")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const table = data?.map(jugador => (
    <Row
      key={jugador.id}
      nombre={jugador.Nombre}
      numero={jugador.dorsal}
      equipo={jugador["Ult-equipo"]}
      url={jugador.imagen}
    />
  ));

  return (
      
      <div className='contenedorP'>
        <li>{table}</li>
      </div>

  );
}

export default Table;