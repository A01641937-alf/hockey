import './App.css';
import Video  from './componentes/Video/Video';
import Peleas from './componentes/Tarjeta/Prueba_api';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';

import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/>
      <NavBar/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Prueba_api" element={<Peleas />} />
            <Route path="/Video" element={<Video />} />
          </Routes>
        </Router>
      <Footer/>
    </div>
  );
}

export default App;
