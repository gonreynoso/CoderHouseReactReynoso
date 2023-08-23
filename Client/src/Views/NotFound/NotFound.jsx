
import styles from './NotFound.module.css'; // Importa los estilos

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorMessage}>
      Ups 😱 no encuentro la página.
      </h1>
      <h2>
      Vuelve atrás o utiliza el menú superior para localizar la página que buscas.
      </h2>
    </div>
  );
};

export default NotFound;
