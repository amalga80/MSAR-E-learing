import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import logo from '../MSAR2-2.png'
import { Link } from "react-router-dom";
import { useContext } from 'react';
import * as ROUTES from '../constants/routes'
import { FirebaseContext } from '../context/firebase';
import './css/header.css'


export function NavInner() {
  const { firebase } = useContext(FirebaseContext);
  return (
    <>
      <Navbar  className="w-100 position-fixed navbarbg" expand="lg">
        <div className="container">
          <Nav.Link to={ROUTES.HOME}><img src={logo} className="logo" alt="MSAR" /></Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link className="linkcolor"  to={ROUTES.BROWSE}>Courses</Link>
              <Link className="linkcolor" onClick={() => firebase.auth().signOut()}>Sign out</Link>
            </Nav>

          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}