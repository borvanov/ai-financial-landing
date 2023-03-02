import React from "react";
import styles from "./advantages.module.css";

export const Advantages: React.FC = () => (
  <section className={styles.container}>
    <h2>
      5 simple reasons to start tracking your expenses
      <br />
      with <span>AI Financial</span>
    </h2>

    <div className={styles.dividerLine} />

    <div className={`${styles.advantagesBlock} content`}>
      <span>
        100% data security.
        <br />
        Nothing could be steeled
      </span>
      <span>
        Native communication
        <br />
        with a chat-bot
      </span>
      <span>
        The most relevant
        <br />
        spends suggestions
      </span>
      <span>
        Time-saving interface
        <br />
        and utilities
      </span>
      <span>
        Quick and effective support.
        <br />
        We are online 24/7
      </span>
    </div>
  </section>
);
