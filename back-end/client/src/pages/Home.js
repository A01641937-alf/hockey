import './App.css';
import React from "react";
import Navbar from '../components/Navbar/Navbar.js';
import Table from '../components/Tabla/listas.js';

const Home = (props) => {
  return (
    <>
    <div className='derecha'>
    <Navbar brand ="Mejores jugadores" />
    <div > 
      <Table />
    </div>
    </div>
    </>
  );
}
export default Home;
