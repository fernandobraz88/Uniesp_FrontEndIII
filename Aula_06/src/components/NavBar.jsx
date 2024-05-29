/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavBar'>
        <Link to='/'>Inicial</Link>
        <Link to='/dpo-lgpd'>Dpo Lgpd</Link>
        <Link to='/a-faculdade'>A Faculdade</Link>
        <Link to='/noticias'>Notícias</Link>
        <Link to='/admin-noticias'>Admin</Link>
    </nav>
  )
}

export default NavBar