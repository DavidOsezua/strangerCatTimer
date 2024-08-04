import React, { useState } from "react";
import styles from "./Navbar.module.css";
import "../App.css";
import { bar, close, Logo } from "../assets";
import { navLinks } from "../Data/data";
import Telegram from "./Telegram";
import Twitter from "./Twitter";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = ({ burnRef }) => {
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
            <Link
              to={navlink.name}
              smooth={true}
              duration={500}
              key={navlink.Link}
            >
              <li onClick={toggleHandler} className={styles.navItems}>
                {navlink.Link}
              </li>
            </Link>
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

          <a href="https://t.me/strangercats01" target="_blank">
            <Telegram />
          </a>

          <a href="https://x.com/strangercatsol?s=11&t=gFKcOja2ZLWSWrWOKvMCgQ" target="_blank">
            <Twitter />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
