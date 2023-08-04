"use client";
import React, { useState } from "react";
import style from "./portfolio.module.css";
import { portfolioItem } from "@/data/portfolioData";

function Portfolio() {
  const [test, setTest] = useState();

  const data = portfolioItem.filter((item) => {
    if (item.value === test) {
      return item;
    } else if (!test) {
      return item;
    }
  });
  const hadleClick = (e) => {
    if (e.target.value === test) setTest("");
    else setTest(e.target.value);
  };
  return (
    <section id="portfolio" className={style.portfolio}>
      <div className={style.mainText}>
        <span id="titleSpan">What i did so far</span>
        <h2 id="titleH2">Latest Project</h2>
      </div>
      <div className={style.container}>
        <div className={style.fillterButtons}>
          <button className={style.btn} onClick={(e) => hadleClick(e)}>
            All
          </button>
          <button
            className={style.btn}
            value="full"
            onClick={(e) => hadleClick(e)}
          >
            Full-Stack
          </button>
          <button
            className={style.btn}
            value="front"
            onClick={(e) => hadleClick(e)}
          >
            Front-End
          </button>
          <button
            className={style.btn}
            value="ui"
            onClick={(e) => hadleClick(e)}
          >
            UI/UX
          </button>
        </div>
        <div className={style.portfolioGallery}>
          {data.map((item) => (
            <div className={style.portBox} key={item.id}>
              <div className={style.portImage}>
                <img
                  src={item.img}
                  width="300"
                  height="300"
                  alt="profile image"
                />
              </div>
              <div className={style.portContent}>
                <h3>{item.h3}</h3>
                <p>{item.p}</p>
                <a href={item.link}>
                  <img src={item.icon} alt="project img" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
