import React from 'react'
import Header from './components/Header/Header'
import CardGame from './components/CardGame/CardGame'

const Categorias = () => {
  const [viewCategoria, setViewCategoria] = React.useState(true);
  const [cat, setCat] = React.useState('');
  const [categorias, setCategorias] = React.useState([]);

  async function recuperaCategorias() {
    const resposta = await fetch('./categorias.json');
    const categoriasJSON = await resposta.json();
    setCategorias(categoriasJSON);
  }

  React.useEffect(() => {
      recuperaCategorias();
  }, []);

  function processaCategoria(event) {
    const categoria = event.target.id
    if(categoria != '') {
      setViewCategoria(false)
      setCat(categoria)
    }
  }

  const ListaCategorias = () => {
    return (
      <section className='Categorias'>
        {categorias.map((categoria) => (
          <a onClick={processaCategoria}>
            <div className='Categoria' id={categoria.id_categoria} key={categoria.id_categoria}>{categoria.nome_cat}</div>
          </a>
        ))}
      </section>
    )
  }

  const GamesCategoria = () => {
    const [games, setGames] = React.useState([]);
    const [gamesCat, setGamesCat] = React.useState([]);
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
      const filteredGames = games.filter((game) => game.categoria === cat);
      setGamesCat(filteredGames);
    }, [cat, games]);

    React.useEffect(() => {
        const paginasNovas = [];
        for (let i = 0; i < Math.ceil(gamesCat.length / jogosPorPagina); i++) {
            paginasNovas.push(gamesCat.slice(i * jogosPorPagina, (i + 1) * jogosPorPagina));
        }
        setPaginas(paginasNovas);
    }, [gamesCat]);

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
        <section className="AreaGames">
          {paginas[paginaAtual]?.map((game) => (
          <CardGame
              key={game.id}
              jogo={game.nomejogo}
              img={game.gameimg}
              nomejogo={game.nomejogo}
              tamanho={game.tamanhojogo}
              linkdownload={game.linkdownload}
          />
          ))}
          <Paginacao/>
        </section>
      </>
    )
  }

  const AlternaCategoria = () => {
    if(viewCategoria === true) {
      return <ListaCategorias/>
    } else {
      return <GamesCategoria/>}
  }

  return (
    <>
      <Header/>
      <AlternaCategoria/>
    </>
  )
}

export default Categorias