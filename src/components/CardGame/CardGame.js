import React from 'react'
import './CardGame.css'

const CardGame = () => {
  return (
    <>
      <a className='CardGameLink' href='/'>
        <div className='CardGame'>
          <div>
            <img className='CardGameImg' src='https://www.elamigos-games.com/storage/games_tumbl/forza-horizon-4-ultimate-edition-cover-2wz.jpg' width='100%' height='100%'></img>
          </div>
          <div className='CardGameInfos'>
            <h1>Forza Horizon 4 Ultimate Edition</h1>
            <p>76.7Gb</p>
            <button>Download</button>
          </div>
        </div>
      </a>
    </>
  )
}

export default CardGame