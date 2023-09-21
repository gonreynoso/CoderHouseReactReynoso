import styles from './ItemList.module.css';
import { Link } from 'react-router-dom';


const ItemList = ({products}) => {
  return (
    <div className={styles.main_container}>
      <h1 className={styles.title}>Productos</h1>
        <div className={styles.list}>
        {products.map((item) => (
          <div key={item.id} className={styles.card_design}>
            <Link className={styles.link} to={`/item/${item.id}`}>
              <img src={item.image} alt="imagen de la tarjeta" />
              <hr />
              <p>US${item.price}</p>
              <span className={styles.envioGratis}>
                Envío gratis
              </span>
              <p>{item.description}</p>
              <p>{item.categoryId}</p>
            </Link>
          </div>
        ))}
        </div>
    </div>
  );
};




export default ItemList;