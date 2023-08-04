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
          <span>7+</span>
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
          having pursued formal education for two years in the field.
          <br />
          <br />
          During my academic years, I immersed myself in a diverse array of
          programming languages, from the essentials like{" "}
          <strong style={{ fontWeight: "600" }}>
            HTML, CSS, and JavaScript
          </strong>{" "}
          to cutting-edge technologies such as{" "}
          <strong style={{ fontWeight: "600" }}>
            TypeScript, Node, React, MongoDB, Firebase
          </strong>
          , and responsive design principles. This well-rounded education has
          empowered me to craft visually stunning and user-friendly websites
          that leave a lasting impression.
          <br />
          <br />
          Eager to put my knowledge into practice, I embarked on an enriching
          internship at Devinova AB, where I truly honed my skills and evolved
          as a developer. For more than seven months, I've had the incredible
          opportunity to collaborate with talented professionals, working on
          real-world projects that challenged and inspired me.
          <br />
          <br />
          During my time at Devinova AB, we leveraged an exciting tech stack,
          including{" "}
          <strong style={{ fontWeight: "600" }}>
            Gatsby, Next, Theme-UI, Strapi, and GraphQL{" "}
          </strong>
          , skillfully deploying our creations on platforms like{" "}
          <strong style={{ fontWeight: "600" }}>Heroku and Vercel</strong>. This
          invaluable experience not only strengthened my technical abilities but
          also instilled in me the value of effective teamwork and adaptability
          in the fast-paced tech industry.
        </p>
      </div>
    </section>
  );
}

export default About;
