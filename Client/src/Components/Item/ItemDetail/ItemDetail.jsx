
import styles from './ItemDetail.module.css';

const ItemDetail = ({ item }) => {
  if (!item) {
    return null;
  }
  //renderizamos el detalle del item
  return (
    <div className={styles.itemDetailContainer}>
      <h1 className={styles.title}>{item.name}</h1>
      <p>{item.product_id}</p>
      <img className={styles.image} src={item.image} alt={item.name} />
      <p className={styles.price}>${item.price}</p>
      <p className={styles.category}>{item.category}</p>
      <p className={styles.description}>{item.description}</p>
    </div>
  );
};

export default ItemDetail;


