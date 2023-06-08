import './App.css';
import { TitlePage } from './componentes/Titulo';
import VideoPlayer  from './componentes/Video';
import Peleas from './componentes/Prueba_api';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TitlePage/>
        </div>
        <div>
          <VideoPlayer />
        </div>
      </header>
      <div>
        <Peleas/>
      </div>
    </div>
  );
}

export default App;
