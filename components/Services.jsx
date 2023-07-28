import React from "react";
import style from "./services.module.css";

function Services() {
  return (
    <section className={style.services} id="services">
      <div className={style.mainText}>
        <span id="titleSpan">what i will do for you</span>
        <h2 id="titleH2">My Services</h2>
      </div>
      <div className={style.sectionServices}>
        <div className={style.serviceBox}>
          <div className={style.serviceIcon}>
            <img src="" alt="" />
          </div>
          <h3>Front-End Develop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dignissimos voluptates recusandae eius numquam
            doloremque odio alias, dolorum eum dolor!
          </p>
          <div className={style.btn} id="btn">
            <a href="">Read More</a>
          </div>
        </div>
        <div className={style.serviceBox}>
          <div className={style.serviceIcon}>
            <img src="" alt="" />
          </div>
          <h3>Front-End Develop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dignissimos voluptates recusandae eius numquam
            doloremque odio alias, dolorum eum dolor!
          </p>
          <div className="btn" id="btn">
            <a href="">Read More</a>
          </div>
        </div>
        <div className={style.serviceBox}>
          <div className={style.serviceIcon}>
            <img src="" alt="" width="30px" />
          </div>
          <h3>Front-End Develop</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem dignissimos voluptates recusandae eius numquam
            doloremque odio alias, dolorum eum dolor!
          </p>
          <div className="btn" id="btn">
            <a href="">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
