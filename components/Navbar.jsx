"use client";
import React from "react";
/* import menu from "../assets/menu.svg"; */
import Link from "next/link";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div className={styles.headerMobile}>
      <div className={styles.header}>
        <a href="/">
          <h5>Lazar.</h5>
        </a>
        <nav className={styles.nav}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* <img src={menu.src} alt="menu" /> */}
        <strong>A</strong>
      </div>
    </div>
  );
}

export default Navbar;
