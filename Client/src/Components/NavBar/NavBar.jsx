//eslint-disable-next-line
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
      <li className={styles.navItem}>
          <Link to="/home">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/cart" className={styles.cartLink}>
            <ShoppingCartIcon className={styles.cartIcon} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
