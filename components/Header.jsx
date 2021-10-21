import React from 'react'

import {Nav} from '../styles/Header'

export default function Header() {
  
return (
  <Nav>
  <div className="nav">
  <h2>Swipe</h2>
  <ul className="navBody">
   <li className="navItem">
   <a href="#">Home</a>
   </li>
   <li className="navItem">
   <a href="#">About</a>
   </li>
  </ul>
  </div>
  </Nav>
)
}