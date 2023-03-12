import React from 'react'
import './CardGame.css'

const CardGame = ({img, nomejogo, tamanho, linkdownload}) => {
  function btnDownload() {
    window.open(linkdownload)
  }

  return (
    <>
      <a className='CardGameLink' href='/'>
        <div className='CardGame'>
          <div>
            <img className='CardGameImg' src={img} width='100%' height='100%'></img>
          </div>
          <div className='CardGameInfos'>
            <h1>{nomejogo}</h1>
            <p>{tamanho}Gb</p>
            <button onClick={btnDownload}>Download</button>
          </div>
        </div>
      </a>
    </>
  )
}

export default CardGame