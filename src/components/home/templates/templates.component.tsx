import Image from "next/image";
import React from "react";
import styles from "./templates.module.css";

export const Templates: React.FC = () => (
  <section className={styles.container}>
    <div className={`${styles.contentContainer} content columns`}>
      <div className={`${styles.block} ${styles.images}`}>
        <Image
          className={styles.image}
          fill
          alt="Templates image"
          src="/assets/images/screen-6.png"
        />
      </div>
      <div className={styles.block}>
        <span className="block-subheader">TEMPLATES & SUPPORT</span>
        <h2 className="block-header">
          Several pre-build templates
          <br />
          are already there
          <br />
          to give you an easy start
        </h2>

        <p>
          We have prepared couple of templates to give our users a quick start
          with the assistant. The template is a list of categories that the
          AI-assistant will fill with the corresponding data. You still can
          adjust them. Just tell the chatbot about it.
        </p>

        <ul className={styles.templatesList}>
          <li>
            <span>Personal</span>
          </li>
          <li>
            <span>Family</span>
          </li>
          <li>
            <span>Business</span>
          </li>
        </ul>

        <p>
          If it is not enough for you - do not worry, our support is there for
          you 24/7.
        </p>

        <button className={`${styles.contactButton} primary`}>
          Contact the support
        </button>
      </div>
    </div>
  </section>
);
