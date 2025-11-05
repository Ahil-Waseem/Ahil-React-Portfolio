import React from 'react'
import "./Navbar.css"
import Ahillogo from "../../assets/ahillogo.png"
const Navbar = () => {
  return (
    <div>
       <div className='navbar'>
      <img src={Ahillogo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
    </div>
  )
}

export default Navbar
