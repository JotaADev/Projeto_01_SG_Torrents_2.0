import React from 'react'
import Header from './components/Header/Header';

const Game = () => {
  const [games, setGames] = React.useState([]);
  const [categorias, setCategorias] = React.useState([]);

  async function carregarGames() {
    const resposta = await fetch('./games.json');
    const gamesJSON = await resposta.json();
    setGames(gamesJSON);
  }

  React.useEffect(() => {
    carregarGames();
  }, []);

  async function carregarCategorias() {
    const resposta = await fetch('./categorias.json');
    const categoriasJSON = await resposta.json();
    setCategorias(categoriasJSON);
  }

  React.useEffect(() => {
    carregarCategorias();
  }, []);

  function ajustaPathName() {
    const pathName = window.location.pathname
    const pathNameEdit = pathName.replaceAll('/', '')
    const gamePath = pathNameEdit.replaceAll('%20', ' ')
    return gamePath
  }

  return (
    <>
      {games.filter((game) => {
        if(game.nomejogo === ajustaPathName()) {return game}}).map((game) => (
          <>
            <Header/>
            <section key={game.id} className='GameView'>
              <div className='GameViewContent'>
                <img className='GameViewImage' src={game.gameimg}></img>
                <div className='GameViewInfos'>
                  <h1>{game.nomejogo}</h1>
                  {categorias.filter((categoria) => {
                    if(categoria.id_categoria === game.categoria) {return(categoria)}}).map((categoria) => (
                      <p>Categoria: {categoria.nome_cat}</p>
                    ))
                  }
                  <p>Idiomas: {game.idiomas}</p>
                  <p>Realease By: {game.autor}</p>
                  <p>Tamanho do jogo: {game.tamanhojogo}</p>
                  <button onClick={() => {window.open(game.linkdownload)}}>Download</button>
                </div>
              </div>
              <div className='GameInstructions'>
                <p>Faça o download grátis do jogo {game.nomejogo} para PC, o download é via torrent e gratuito, basta ter uma conexão com a internet e um gerenciador de downloads torrent instalado.</p>
                <p>Abrindo o Magnet Link do {game.nomejogo}: Para baixar abrir Links Magneticos ou "Magnet Link", você terá que ter instalado no seu pc um software que gerencia o download na rede Torrent, recomendamos o <a href='https://www.qbittorrent.org/download.php'>Qbittorrent</a> por ser leve e conter menos anuncios ou o mais popular <a href='https://www.utorrent.com/intl/pt_br/downloads/win/'>uTorrent</a>, ambos são gratuitos.</p>
                <p>Instalando o {game.nomejogo} no PC: Jogos "Piratas" precisam ser crackeados (Ativado de forma forçada), Alguns jogos baixados já são crackeados e só precisam executar, mas na maioria será necessário fazer de forma manual, o que é normal e bem parecido em quase todos os jogos torrent. Siga o passo a passo para instalar seu {game.nomejogo} no PC sem erros!</p>
                <ul>
                  <li>Passo 1: Extraia o arquivo .ISO ou Emule-o</li>
                  <li>Passo 2: Instale o jogo pelo Setup.exe</li>
                  <li>Passo 3: Copie o conteúdo da pasta crack que está dentro do arquivo ISO</li>
                  <li>Passo 4: Cole no diretório do game e substitua.</li>
                </ul>
                <p>Dicas importantes:</p>
                <ul>
                  <li>- Desativar o Antivirus durante a instalação do Jogo.</li>
                  <li>- Bloqueie o Jogo em seu Firewall.</li>
                  <li>- Execute o jogo sempre como administrador para evitar erros e bugs.</li>
                </ul>
              </div>
            </section>
          </>
        ))
      }
    </>
  )
}

export default Game