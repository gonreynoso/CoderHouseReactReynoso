import styles from './ItemList.module.css';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ItemList = ({ products }) => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Productos</h1>
        <div className={styles.list}>
        {products.map((item) => (
          <div key={item.product_id} className={styles.card_design}>
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
        ))}
        </div>
    </div>
  );
};

ItemList.propTypes = {
  products: propTypes.array.isRequired
}


export default ItemList;