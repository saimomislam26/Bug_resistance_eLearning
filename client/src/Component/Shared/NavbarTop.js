import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';

import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
const NavbarTop = () => {
  const [visible, setVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };


  window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {/* <!-- header-section start --> */}
      <header id="header-section" style={{ backgroundColor: '#5c2cc5' }}>
        <div class="overlay">
          <div class="container">
            <div class="row d-flex header-area">

              <Navbar className='navbar p-0' light expand="md">
                <div class="logo-section flex-grow-1 d-flex align-items-center">
                  <Link class="site-logo site-title" to='/'><img src={logo} alt="site-logo" /></Link>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto navbar-collapsed" navbar>
                    <ul class="navbar-nav main-menu ml-auto" >
                      <li className='visible-list' ><Link to="/Bug_resistance_eLearning/">Home</Link></li>
                      <li className='visible-list' ><Link to="/Bug_resistance_eLearning/">About</Link></li>
                      <li className='visible-list' ><Link to="/Bug_resistance_eLearning/courseadmission">Course Admission</Link></li>
                      <li className='visible-list' ><Link to="/Bug_resistance_eLearning/" >Career-Blog</Link></li>
                      <li className='visible-list' ><Link to='/Bug_resistance_eLearning/' >Contact</Link></li>
                    </ul>
                  </Nav>
                </Collapse>
              </Navbar>

            </div>
          </div>
        </div>
      </header>
      {/* <!-- header-section end --> */}
    </>
  )
}

export default NavbarTop