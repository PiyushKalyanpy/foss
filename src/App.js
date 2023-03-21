import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import CoDev from './Pages/CoDev';

function App() {

  return (
    <div className="App">
      <div className='home-page'>
        <CoDev />
      </div>

      <About />
      
    </div>
  );
}

export default App;
