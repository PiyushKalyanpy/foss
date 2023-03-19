import './App.css';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';

function App() {
  return (
    <div className="App">
      <div className='home-page'>
        <Home />
      </div>

      <About />
      
    </div>
  );
}

export default App;
