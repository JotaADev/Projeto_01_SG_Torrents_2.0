import React from 'react'
import Header from './components/Header/Header'

const TermosDeUso = () => {
  return (
    <>
      <Header/>
      <section className='TermosDeUso'>
        <div className='TermosDeUsoContent'>
          <h1>Termos de Uso</h1>
          <p>O site SG Torrents é apenas um AGREGADOR de links, e assim como o Google.com, apenas agrega e organiza os links externos. Os links aqui encontrados estão disponibilizados na própria internet. Os arquivos aqui mostrados não são hospedados neste servidor. O Super Games Torrent (SG Torrents), não é responsável por nenhum arquivo disponibilizado na web. Todo e qualquer link P2P (Torrent) é criado por usuários e disponibilizados na web, apenas encontramos esses links e agregamos ao site! Não somos responsáveis pelos arquivos e links aqui encontrados. Os Arquivos Multi são todos de Sites externos e tragos até o site como forma alternativa de download. Obrigado pela compreensão.</p>
        </div>
      </section>
    </>
  )
}

export default TermosDeUso