import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navegacion/Navbar';
import Home from './Components/Paginas/Home';
import Stadistics from './Components/Paginas/Stadistics';
import Videos from './Components/Paginas/Videos';


function App() {
  return (
    <div className="App">
      
        <Router>
          <Navbar/>
            <Routes>
              <Route path='/' exact Component={Home}></Route>
              <Route path='/stadistics' Component={Stadistics}></Route>
              <Route path='/videos' Component={Videos}></Route>
            </Routes>
        </Router>

    </div>
  );
}

export default App;
