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

import Home from './Component/Home'
import StudentSay from './Component/StudentSay'
import CardSlider from './Component/CardSlider'
import Main from './Component/course/Main'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/student" exact element={<CardSlider/>}/>
        <Route path='/courseadmission' exact element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default App
