import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { FaTrash } from 'react-icons/fa';
import styles from './Cart.module.css';


const Cart = () => {

  const { cart, removeItem, clearCart } = useContext(CartContext);

  const isEmpty = cart.length === 0;

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <>
      <h1 className={styles['h1-cart']}>Carrito</h1>
      <div className={styles['cart-container']}>
        <p className={styles['cart-p']}>Total: ${calculateTotal()}</p>
        <button className={styles['vaciar-cart']} onClick={() => clearCart()}>Vaciar carrito</button>
        <Link to="/checkout">
          <button className={styles['comprar-cart']}>Realizar compra</button>
        </Link>
      </div>
      <div className={styles.container}>
        {isEmpty ? (
          <div>
            <p className={styles['empty-cart-p']}>Tu carrito está vacio!</p>
            <Link to="/"><button className={styles['empty-cart-btn']}> Ver productos  </button></Link>
          </div>
        ) : (
          <div className={styles.container}>
            <ul className={styles.ul}>
              {cart.map((item) => (
                <li key={item.id} className={styles['li-cart']}>
                  <div className={styles.divcontainer}>
                    <h3 className={styles['name-cart']}>{item.title}</h3>
                    <img className={styles['img-cart']} src={`/img/${item.imageId}`} alt={item.title} />
                    <p className={styles['price-cart']}>Precio: ${item.price}</p>
                    <p className={styles['cant-cart']}>Cantidad: {item.quantity}</p>
                    <FaTrash className={styles['delete-icon']} onClick={() => removeItem(item.id)} />
                  </div>
                </li>
              ))}
            </ul>

          </div>
        )}
      </div>
    </>
  );
};

export default Cart;



