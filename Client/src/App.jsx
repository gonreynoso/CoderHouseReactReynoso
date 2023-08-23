//Components and Views
import NavBar from "../src/Components/NavBar/NavBar";
import Home from "./Views/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Views/NotFound/NotFound";

import './App.css'

import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Card/ItemDetailContainer/ItemDetailContainer";




function App() {


  return (
    <>
      <Routes>
        <Route path="/*" element={<> <NavBar /> <NotFound /> <Footer /> </>} />
        <Route path="/" element={<> <NavBar /> <Home /> <Footer /> </>} />
        <Route path="/item/:id" element={<> <NavBar />  <ItemDetailContainer /> <Footer /> </>} /> 


        {/* <Route path="/category/:id" element={<> <NavBar /> <Home /> <Footer /> </>} /> */}
      </Routes>
    </>
  )
}


export default App
