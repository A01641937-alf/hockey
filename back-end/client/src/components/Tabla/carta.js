import React from 'react';
import './card.css'

export default function Row({nombre , numero, equipo, url}) {
  
    return (
        <div class="card">
        <img src={url} alt="Avatar"/>
        <div class="container">
            <h4>Nombre del jugador: {nombre}</h4>
            <p>Su numero fue el {numero} y su ultimo equipo fue {equipo}</p>
        </div>
        </div>
    );
}
