import React from 'react'
import Github from '../assets/github.svg'
import Twitter from '../assets/twitter.svg'
import Linkedin from '../assets/linkedin.svg'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer>
      <div>
        <ul>
          <li>contato</li>
          <li>7 777 7777</li>
          <li> 9 999 9999 </li>
        </ul>
        <div>
          <a href="http://www.github.com" target="blanck"><img src={Github} /></a>
          <a href="http://www.twitter.com" target="blanck"><img src={Twitter} /></a>
          <a href="http://www.linkedin.com" target="blanck"><img src={Linkedin} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer