import Link from "next/link";
import styles from "./about.module.css";
import React from "react";
import Image from "next/image";
/* import img from "../assets/imageCV2.png"; */

function About() {
  return (
    <section className={styles.about} id="about">
      {/*  <div className={styles.aboutFirst}> */}
      <div className={styles.imgAbout}>
        <Image
          src="/imageCV2.png"
          width="300"
          height="300"
          alt="second profile image"
        />

        <div className={styles.infoAbout1}>
          <span>2+</span>
          <p>
            Years of <br /> Expirience
          </p>
        </div>
        <div className={styles.infoAbout2}>
          <span>10+</span>
          <p>
            Projects <br /> Complete
          </p>
        </div>
        <div className={styles.infoAbout3}>
          <span>15+</span>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <span id="titleSpan">Let me introduce myself</span>
        <h2 id="titleH2">About Me</h2>
        <h3>A story of good</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorum
          ab illum architecto corporis ex similique doloribus sunt labore ipsam!
          Inventore quidem doloremque adipisci dolorum neque nesciunt fugit, ut
          nobis.
        </p>
        <div id="btn">
          <Link href="#">Read More</Link>
        </div>
      </div>
    </section>
  );
}

export default About;
