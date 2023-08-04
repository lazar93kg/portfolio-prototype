"use client";
import React from "react";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#skills">Skills</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
