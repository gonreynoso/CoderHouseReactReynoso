import styles from './ItemList.module.css';
import { Link } from 'react-router-dom';


const ItemList = () => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Productos</h1>
      <Link className={styles.link} to={`/item/${item.product_id}`}>
        <img src={item.image} alt="imagen de la tarjeta" />
        <hr />
        <p>${item.price}</p>
        <span className={styles.envioGratis}>
          Envío gratis
        </span>
        <p>{item.description}</p>
        <p>{item.category}</p>
      </Link>
    </div>
  );
};



export default ItemList;