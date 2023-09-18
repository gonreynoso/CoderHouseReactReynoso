// //eslint-disable-next-line
// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from './NavBar.module.css';
// import { NavLink } from 'react-router-dom';
// // import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// // import ItemListContainer from '../ItemListContainer/ItemListContainer';
// import CartWidget from '../Cart/CartWidget/CartWidget';
// import logo from '../../assets/logo-motor.jpg';

// const NavBar = () => {
//   return (
//       <nav className={styles.navbar}>
//           <NavLink className={styles.container_logo} to="/">
//             <img src={logo} className={styles.img} alt="logo" />
//             <p className={styles.titulo}>MotorEnLínea</p>
//           </NavLink>
//         <ul className={styles.ul_navList}>
//           <li className={styles.navItem}>
//             <NavLink to="/">Inicio</NavLink>
//           </li>
//           <li className={styles.navItem}>
//             <NavLink to="/category/camionetas">Camionetas</NavLink>
//           </li>
//           <li className={styles.navItem}>
//             <NavLink to="/category/autos">Autos</NavLink>
//           </li>
//           <li className={styles.navItem}>
//             <NavLink to="/category/lujo">Lujo</NavLink>
//           </li>
//           <li className={styles.navItem}>
//             <NavLink to="/carrito" className={styles.cartLink}>
//               <CartWidget />
//             </NavLink>
//           </li>
//         </ul>
//       </nav >
//   );
// };



// export default NavBar;


import {
 Navbar,
 Button,
 NavbarBrand,
 NavbarContent,
 NavbarItem,
 Link,
 Input,
 DropdownItem,
 DropdownTrigger,
 Dropdown,
 DropdownMenu,
 Avatar
} from "@nextui-org/react";

import {
 ChevronDown,
 Lock,
 Activity,
 Flash,
 Server,
 TagUser,
 Scale
} from "../NextUI/Icons/Icons/Icons";

import { SearchIcon } from "../NextUI/Icons/Search/Search";
import { Logo } from "../NextUI/Logo/Logo"

// import CartWidget from '../Cart/CartWidget/CartWidget';

import styles from './NavBar.module.css';
import logo from '../../assets/logo-motor.jpg';

export default function NavBar() {

 const icons = {
  chevron: <ChevronDown fill="currentColor" size={16} />,
  scale: <Scale className="text-warning" fill="currentColor" size={30} />,
  lock: <Lock className="text-success" fill="currentColor" size={30} />,
  activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
  flash: <Flash className="text-primary" fill="currentColor" size={30} />,
  server: <Server className="text-success" fill="currentColor" size={30} />,
  user: <TagUser className="text-danger" fill="currentColor" size={30} />,
 };


 return (
  <Navbar isBordered>
   <NavbarContent justify="start">
    <NavbarBrand className="mr-4">
     <Link color="foreground" href="/">
      {/* <Logo /> */}
      <p className="font-bold text-inherit">MOTORENLINEA</p>
     </Link>
    </NavbarBrand>
    <NavbarContent className="hidden sm:flex gap-3">


     {/* NavBar content */}
     <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem>
       <Link color="foreground" href="/">Inicio</Link>
      </NavbarItem>


      <Dropdown>
       <NavbarItem>
        <DropdownTrigger>
         <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent"
          endContent={icons.chevron}
          radius="sm"
          variant="light"
         >Vehículos
         </Button>
        </DropdownTrigger>
       </NavbarItem>


       <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
         base: "gap-4",
        }}>

        <DropdownItem
         key="autos"
         className={styles.custom_dropdown_item} // Aplicaremos estilos específicos a este componente

         startContent={icons.scale}>
         <Link color="foreground" href="/category/autos">
          Autos
         </Link>
        </DropdownItem>



        <DropdownItem
         key="usage_metrics"
         description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
         startContent={icons.activity}
        >
         Usage Metrics
        </DropdownItem>

        <DropdownItem
         key="production_ready"
         description="ACME runs on ACME, join us and others serving requests at web scale."
         startContent={icons.flash}
        >
         Production Ready
        </DropdownItem>
        <DropdownItem
         key="99_uptime"
         description="Applications stay on the grid with high availability and high uptime guarantees."
         startContent={icons.server}
        >
         +99% Uptime
        </DropdownItem>
        <DropdownItem
         key="supreme_support"
         description="Overcome any challenge with a supporting team ready to respond."
         startContent={icons.user}
        >
         +Supreme Support
        </DropdownItem>
       </DropdownMenu>
      </Dropdown>





      {/* <NavbarItem isActive>
       <Link href="#" aria-current="page">
        Customers
       </Link>
      </NavbarItem>
      <NavbarItem>
       <Link color="foreground" href="#">
        Integrations
       </Link>
      </NavbarItem> */}
     </NavbarContent>
    </NavbarContent>
   </NavbarContent>



   {/*  SearchBar */}
   <NavbarContent as="div" className="items-center" justify="end">
    <Input
     classNames={{
      base: "max-w-full sm:max-w-[10rem] h-10",
      mainWrapper: "h-full",
      input: "text-small",
      inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
     }}
     placeholder="Type to search..."
     size="sm"
     startContent={<SearchIcon size={18} />}
     type="search"
    />



    <Dropdown placement="bottom-end">
     <DropdownTrigger>
      <Avatar
       isBordered
       as="button"
       className="transition-transform"
       color="secondary"
       name="Jason Hughes"
       size="sm"
       src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
     </DropdownTrigger>
     <DropdownMenu aria-label="Profile Actions" variant="flat">
      <DropdownItem key="profile" className="h-14 gap-2">
       <p className="font-semibold">Signed in as</p>
       <p className="font-semibold">zoey@example.com</p>
      </DropdownItem>
      <DropdownItem key="settings">My Settings</DropdownItem>
      <DropdownItem key="team_settings">Team Settings</DropdownItem>
      <DropdownItem key="analytics">Analytics</DropdownItem>
      <DropdownItem key="system">System</DropdownItem>
      <DropdownItem key="configurations">Configurations</DropdownItem>
      <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
      <DropdownItem key="logout" color="danger">
       Log Out
      </DropdownItem>
     </DropdownMenu>
    </Dropdown>
   </NavbarContent>
  </Navbar >
 );
}
