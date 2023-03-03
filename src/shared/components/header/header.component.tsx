import Link from "next/link";
import styles from "./header.module.css";

export const Header: React.FC = () => (
  <header className={styles.container}>
    <h1>
      <Link href="/">AI Financial.</Link>
    </h1>

    <menu className={styles.menu}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Why us</Link>
      </li>
      <li>
        <Link href="/">Features</Link>
      </li>
      <li>
        <Link target="_blank" href="https://t.me/borvanov">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/">Support</Link>
      </li>
    </menu>

    <Link href="/subscribe" className="button primary">
      Join our waiting list
    </Link>
  </header>
);
