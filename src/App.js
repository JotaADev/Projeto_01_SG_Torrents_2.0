import React from 'react';
import Categorias from './Categorias';
import TermosDeUso from './TermosDeUso';
import Home from './Home';
import Game from './Game';

function App() {
  function carregaPagina() {
    const pagina = window.location.pathname
    switch (pagina) {
      case '/':
        return <Home/>
      case '/Categorias':
        return <Categorias/>
      case '/Termos%20de%20Uso':
        return <TermosDeUso/>
      case pagina:
        return <Game/>
    }
  }

  return (
    <>
      {carregaPagina()}
    </>
  );
}

export default App;