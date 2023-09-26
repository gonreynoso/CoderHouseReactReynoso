//Components
import NavBar from "../src/Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Cart from "../src/Components/Cart/Cart";
import { CartProvider } from "./Components/Context/CartContext";
import ItemlistContainer from "./Components/Item/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./Components/Item/ItemDetailContainer/ItemDetailContainer";
import CheckOut from "./Components/CheckOut/CheckOut";
import NotFound from "./Components/NotFound/NotFound";




import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemlistContainer />} />

          <Route path="/category/:categoryId" element={<ItemlistContainer />} />

          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<CheckOut />} />

          <Route path="/*" element={<> <NotFound /> </>} />
        </Routes>
        <Footer />
      </CartProvider>

    </div>
  )
}

export default App
