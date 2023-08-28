//Components and Views
import NavBar from "../src/Components/NavBar/NavBar";
import Home from "./Views/Home/Home";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Views/NotFound/NotFound";
import Cart from "./Components/Cart/Cart";
import ItemListContainer from "./Components/Item/ItemListContainer/ItemListContainer";

import './App.css'

import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Item/ItemDetailContainer/ItemDetailContainer";




function App() {


  return (
    <>
      <NavBar /> 
      <Routes>
        <Route path="/*" element={<> <NotFound /> </>} />
        <Route path="/" element={<> <Home /> </>} />
        <Route path="/category/:category" element={<> <ItemListContainer /> </>} />
        <Route path="/item/:product_id" element={<> <ItemDetailContainer /> </>} />
        <Route path="/cart" element={<> <Cart /> </>} />
      </Routes>
      <Footer />
    </>
  )
}


export default App
