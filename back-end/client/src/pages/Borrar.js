import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar.js';

const Borrar = () => {
  const Apieliminar = () => {
    const id = document.getElementById('id-eliminado').value;

    const url = `/api/jugadores${id}`;

    axios.delete(url)
      .then(response => {
        console.log(response.data);
        alert('El jugador ha sido eliminado de la base de datos');
      })
      .catch(error => {
        console.error(error);
        alert('Error eliminando al jugador');
      });
  };

  return (
    <>
      <div>
        <Navbar brand="Hockey" />
        <div>
          <h1 className="home-text07">Eliminar Jugador</h1>
          <div className="home-container1">
            <input type="text" placeholder="ID:" className="input" id='id-eliminado' />
          </div>
          <button className="defaultButton" onClick={Apieliminar}>Eliminar</button>
        </div>
      </div>
    </>
  );
}

export default Borrar;
