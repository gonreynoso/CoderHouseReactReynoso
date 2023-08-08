//Components and Views
import NavBar from "../src/Components/NavBar/NavBar";
// import Home from './Views/Home/Home'
// import Landing from './Views/Landing/Landing'
// import Cart from './Components/Cart/Cart'
// import About from './Views/About/About'
// import Contact from './Views/Contact/Contact'
import Footer from "./Components/Footer/Footer";

import './App.css'

import { Routes, Route } from "react-router-dom";



function App() {


  return (
    <>
      <Routes>
        {/* <Route path="/" element={<> <Landing /> </>} /> */}
        {/* <Route path="/home" element={<> <NavBar /> <Home /> <Footer /> </>} /> */}
        <Route path="/" element={<> <NavBar />  <Footer /> </>} />
        <Route path="/cart" element={<> <NavBar />  <Footer /> </>} />
        <Route path="/about" element={<> <NavBar />  <Footer /> </>} />
        <Route path="/contact" element={<> <NavBar />  <Footer /> </>} />
      </Routes>

    </>
  )
}


export default App
