import styles from "./ItemCount.module.css";

const ItemCount = ({ stock, onChange, quantity }) => {
  const increment = () => {
    if (quantity < stock) {
      onChange(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      onChange(quantity - 1);
    }
  };

  return (
    <div className={styles["counter"]}>
      <div className={styles["controls"]}>
        <button
          className={styles["btn-controls"]}
          onClick={decrement}>
          {" "}
          -{" "}
        </button>
        <h4 className={styles["number"]}>{quantity}</h4>
        <button
          className={styles["btn-controls"]}
          onClick={increment}>
          {" "}
          +{" "}
        </button>
      </div>
    </div>
  );
};

export default ItemCount;