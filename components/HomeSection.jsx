"use client";
import React from "react";
import styles from "./homeSection.module.css";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import Image from "next/image";
import Liquid from "./Liquid";
function HomeSection() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.homeContent}>
        <h1>Hello, I'm Lazar Jevtic</h1>
        <div className={styles.changeText}>
          <div className={styles.writer}>
            <h3>And I'm passionate</h3>
            <div className={styles.writerText}>
              <Typewriter
                words={["Frontend Developer", "Web Developer"]}
                loop={5}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </div>
          </div>
          <p>
            I am dedicated to crafting captivating and user-friendly web
            experiences. Join me on this exciting journey as we bring your
            digital vision to life.
          </p>
          <div className={styles.homeImage} id={styles.imgMobile}>
            <div className={styles.imgBox}>
              <Image
                src="/imageCV.png"
                width="300"
                height="300"
                alt="profile image"
              />
            </div>
            <Liquid />
          </div>
          <div className={styles.infoBox}>
            <div className={styles.emailInfo}>
              <h5>Email:</h5>
              <span>lazar93kg@gmail.com</span>
            </div>
            <div className={styles.emailInfo}>
              <h5>Github:</h5>
              <Link href="https://github.com/lazar93kg?tab=repositories">
                <span>link to profile</span>
              </Link>
            </div>
          </div>
          <div className={styles.btnBox}>
            <Link href="/LazarJevticCV.pdf" className="btn">
              Download CV
            </Link>
            <Link href="#contact" className="btn">
              Hire Me Now!
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.homeImage} id={styles.imgDesk}>
        <div className={styles.imgBox}>
          <Image
            src="/imageCV.png"
            width="300"
            height="300"
            alt="profile image"
          />
        </div>
        <Liquid />
      </div>
    </section>
  );
}

export default HomeSection;
