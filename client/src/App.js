import React from 'react'
import { Routes, Route } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import './css/animate.css'
// import './css/bootstrap.min.css'
import './css/nice-select.css'
import './css/slick.css'
import './css/xzoom.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './css/service.css'
import 'react-slideshow-image/dist/styles.css';

import Home from './Component/Home'
import StudentSay from './Component/StudentSay'
import CardSlider from './Component/CardSlider'
import Main from './Component/course/Main'
import Blog from './Component/Blog'
import Service from './Component/Services/Service'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/student" exact element={<CardSlider/>}/>
        <Route path='/courseadmission' exact element={<Main/>}/>
        <Route path='/blog' exact element={<Blog/>}/>
        <Route path='/service' exact element={<Service/>}/>
      </Routes>
    </div>
  )
}

export default App
