import React from 'react'
import { NavLink } from 'react-router-dom'
import './sytles/Header.css'

const Header = () => {
  return (
    <header className='header'>
    <NavLink className='header__name' to='/'> <h1>E-comercer</h1></NavLink>
<ul className='header__navbar'>
    <li className='header__link'><NavLink to='/login'><i className='bx bxs-user'></i></NavLink></li>
    <li className='header__link'><NavLink to='/purchases'><i className='bx bxs-box'></i></NavLink></li>
    <li className='header__link'><NavLink to='/cart'><i className='bx bx-cart'></i></NavLink></li>
</ul>
    </header>
  )
}

export default Header