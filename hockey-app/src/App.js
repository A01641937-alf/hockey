import './App.css';
import Video  from './componentes/Video/Video';
import Peleas from './componentes/Tarjeta/Prueba_api';
import Footer from './componentes/Footer/Footer';
import NavBar from './componentes/NavBar/NavBar';
import Home from './componentes/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Peleas />} />
        <Route path="/" element={<Video />} />
      </Routes>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
