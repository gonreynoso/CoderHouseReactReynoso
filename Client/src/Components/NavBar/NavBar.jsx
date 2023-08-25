//eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css'
import { Link, NavLink } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../Cart/CartWidget/CartWidget';
import logo from '../../assets/logo-motor.jpg';

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.containerLogo}>
          <NavLink className={styles.link} to="/">
            <img src={logo} className={styles.logo} alt="logo" />
            <p className={styles.titulo}>MotorEnLínea</p>
          </NavLink>
        </div>

        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/category/pickups">Camionetas</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/category/cars">Autos</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/category/luxury">Lujo</NavLink>
          </li>
          {/* Esto es de la 1er entrega */}
          <li className={styles.navItem}>
            <NavLink to="/cart" className={styles.cartLink}>
              <CartWidget />
            </NavLink>
          </li>
        </ul>

      </nav >
    </>
  );
};

NavBar.propTypes = {

}

export default NavBar;
