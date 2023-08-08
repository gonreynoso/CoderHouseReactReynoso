//eslint-disable-next-line
import React from 'react';
import styles from'./ItemListContainer.module.css';

const ItemListContainer = ({ greetings }) => {
  return (
    <div className={styles.ItemListContainer}>
      <p className={styles.greetings}>{greetings}</p>
    </div>
  );
};

export default ItemListContainer;
