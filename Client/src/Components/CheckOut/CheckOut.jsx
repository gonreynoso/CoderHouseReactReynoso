import styles from './CheckOut.module.css';
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function CheckOut() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'creditCard',
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const { clearCart, cart } = useContext(CartContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createOrder = () => {
    const orderData = {
      buyer: {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
      },
      products: cart.map((item) => ({
        name: item.title,
        id: item.id,
        price: item.price,
        quantity: item.quantity,
      })),
      total: calculateTotal(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');

    addDoc(ordersCollection, orderData)
      .then((docRef) => {
        console.log('orden creada con id: ', docRef.id);
        setOrderId(docRef.id);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createOrder();
  };

  useEffect(() => {
    return () => {
      if (orderId) {
        clearCart();
      }
    };
  }, [orderId]);


  return (
    <div className={styles['container']}>
      <h2 className={styles['title']}>Finalizar compra</h2>
      {isFormSubmitted ? (
        <div>
          <p className={styles['p-compra-exitosa']}>¡Compra exitosa! Código de seguimiento: {orderId}</p>
          <p className={styles['p-compra-detalle']}>Detalle de tu compra: </p>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className={styles['li-checkout']}>
                <div>
                  <img className={styles['img-checkout']} src={`/img/${item.imageId}`} alt={item.title} />
                </div>
                <p className={styles['name-checkout']}>{item.title}</p>
                <p className={styles['price-checkout']}> - ${item.price} -</p>
                <p className={styles['cant-checkout']}>Cantidad: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <p className={styles['checkout-total']}>Total: US${calculateTotal()}</p>
          <Link to="/">
            <button className={styles['boton-volver']}>Volver</button>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={styles['form']}>
          <p>Completa tus datos para finalizar tu compra!</p>
          <div className={styles['form-group']}>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="phone">Telefono:</label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="address">Dirección de Envío:</label>
            <input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></input>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="paymentMethod">Método de Pago:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="creditCard">Tarjeta de Crédito</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>
          <button type="submit" className={styles['submit-button']}>
            Finalizar Compra
          </button>

          <Link to="/"><button className={styles['boton-volver-form']}> Volver </button></Link>
        </form>
      )}
    </div>
  );
}

export default CheckOut;
