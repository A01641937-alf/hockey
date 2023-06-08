import './App.css';
import VideoPlayer  from './componentes/Video/Video';
import Peleas from './componentes/Tarjeta/Prueba_api';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Peleas />} />
        <Route path="/" element={<Video />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
