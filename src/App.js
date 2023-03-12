import CardGame from "./components/CardGame/CardGame";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <section className="AreaGames">
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
        <CardGame/>
      </section>
    </>
  );
}

export default App;
