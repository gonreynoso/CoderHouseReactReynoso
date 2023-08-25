import styles from './ItemDetail.module.css';
import { Link } from 'react-router-dom';


const Item = ({ id, image, name, price, category, description, stock }) => {
  return (
    <div className={styles.container}>

      <div>
        <img className={styles.image} src={image} alt="imagen de la tarjeta" />
      </div>

      <div className={styles.container}>
        <h1>{name}</h1>
        <div className={styles.price}>
          <p>{price}</p>
        </div>
        <div className={styles.category}>
          {category}
        </div>
        <div className={styles.description}>
          {description}
        </div>
        <div className={styles.stock}>
          {stock}
        </div>

      </div>

    </div>
  )
}

export default Item;

