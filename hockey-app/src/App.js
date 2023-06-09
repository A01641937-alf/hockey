import './App.css';
import Video  from './componentes/Video/Video';
import Peleas from './componentes/Tarjeta/Prueba_api';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;