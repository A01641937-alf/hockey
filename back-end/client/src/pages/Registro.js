import './App.css';
import React from "react";
import axios from 'axios';
import Navbar from '../components/Navbar/Navbar.js';

const Registro = () => {
  const Apiregistros = () => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const equipo = document.getElementById('equipo').value;
    const dorsal = document.getElementById('dorsal').value;
    const imagen = document.getElementById('imagen').value;

    const uri = `/api/jugadores`;

    axios.post(uri, { id, nombre, equipo, dorsal, imagen })
      .then(response => {
        console.log(response.data);
        alert('El jugador ha sido registrado');
      })
      .catch(error => {
        console.error(error);
        alert('Error registrando al jugador');
      });
  };

  return (
    <>
      <div>
        <Navbar brand="Hockey" />
        <div >
          <h1 className="home-text08">Registrar Jugador</h1>
          <div className="home-container1">
            <input type="text" placeholder="ID:" className="input" id='id' />
            <input type="text" placeholder="Nombre:" className="input" id='nombre' />
            <input type="text" placeholder="Equipo:" className="input" id='equipo' />
            <input type="text" placeholder="Dorsal:" className="input" id='dorsal' />
            <input type="text" placeholder="URL de la imagen:" className="input" id='imagen' />
          </div>
          <button className="defaultButton" onClick={Apiregistros}>Registrar</button>
        </div>
      </div>
    </>
  );
}

export default Registro;
