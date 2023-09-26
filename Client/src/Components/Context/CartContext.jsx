import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity, key: item.id }]);
    } else {
      setCart((prev) =>
        prev.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + quantity };
          } else {
            return product;
          }
        })
      );
    }
  };
  

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };


  const removeItem = (itemId) => {
    const copyCart = [...cart];

    const itemIndex = copyCart.findIndex((item) => item.id === itemId);

    const indexFound = itemIndex !== -1;

    if (indexFound) {
      const currentQuantity = copyCart[itemIndex].quantity;

      if (currentQuantity > 1) {
        copyCart[itemIndex].quantity -= 1;
      } else {
        copyCart.splice(itemIndex, 1);
      }

      setCart(copyCart);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
