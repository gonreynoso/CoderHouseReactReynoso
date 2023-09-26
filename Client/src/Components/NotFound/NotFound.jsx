import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorMessage}>
      Ups 😱 no encuentro la página.
      </h1>
      <div>
      <p>Vuelve atrás o utiliza el menú superior para localizar la página que buscas o también clickeando en el botón aquí debajo.</p>
      </div>
      <Link to="/">
        <button className={styles.boton_volver
        }>Volver a Inicio</button>
      </Link>
    </div>
  );
};

export default NotFound;