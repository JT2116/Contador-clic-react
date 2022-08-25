import './App.css';
import Boton from './comp/Boton.js';
import Contador from './comp/Contador.js';
import jtLogo from './img/jt-logo.png';
import {useState} from 'react';

function App() {

  const [numero,setNumero] = useState(0);

  const contadorClic = () => {
    setNumero(numero + 1);
  }; 
  
  const reiniciarContador = () => {
    setNumero(0);
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src={jtLogo}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numero={numero} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={contadorClic}                  
        />

        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} 
        />
      </div>

    </div>
  );
}

export default App;
