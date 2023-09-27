import styles from './ItemList.module.css';
import ProductCart from '../../ProductCart/ProductCart';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import React, { useMemo } from 'react';


const ItemList = React.memo(({ items }) => {

  const renderedItems = useMemo(() => {

    return items.map((item) => (
      <li key={item.id} className={styles.li}>
        <ProductCart item={item} />
        <ItemDetailContainer item={item} />
      </li>
    ));
  }, [items]);

  const productList = (
    <>
      <h3 className={styles['parrafo-home']}>Motor En Línea E-commerce de vehículos terrestres. El mejor sitio del país</h3>
      <h1 className={styles['titulo-home']}>Productos: </h1>
      <ul>
        <div className={styles['grid-container']}>
          {renderedItems}
        </div>
      </ul>
    </>
  );

  return (
    <div>
      {productList}
    </div>
  );
});



export default ItemList;


