import React from 'react'
import CartWidgeet from '../CartWidget/CartWidgeet'

const NavBar = () => {
  return (
    <header>
        <h1>E-Commerce</h1>
        <nav>
        <ul>
            <li>Remeras</li>
            <li>Shorts</li>
            <li>Medias</li>
        </ul>
        </nav>
        <CartWidgeet/>
    </header>
  )
}

export default NavBar