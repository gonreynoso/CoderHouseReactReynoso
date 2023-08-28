//eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import ItemListContainer from '../ItemListContainer/ItemListContainer';
import CartWidget from '../Cart/CartWidget/CartWidget';
import logo from '../../assets/logo-motor.jpg';

const NavBar = () => {
  return (
    <>
      <nav className={styles.navbar}>
      <div>
          <NavLink className={styles.container_logo} to="/">
            <img src={logo} className={styles.img} alt="logo" />
            <p className={styles.titulo}>MotorEnLínea</p>
          </NavLink>
        </div>
        <ul className={styles.ul_navList}>
          <li className={styles.navItem}>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/category/camionetas">Camionetas</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/category/autos">Autos</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/category/lujo">Lujo</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/carrito" className={styles.cartLink}>
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
