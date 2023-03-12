import React from "react";
import CardGame from "./components/CardGame/CardGame";
import Header from "./components/Header/Header";

function App() {
  const [games, setGames] = React.useState([]);

  async function fetchGames() {
    const response = await fetch('./games.json')
    const json = await response.json()
    setGames(json)
  }

  React.useEffect(() => {fetchGames()}, [])

  return (
    <>
      <Header/>
      <section className="AreaGames">
        {games.map((game) => (
          <CardGame img={game.gameimg}
          nomejogo={game.nomejogo}
          tamanho={game.tamanhojogo}
          linkdownload={game.linkdownload}/>
        ))}
      </section>
    </>
  );
}

export default App;
