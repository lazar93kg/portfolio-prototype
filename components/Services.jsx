import React from "react";
import style from "./services.module.css";
import { UI, frontEnd, fullStack } from "@/data/servicesData";

function Services() {
  const strongCSS = { color: "#d8d8d8", fontSize: "1rem", fontWeight: "bold" };
  const btn = (
    <div className={style.btn} id="btn">
      <a href="#contact">Contact me</a>
    </div>
  );
  return (
    <section className={style.services} id="services">
      <div className={style.mainText}>
        <span id="titleSpan">what i will do for you</span>
        <h2 id="titleH2">My Services</h2>
      </div>
      <div className={style.sectionServices}>
        <div className={style.serviceBox}>
          <div className={style.serviceIcon}>
            <img
              src="/fullStack.png"
              width="50px"
              height="50px"
              alt="Full Stack icon"
            />
          </div>
          {fullStack &&
            fullStack.map((service) => (
              <div key={service.id}>
                <h3>{service.title}</h3>
                <p>
                  <strong style={strongCSS}>{service.sub}</strong>
                  {service.description}
                  <br />
                </p>
              </div>
            ))}
          {btn}
        </div>

        <div className={style.serviceBox}>
          <div className={style.serviceIcon}>
            <img
              src="/frontEnd.png"
              width="50px"
              height="50px"
              alt="Front End icon"
            />
          </div>
          {frontEnd &&
            frontEnd.map((service) => (
              <div key={service.id}>
                <h3>{service.title}</h3>
                <p>
                  <strong style={strongCSS}>{service.sub}</strong>
                  {service.description}
                  <br />
                </p>
              </div>
            ))}
          {btn}
        </div>
        <div className={style.serviceBox}>
          <div className={style.serviceIcon}>
            <img src="/UI.png" alt="UI/UX icon" width="50px" height="50px" />
          </div>
          <div>
            {UI &&
              UI.map((service) => (
                <div key={service.id}>
                  <h3>{service.title}</h3>
                  <p>
                    <strong style={strongCSS}>{service.sub}</strong>
                    {service.description}
                    <br />
                  </p>
                </div>
              ))}
          </div>
          {btn}
        </div>
      </div>
    </section>
  );
}

export default Services;
