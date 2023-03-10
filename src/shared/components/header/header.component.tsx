import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";

const MenuItems: React.FC = () => (
  <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/faq">FAQ</Link>
    </li>
    <li>
      <Link target="_blank" href="https://t.me/borvanov">
        Blog
      </Link>
    </li>
    <li>
      <Link href="/support">Support</Link>
    </li>
  </>
);

const Menu: React.FC = () => (
  <menu className={styles.menu}>
    <MenuItems />
  </menu>
);

const MobileMenu: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened((value) => !value);
  };

  return (
    <div className={styles.mobileMenuContainer}>
      {opened ? (
        <>
          <menu className={styles.mobileMenu}>
            <MenuItems />
          </menu>
          <FontAwesomeIcon
            icon={faClose}
            className={styles.closeMenuIcon}
            onClick={toggleOpened}
          />
        </>
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          className={styles.openMenuIcon}
          onClick={toggleOpened}
        />
      )}
    </div>
  );
};

export const Header: React.FC = () => (
  <header className={styles.container}>
    <h1>
      <Link href="/">AI Financial.</Link>
    </h1>

    <Menu />
    <MobileMenu />

    <Link href="/subscribe" className={`${styles.subscribe} button primary`}>
      Join our waiting list
    </Link>
  </header>
);
