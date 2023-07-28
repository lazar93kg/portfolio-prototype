"use client";
import React from "react";
import style from "./skills.module.css";

function Skills() {
  return (
    <>
      <section className={style.skills}>
        <div className={style.mainText}>
          <span id="titleSpan">technical and professional</span>
          <h2 id="titleH2">My Skills</h2>
        </div>
        <div className={style.skillMain}>
          <div className={style.skillLeft}>
            <h3>Front-End</h3>
            {techSkills &&
              techSkills.map((skill) => (
                <div key={skill.id}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>{skill.technicalSkills}</p>
                    <p>{skill.percentage}</p>
                  </div>
                  <div className={style.skillBar}>
                    <div className={style.bar}>
                      <span className={style.html}></span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className={style.skillMain}>
            <div className={style.skillLeft}>
              <h3>Design</h3>
              {design &&
                design.map((skill) => (
                  <div key={skill.id}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>{skill.technicalSkills}</p>
                      <p>{skill.percentage}</p>
                    </div>
                    <div className={style.skillBar}>
                      <div className={style.bar}>
                        <span className={style.html}></span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <div className={style.skillMain}>
              <div className={style.skillLeft}>
                <h3>Back-End</h3>
                {backend &&
                  backend.map((skill) => (
                    <div key={skill.id}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <p>{skill.technicalSkills}</p>
                        <p>{skill.percentage}</p>
                      </div>
                      <div className={style.skillBar}>
                        <div className={style.bar}>
                          <span className={style.html}></span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
export const techSkills = [
  {
    id: "001",
    technicalSkills: "HTML",
    percentage: "72%",
  },
  {
    id: "002",
    technicalSkills: "JavaScript",
    percentage: "80%",
  },
  {
    id: "003",
    technicalSkills: "TypeScript",
    percentage: "75%",
  },
];
export const design = [
  {
    id: "001",
    technicalSkills: "CSS",
    percentage: "72%",
  },
  {
    id: "002",
    technicalSkills: "Theme-UI",
    percentage: "80%",
  },
  {
    id: "003",
    technicalSkills: "Figma",
    percentage: "75%",
  },
];
export const backend = [
  {
    id: "001",
    technicalSkills: "Node.js",
    percentage: "72%",
  },
  {
    id: "002",
    technicalSkills: "Firebase",
    percentage: "80%",
  },
  {
    id: "003",
    technicalSkills: "CMS Strapi",
    percentage: "75%",
  },
];
{
  /*           <div className={style.professional}>
            {profSkills &&
              profSkills.map((skills) => {
                return (
                  <div className={style.box} key={skills.id}>
                    <div className={style.text}>
                      <div key={skills.id}>
                        <Animation
                          percent={skills.percentValue}
                          keyProp={skills.id}
                        />{" "}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <Animation percent="90" keyProp={"2"} />
          <div>
            <Animation percent="70" />
          </div>
          <Animation percent="90" dots="90" /> */
}
{
  /* <div className={style.professional}>
            <div className={style.box}>
              <Animation percent={percentValue} dots={} />
              <div className={style.text}>
                <big>10%</big>
                <small>Team Work</small>
              </div>
            </div>
          </div> */
}
