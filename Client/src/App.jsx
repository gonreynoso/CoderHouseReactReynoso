//Views
import {
  Home, 
  Detail, 
  About, 
  Contact, 
  NotFound} from "./Views/index";

//Components
import NavBar from "../src/Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Cart from "../src/Components/Cart/Cart";



import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <NavBar /> 
      <Routes>
        <Route path="/*" element={<> <NotFound /> </>} />
        <Route path="/" element={<> <Home /> </>} />
        <Route path="/category/:categoryId" element={<> <Home /> </>} />
        <Route path="/product/:id" element={<> <Detail /> </>} />
        <Route path="/cart" element={<> <Cart /> </>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
