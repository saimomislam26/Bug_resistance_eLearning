import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
} from 'reactstrap';

import logo from '../../images/saimom_62.png'
import name from '../../images/BUG RESISTANCE.png'
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
                  <Link class="site-logo site-title" to='/Bug_resistance_eLearning'><img src={logo} alt="site-logo" /></Link>
                  <h6 style={{color:"white",marginLeft:"15px"}}>BUG RESISTANCE</h6>
                </div>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto navbar-collapsed" navbar>
                    <ul class="navbar-nav main-menu ml-auto" >
                      <li className='visible-list' ><Link to="/">Home</Link></li>
                      {/* <li className='visible-list' ><Link to="/Bug_resistance_eLearning/">About</Link></li> */}
                      <li className='visible-list' ><Link to="/courseadmission">Course Admission</Link></li>
                      {/* <li className='visible-list' ><Link to="/Bug_resistance_eLearning/" >Career-Blog</Link></li> */}
                      <li className='visible-list' ><a href='https://www.facebook.com/bugresistance' target={'blank'} >Contact</a></li>
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