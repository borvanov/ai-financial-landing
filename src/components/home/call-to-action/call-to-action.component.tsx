import Image from "next/image";
import React from "react";
import styles from "./call-to-action.module.css";

export const CallToAction: React.FC = () => (
  <section className={`${styles.container} content`}>
    <div className={`${styles.block} ${styles.contentContainer}`}>
      <h2>
        Take your
        <br />
        financial situation
        <br />
        to the next level!
      </h2>

      <p>
        Subscribe to our newsletter to be the first who get the access to the
        app!
        <br />
        Claim your 30-days free Premium trial as a beta-tester.
      </p>

      <button className="primary">Join our waiting list</button>
    </div>

    <div className={`${styles.block} ${styles.imageContainer}`}>
      <Image
        className={styles.image}
        src="/assets/images/screen-5.png"
        alt="Image"
        fill
      />
    </div>
  </section>
);
