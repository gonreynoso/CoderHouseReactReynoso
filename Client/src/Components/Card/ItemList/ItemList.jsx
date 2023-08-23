import styles from './ItemList.module.css';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <>
      <h1 className={styles.title}>Productos</h1>
      <div className={styles.container}>
        {products.map((product) => <Item key={product.id} {...product} />)}
      </div>
    </>
  )
}


export default ItemList;