import styles from "./header.module.css";

export const Header: React.FC = () => (
  <header className={styles.container}>
    <h1>AI Financial.</h1>

    <menu className={styles.menu}>
      <li>Home</li>
      <li>Why us</li>
      <li>Features</li>
      <li>Blog</li>
      <li>Support</li>
    </menu>

    <button className="primary">Join our waiting list</button>
  </header>
);
