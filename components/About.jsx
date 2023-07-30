import Link from "next/link";
import styles from "./about.module.css";
import React from "react";
import Image from "next/image";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.imgAbout}>
        <Image
          src="/imageCV2.png"
          width="300"
          height="300"
          alt="second profile image"
        />

        <div className={styles.infoAbout1}>
          <span>2</span>
          <p>
            Years of <br /> Study
          </p>
        </div>
        <div className={styles.infoAbout2}>
          <span>8+</span>
          <p>
            Months of <br /> Internship
          </p>
        </div>
        <div className={styles.infoAbout3}>
          <span>10+</span>
          <p>
            Projects <br /> Complete
          </p>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <span id="titleSpan">Let me introduce myself</span>
        <h2 id="titleH2">About Me</h2>
        <h3>My Journey as a Front-End Developer</h3>
        <p>
          <br />
          My journey as a front-end developer started with a solid foundation,
          having pursued formal education for two years in the field. Throughout
          my academic years, I delved into various programming languages,
          front-end frameworks, and responsive design principles, empowering me
          to create visually stunning and user-friendly websites.
          <br />
          <br />
          Following my academic pursuits, I embarked on an enriching internship
          at Devinova AB that has further enriched my expertise. For more than
          seven months, I've had the incredible opportunity to collaborate with
          talented professionals, working on real-world projects that challenged
          and inspired me. This invaluable experience at Devinova AB has not
          only strengthened my technical abilities but also taught me the value
          of effective teamwork and adaptability in the fast-paced tech
          industry.
        </p>
      </div>
    </section>
  );
}

export default About;
