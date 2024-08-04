import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "../App.css";
import { bar, close, Logo } from "../assets";
import { navLinks } from "../Data/data";
import Telegram from "./Telegram";
import Twitter from "./Twitter";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/*************  NavLogo ******************/}
        <div className={styles.navLogo}>
          <NavLink to="/">
            {" "}
            <img src={Logo} alt="Logo" className="w-[100px]" />
          </NavLink>
        </div>

        {/******************  Menu Items *********************/}
        <ul className={`${styles.navMenu} ${toggle && styles.showMenu} `}>
          {/********************* Menu close button *******************/}
          <img src={close} onClick={toggleHandler} className={styles.toggle} />

          {/********************* Menu Lists *******************/}

          {navLinks.map((navlink) => (
            <li className={styles.navItems} key={navlink.Link}>
              {navlink.Link}
            </li>
          ))}
        </ul>

        {/**************  This is for the elements at the right (notification,button,upload) *********************/}

        {/**************** Mobile right side elements ******************/}
        <div className={styles.mobile}>
          <img src={bar} onClick={toggleHandler} className={`${styles.bar}`} />
        </div>

        {/********************* Desktop Right side elements ********************/}
        <div className={styles.desktop}>
          {/* <NavLink to="createaccount">
           <button className={`${styles.btn}`}>Buy $STRANGER</button>
          </NavLink> */}

          <Telegram />
          <Twitter />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
