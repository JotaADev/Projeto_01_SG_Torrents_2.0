import React from 'react'
import Header from './components/Header/Header'

const Categorias = () => {
  const [categorias, setCategorias] = React.useState([]);

  async function recuperaCategorias() {
    const resposta = await fetch('./categorias.json');
    const categoriasJSON = await resposta.json();
    setCategorias(categoriasJSON);
  }

  React.useEffect(() => {
      recuperaCategorias();
  }, []);

  return (
    <>
      <Header/>
      <section className='Categorias'>
        {categorias.map((categoria) => (
          <a href='/'>
            <div className='Categoria' key={categoria.id_categoria}>{categoria.nome_cat}</div>
          </a>
        ))}
      </section>
    </>
  )
}

export default Categorias