
import CartWidget from '../CartWidget/CartWidget';

import styles from './NavBar.module.css';
import logo from '../../assets/logo-motor.jpg';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.container_logo} to="/">
        <img src={logo} className={styles.img} alt="logo" />
        <p className={styles.titulo}>MotorEnLínea</p>
      </NavLink>
      <ul className={styles.ul_navList}>
        <li className={styles.navItem}>
          <NavLink to="/">Inicio</NavLink> 
        </li>
        <li className={styles.navItem}>
          <NavLink to="/category/cars">Autos</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/category/bikes">Motos</NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink to="/cart" className={styles.cartLink}>
            <CartWidget />
          </NavLink>
        </li>
      </ul>
    </nav >
  );
};

export default NavBar;



