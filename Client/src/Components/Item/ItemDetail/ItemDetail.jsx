import PropTypes from "prop-types";
import React, { useContext, useState } from 'react';
import styles from "./ItemDetail.module.css";
import { CartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [quantityToAdd, setQuantityToAdd] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantityToAdd);
    toast('Producto agregado al carrito', {
      position: "top-left",
      autoClose: 900,
      theme: "colored",
    });
  };

  if (!item) {
    return null;
  }

  return (
    <div className={styles.itemDetailContainer}>
      <h1 className={styles.title}>{item.title}</h1>
      <div className={styles.info_container}>
        <img src={`../../../../public/img/${item.imageId}`} alt={item.title} className={styles['product-image']} />
        <p className={styles['product-price']}>US$ {item.price}</p>
        <p className={styles['product-detalle']}>{item.description}</p>
      </div>
      <div className={styles['contenedor-boton']}>
      <button className={styles.boton} onClick={handleAddToCart}>Agregar al carrito</button>
      <ItemCount
        initial={1}
        stock={item.stock}
        quantity={quantityToAdd}
        onChange={setQuantityToAdd}
      />
      <Link to="/">
        <button className={styles.boton_volver} >
          Volver
        </button>
      </Link>
      </div>
    </div>
  );
};

ItemDetail.propTypes = {
  item: PropTypes.object,
};

export default ItemDetail;



