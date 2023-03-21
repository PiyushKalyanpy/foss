import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import CoDev from './Pages/CoDev';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="App">
      <div className='home-page'>
        <CoDev />
      </div>

      <div>
        <About />
      </div>

      <div>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
      
      
    </div>
  );
}

export default App;
