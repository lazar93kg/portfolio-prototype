"use client";
import React, { useState } from "react";
import style from "./portfolio.module.css";
import Image from "next/image";

function Portfolio() {
  const [test, setTest] = useState();
  const portfolioItem = [
    {
      id: "0001",
      img: "/Timmer.png",
      h3: "Interval app",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/github.png",
      value: "full",
    },
    {
      id: "0002",
      img: "/Ticket.png",
      h3: "Ticket app",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/github.png",
      value: "front",
    },
    {
      id: "0003",
      img: "/EcoFigma.png",
      h3: "EcoBeauty Design",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/figma.png",
      value: "ui",
    },
    {
      id: "0004",
      img: "/UX.png",
      h3: "UI and UX",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/5LaKmlnpaaJmy0XbzbEKeS/UX?node-id=28-2&starting-point-node-id=28%3A2",
      icon: "/figma.png",
      value: "ui",
    },
    {
      id: "0005",
      img: "/Wedding.jpg",
      h3: "Wedding photographer",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/github.png",
      value: "full",
    },
    {
      id: "0006",
      img: "/gatsby.png",
      h3: "Prototype WebSite Gatsby",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/github.png",
      value: "one",
    },
    {
      id: "0007",
      img: "/next.png",
      h3: "Prototype WebSite Next and Strapi",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/github.png",
      value: "two",
    },
    {
      id: "0008",
      img: "/imageCV.png",
      h3: "Graphic Design",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi totam fugit dolor magni odio? Vel, fuga adipisci.",
      link: "https://www.figma.com/proto/cInyPnU8of5TBBjehQYq87/Inl%C3%A4mning---Figma?node-id=35-4&starting-point-node-id=35%3A4",
      icon: "/github.png",
      value: "two",
    },
  ];
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
                <Image
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
                  <Image src={item.icon} width="800" height="45" />
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
