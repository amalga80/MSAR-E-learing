import React, {useState} from 'react'
import * as ROUTES from '../constants/routes'
import logo from '../MSAR2-2.png'
import { Link } from "react-router-dom";
import {Navbar,Nav} from 'react-bootstrap'
import './css/header.css'
const a = {
  padding: " .5rem 1rem",
  
}
// const navbar={position:"fixed",
//              zIndex:"99",
//              background:"rgba(21,25,71,0.8)"}

export function HeaderContainer({ children}) {

    const [isActive, setIsActive] = useState(false)

    const changeBackground =()=>{
        if(window.scrollY >= 80) {
            setIsActive(true)
        }else {
            setIsActive(false)
        }
    }

    window.addEventListener('scroll', changeBackground)
    return (
     
      <Navbar expand="lg"  className="w-100 position-fixed bg navbarbg" >
        <div className="container">
      <Link to={ROUTES.HOME}><img src={logo} className="logo" alt="MSAR"/></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="linkcolor  " style={a} to={ROUTES.HOME}>Home</Link>
          <Link className="linkcolor" style={a} href="#link">About</Link>
          <Link className="linkcolor" style={a} to={ROUTES.SIGN_UP}>Sign Up</Link>
          <Link className="linkcolor" style={a} to={ROUTES.SIGN_IN}>Sign In</Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
   
    )
}