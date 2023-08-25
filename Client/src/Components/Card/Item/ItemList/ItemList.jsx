import styles from './ItemList.module.css';
import propTypes from 'prop-types';

const ItemList = ({ items }) => {
  return (
    <>
      <h1 className={styles.title}>Productos</h1>
      <div className={styles.container}>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <p>{item.category}</p>

            </li>))}

        </ul>
      </div>
    </>
  )
}


ItemList.prototype = {
  items: propTypes.array.isRequired
}


export default ItemList;