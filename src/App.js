import React from 'react';
import CardGame from "./components/CardGame/CardGame";
import Header from "./components/Header/Header";

function App() {
  const [games, setGames] = React.useState([]);
  const [paginas, setPaginas] = React.useState([]);
  const [paginaAtual, setPaginaAtual] = React.useState(0);

  const jogosPorPagina = 51;
  const paginasExibidas = 7;

  async function carregarGames() {
    const resposta = await fetch('./games.json');
    const gamesJSON = await resposta.json();
    setGames(gamesJSON);
  }

  React.useEffect(() => {
    carregarGames();
  }, []);

  React.useEffect(() => {
    const paginasNovas = [];
    for (let i = 0; i < Math.ceil(games.length / jogosPorPagina); i++) {
      paginasNovas.push(games.slice(i * jogosPorPagina, (i + 1) * jogosPorPagina));
    }
    setPaginas(paginasNovas);
  }, [games]);

  function proximaPagina() {
    if (paginaAtual < paginas.length - 1) {
      setPaginaAtual(paginaAtual + 1);
    }
  }

  function paginaAnterior() {
    if (paginaAtual > 0) {
      setPaginaAtual(paginaAtual - 1);
    }
  }

  function paginaSelecionada(numeroPagina) {
    setPaginaAtual(numeroPagina);
  }

  function calcularIntervaloPaginas() {
    const numeroPaginas = paginas.length;
    let inicioIntervalo = paginaAtual - Math.floor(paginasExibidas / 2);
    let fimIntervalo = paginaAtual + Math.floor(paginasExibidas / 2);

    if (inicioIntervalo < 0) {
      inicioIntervalo = 0;
      fimIntervalo = Math.min(paginasExibidas - 1, numeroPaginas - 1);
    } else if (fimIntervalo >= numeroPaginas) {
      fimIntervalo = numeroPaginas - 1;
      inicioIntervalo = Math.max(numeroPaginas - paginasExibidas, 0);
    }

    return [inicioIntervalo, fimIntervalo];
  }

  const [inicioIntervalo, fimIntervalo] = calcularIntervaloPaginas();

  function Paginacao() {
    const numerosPagina = [];
    for (let i = inicioIntervalo; i <= fimIntervalo; i++) {
      numerosPagina.push(i);
    }

    return (
      <div className='BoxPages'>
        <button className='BtnPagesPrevious' onClick={paginaAnterior} disabled={paginaAtual === 0}>
          Anterior
        </button>
        {numerosPagina.map((numero) => (
          <button className='BtnPages' key={numero} onClick={() => paginaSelecionada(numero)}>
            {numero + 1}
          </button>
        ))}
        <button className='BtnPagesNext' onClick={proximaPagina} disabled={paginaAtual === paginas.length - 1}>
          Próxima
        </button>
      </div>
    );
  }

  return (
    <>
      <Header/>
      <section className="AreaGames">
        {paginas[paginaAtual]?.map((game) => (
          <CardGame
            key={game.id}
            img={game.gameimg}
            nomejogo={game.nomejogo}
            tamanho={game.tamanhojogo}
            linkdownload={game.linkdownload}
          />
        ))}
        <Paginacao/>
      </section>
    </>
  );
}

export default App;