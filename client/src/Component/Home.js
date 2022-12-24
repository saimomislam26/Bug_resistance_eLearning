import React, { useContext, useState, useEffect } from 'react'


// Importing Images
import Progress from './Progress'
import banner from '../images/banner-circle.png'
import icon1 from '../images/icon-1.png'
import icon2 from '../images/icon-2.png'
import icon3 from '../images/icon-3.png'
import icon4 from '../images/icon-4.png'
import downloadCV from '../images/download-Icon.png'
import specializingIcon1 from '../images/specilizing-icon1.png'
import specializingIcon2 from '../images/specilizing-icon2.png'
import specializingIcon3 from '../images/specilizing-icon3.png'
import specializingIcon4 from '../images/specilizing-icon4.png'
import turn from '../images/now-your-turn-right.png'

import ScrollButton from './Shared/ScrollButton'
import CardSlider from './CardSlider'
import StudentBig from './StudentBig'
import Footer from './Shared/Footer'
import NavbarTop from './Shared/NavbarTop'
const Home = () => {

  return (
    <>
      {/* <!-- start preloader --> */}
      {/* <div class="preloader" id="preloader"></div> */}
      {/* <!-- end preloader --> */}

      {/* <a href="#" class="scrollToTop"><i class="fas fa-angle-double-up"></i></a> */}

      <NavbarTop />

      {/* <!-- banner-section start --> */}
      <section id="banner-section">
        <div class="banner-content d-flex align-items-center pb-120">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-10">
                <div class="main-content">
                  <div class="item one wow fadeInDown">
                    <img src={icon1} alt="image" />
                    <h5>UI/UX</h5>
                  </div>
                  <div class="item two wow fadeInDown">
                    <img src={icon2} alt="image" />
                    <h5>Illustrations</h5>
                  </div>
                  <div class="item three wow fadeInDown">
                    <img src={icon3} alt="image" />
                    <h5>Hi there!</h5>
                  </div>
                  <div class="item four wow fadeInDown">
                    <img src={icon4} alt="image" />
                    <h5>Work with me</h5>
                  </div>
                  <div class="row justify-content-center">
                    <div class="col-lg-6">
                      <div class="right-area text-center">
                        <img src={banner} class="right-img" alt="banner-circle" />
                        <div class="download-area">
                          <a href="#" class="download" style={{ textDecoration: "none" }}>Download CV
                            <img src={downloadCV} alt="image" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-lg-7 d-flex align-items-center">
                <div class="text-area text-center">
                  <h5>HI THERE, I'M JAMES</h5>
                  <h2>A <span>Digital</span> Product Designer</h2>
                  <div class="btn-area d-flex align-items-center justify-content-center">
                    <a href="contact.html" class="cmn-btn" style={{ textDecoration: "none" }}>Contact Us</a>
                    <a href="portfolio.html" class="cmn-btn-second" style={{ textDecoration: "none" }}>View Project
                      <span class="btn-icon"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- banner-section end -->

      <!-- Specilizing In start --> */}
      <section id="specilizing-section" >
        <div class="overlay pt-120 pb-120">
          <div class="container wow fadeInUp">
            <div class="row justify-content-center text-center">
              <div class="col-lg-6" >
                <div class="section-header">
                  <h4 class="sub-title">What I Do</h4>
                  <h3 class="title">Specilizing In</h3>
                  <p>Sed tempus sapien in nisi auctor lacinia. Donec metus
                    felis, ultricies nec pharetra volutpat</p>
                </div>
              </div>
            </div>
            <div class="row" >
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon1} alt="image" />
                  <a href="portfolio-details.html" style={{ textDecoration: "none" }}><h2>Design and UI/UX</h2></a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon2} alt="image" />
                  <a href="portfolio-details.html" style={{ textDecoration: "none" }}><h2>Web design development</h2></a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon3} alt="image" />
                  <a href="portfolio-details.html" style={{ textDecoration: "none" }}><h2>Custom Solutions</h2></a>
                </div>
              </div>
              <div class="col-lg-3 col-md-6">
                <div class="single-item">
                  <img src={specializingIcon4} alt="image" />
                  <a href="portfolio-details.html" style={{ textDecoration: "none" }}><h2>Animations Video ads</h2></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Specilizing In end --> */}
      {/* <!-- Now Your Turn start --> */}
      <section id="now-your-turn">
        <div class="overlay pt-120 pb-120">
          <div class="container wow fadeInUp">
            <div class="row">
              <div class="col-lg-7">
                <div class="section-header">
                  <h4 class="sub-title-alt">Now Your Turn</h4>
                  <h3 class="title">Interested in Working with Me?</h3>
                  <p>Do you need help with any web design or development project?
                    Let me give you a hand. Get in touch with me and i will get back to
                    you within 1-2 business days.</p>
                  <a href="contact.html" class="cmn-btn" style={{ textDecoration: "none" }}>Contact me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-area">
          <img src={turn} alt="image" />
        </div>
        {/* <div class="bottom-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-item">
                  <span class="counter">58</span>
                  <h5>Happy Clients</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-item second">
                  <span class="counter">16</span>
                  <h5>Years Experience</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-item third">
                  <span class="counter">30</span>
                  <span>k</span>
                  <h5>Hours Worked</h5>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="single-item fourth">
                  <span class="counter">5</span>
                  <h5>Awards Won</h5>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <!-- Now Your Turn end --> */}
      <StudentBig/>
      {/* What Student Say */}
      <section id="what_student_say">
        <CardSlider />
      </section>


      {/* <!-- footer-section start --> */}
     <Footer/>
    </>

  )
}

export default Home