import NavBar from "../src/Components/NavBar/NavBar";
import Home from './Views/Home/Home'
import Landing from './Views/Landing/Landing'
import Cart from './Views/Cart/Cart'
import About from './Views/About/About'
import Contact from './Views/Contact/Contact'
import Footer from "./Components/Footer/Footer";


// Material UI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './App.css'
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//eslint-disable-next-line no-unused-vars
import React from 'react'
//eslint-disable-next-line no-unused-vars





function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<> <Landing /> </>} />
        <Route path="/home" element={<> <NavBar /> <Home /> <Footer /> </>} />
        <Route path="/cart" element={<> <NavBar /> <Cart /> <Footer /> </>} />
        <Route path="/about" element={<> <NavBar /> <About /> <Footer /> </>} />
        <Route path="/contact" element={<> <NavBar /> <Contact /> <Footer /> </>} />
      </Routes>

    </>
  )
}


export default App
