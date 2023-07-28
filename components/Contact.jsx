import React from "react";
import styles from "./contact.module.css";
function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.mainText} id="divFlex">
        <span id="titleSpan">ask me a question</span>
        <h2 id="titleH2">Contact Me</h2>
      </div>
      <form action="#">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone number" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <div className={styles.formBtn}>
          <button type="submit" id="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
