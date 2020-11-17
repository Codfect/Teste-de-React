import React from 'react'
import Logo from '../assets/logo.png'
import '../styles/Header.css'


function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo" />
      <div>
        <a>Home</a>
        <a>Team</a>
        <a>Ticket</a>
        <a>Shop</a>
      </div>
    </header>
  );
}

export default Header