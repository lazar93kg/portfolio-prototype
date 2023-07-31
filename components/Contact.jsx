"use client";
import React, { useState } from "react";
import styles from "./contact.module.css";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, getFormData] = useState({});
  const [thanks, getThanks] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            getThanks(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.mainText} id="divFlex">
        <span id="titleSpan">ask me a question</span>
        <h2 id="titleH2">Contact Me</h2>
      </div>
      {!thanks ? (
        <form onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={(e) => getFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            onChange={(e) =>
              getFormData({ ...formData, company: e.target.value })
            }
          />
          <input
            type="text"
            name="email"
            required
            placeholder="Email"
            onChange={(e) =>
              getFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone number"
            onChange={(e) =>
              getFormData({ ...formData, phone: e.target.value })
            }
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            onChange={(e) =>
              getFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
          <div className={styles.formBtn}>
            <button type="submit" id="btn">
              Send Message
            </button>
          </div>
        </form>
      ) : (
        <div
          style={{
            textAlign: "center",
            marginTop: "100px",
            width: "100%",
            height: "30vh",
            background: "#250821",
          }}
          id="divFlex"
        >
          <h1>
            Dear <strong style={{ color: "#12f7ff" }}>{formData.name}</strong>!
          </h1>
          <br />
          <h2>Thank you for reaching out to me!</h2>
          <br />
          <h2> Your message has been successfully delivered to my inbox.</h2>
        </div>
      )}
    </section>
  );
}

export default Contact;
