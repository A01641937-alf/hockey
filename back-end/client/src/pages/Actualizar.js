import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar.js';

function Apiprimera() {
  const id = document.getElementById('id_nuevo').value;
  const ultEquipo = document.getElementById('ultEquipo').value;

  const url = `/api/jugadores${id}`;

  axios.put(url, { Ult_equipo: ultEquipo })
    .then(response => {
      console.log(response.data);
      alert('El equipo del jugador ha sido actualizado');
    })
    .catch(error => {
      console.error(error);
      alert('Error al actualizar el equipo del jugador');
    });
}

const Actualizar = (props) => {
  return (
    <div>
      <Navbar/>
      <div>
        <h1>Modificar el equipo de un jugador</h1>
        <input type="text" placeholder="ID:" className="input" id='id_nuevo' />
        <input type="text" placeholder="Nuevo equipo:" className="input" id='ultEquipo' />
        <button className="defaultButton" onClick={Apiprimera}>Actualizar</button>
      </div>
    </div>
  );
}

export default Actualizar;
