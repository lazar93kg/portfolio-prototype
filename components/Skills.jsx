"use client";
import React from "react";
import style from "./skills.module.css";
import { backend, library, frontEnd } from "@/data/skillsData";

function Skills() {
  return (
    <section className={style.skills} id="skills">
      <div className={style.mainText}>
        <span id="titleSpan">technical and professional</span>
        <h2 id="titleH2">My Skills</h2>
      </div>
      <div className={style.skillMain}>
        <div className={style.skillLeft}>
          <h3>Front-End</h3>
          {frontEnd &&
            frontEnd.map((skill) => (
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
                    <span
                      className={style.html}
                      style={{ width: `${skill.percentage}` }}
                    ></span>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className={style.skillMain}>
          <div className={style.skillLeft}>
            <h3>Library</h3>
            {library &&
              library.map((skill) => (
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
                      <span
                        className={style.html}
                        style={{ width: `${skill.percentage}` }}
                      ></span>
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
                        <span
                          className={style.html}
                          style={{ width: `${skill.percentage}` }}
                        ></span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
