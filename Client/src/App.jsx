//Components and Views
import NavBar from "../src/Components/NavBar/NavBar";
import Home from "./Views/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Views/NotFound/NotFound";

import './App.css'

import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Card/Detail/ItemDetailContainer/ItemDetailContainer";




function App() {


  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/*" element={<> <NotFound /> </>} />
        <Route path="/" element={<> <Home /> </>} />
        <Route path="/category/:id" element={<> <Home /> </>} />
        <Route path="/item/:id" element={<> <ItemDetailContainer /> </>} />
      </Routes>
      <Footer />
    </>
  )
}


export default App
