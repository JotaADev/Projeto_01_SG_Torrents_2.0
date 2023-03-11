import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className='Header'>
            <nav className='HeaderNav'>
                <a href='/'>
                    <img className='HeaderLogo' src='/logotipo.png' alt='Logo' width='100px'></img>
                </a>
                <SearchBar/>
                <div className='HeaderNavMobile'>
                    <ul className='HeaderNavContent'>
                        <li className='HeaderNavItem'>
                            <a className='HeaderNavLink' href='/'>Home</a>
                        </li>
                        <li className='HeaderNavItem'>
                            <a className='HeaderNavLink' href='/'>Categorias</a>
                        </li>
                        <li className='HeaderNavItem'>
                            <a className='HeaderNavLink' href='/'>Termos de Uso</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Header