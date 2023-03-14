import React from 'react'
import './SearchBar.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [games, setGames] = React.useState([]);

  async function carregarGames() {
    const resposta = await fetch('./games.json');
    const gamesJSON = await resposta.json();
    setGames(gamesJSON);
  }

  React.useEffect(() => {
    carregarGames()
  }, [])

  const handleSearch = (event) => {
    const results = games.filter((game) =>
    game.nomejogo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  const ResultSearch = () => {
    return(
      <div className='SearchBarResult'>
        {searchResults.map((game) => (
          <a key={game.id} href={game.nomejogo}>
            <div>
              <h4>{game.nomejogo}</h4>
            </div>
          </a>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className='SearchBarBox'>
        <input
          type="text"
          className='SearchBarInput'
          placeholder='Qual jogo está procurando?'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onKeyUp={handleSearch}
        />
        {searchTerm != '' ? <ResultSearch/> : null}
      </div>
    </>
  );
}

export default SearchBar