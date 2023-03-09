import Image from "next/image";
import React from "react";
import styles from "./features.module.css";

export const Features: React.FC = () => (
  <section className={`${styles.container} content columns`}>
    <div className={styles.part}>
      <span className="block-subheader">Features & resources</span>
      <h2 className="block-header">
        Smart
        <br />
        AI-based
        <br />
        Financial helper
        <br />
        Service
      </h2>

      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src="/assets/images/screen-3.png"
          alt="Image"
          fill
        />
      </div>
    </div>

    <div className={styles.part}>
      <p className={styles.productDescription}>
        We found it annoying to waste our time to put a lot of information,
        specifying categories, etc. There is nothing on the market that makes is
        really easy to control finances. We decided to build a product that
        collects all the available data to analyze all the spends of a
        particular user in autonomous way.
      </p>

      <div className={styles.features}>
        <div className={styles.featureContainer}>
          <h3>Fast & simple recording</h3>
          <p>
            We want our users to stop thinking about the plenty of parameters
            the have to fill. Provide the information in any form, as it is
            comfortable for you.
          </p>
        </div>

        <div className={styles.featureContainer}>
          <h3>Fast & simple recording</h3>
          <p>
            We want our users to stop thinking about the plenty of parameters
            the have to fill. Provide the information in any form, as it is
            comfortable for you.
          </p>
        </div>

        <div className={styles.featureContainer}>
          <h3>Fast & simple recording</h3>
          <p>
            We want our users to stop thinking about the plenty of parameters
            the have to fill. Provide the information in any form, as it is
            comfortable for you.
          </p>
        </div>

        <div className={styles.featureContainer}>
          <h3>Fast & simple recording</h3>
          <p>
            We want our users to stop thinking about the plenty of parameters
            the have to fill. Provide the information in any form, as it is
            comfortable for you.
          </p>
        </div>
      </div>
    </div>
  </section>
);
