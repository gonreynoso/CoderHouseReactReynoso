
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} MotorEnLínea. Todos los derechos reservados.</p>
      <p>Diseñado por Gonzalo Reynoso</p>
    </footer>
  );
};

export default Footer;
