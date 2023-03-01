import styles from "./footer.module.css";

export const Footer: React.FC = () => (
  <footer className={styles.container}>
    <section className={`${styles.contentContainer} content`}>
      <div className={styles.mainInfo}>
        <h1>AI Financial</h1>

        <p className={styles.description}>
          AI Financial is an application that brings the power of AI to provide
          the best experience for everybody who wants to control finances.
          Global LLM is used to categorize all the records and provide the best
          statistics based on it.
        </p>

        <p className={styles.description}>© AI Financial, 2023</p>
      </div>

      <div className={styles.columns}>
        <div className={styles.column}>
          <h3>Project</h3>

          <ul>
            <li>Features</li>
            <li>Our goal</li>
            <li>Waiting list</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Help Center</h3>

          <ul>
            <li>FAQ</li>
            <li>Terms of use</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Support</h3>

          <ul>
            <li>Telegram</li>
            <li>E-mail</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
    </section>
  </footer>
);
