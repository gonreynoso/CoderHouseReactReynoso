import styles from './Item.module.css';
import { Link } from 'react-router-dom';


const Item = ({ image, name, price }) => {
  return (
    <div className={styles.container}>
      <Link to="/item/:id">
        <div>
          <img className={styles.image} src={image} alt="imagen de la tarjeta" />
        </div>
        <div className={styles.item}>
          <div className={styles.title}>
            <h3>{name}</h3>
          </div>
          <div className={styles.price}>
            <p>{price}</p>
            <div />
            <span className={styles.envioGratis}>
              Envío gratis
            </span>
          </div>
        </div>
      </Link>
    </div>)
}

export default Item;