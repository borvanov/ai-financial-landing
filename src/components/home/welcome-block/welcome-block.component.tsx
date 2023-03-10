import React from "react";
import Image from "next/image";
import { faComments, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./welcome-block.module.css";
import Link from "next/link";

export const WelcomeBlock: React.FC = () => (
  <section className={`${styles.welcomeBlock} content`}>
    <div className={styles.descriptionBlock}>
      <h1 className={styles.header}>
        <b>AI Financial</b>
        <br />
        takes your finances
        <br />
        <span>
          from
          <FontAwesomeIcon className={styles.headerIcon} icon={faMicrophone} />
          and
          <FontAwesomeIcon className={styles.headerIcon} icon={faComments} />
        </span>
        to an organized structure.
      </h1>

      <div className={styles.descriptionContent}>
        <p className={styles.description}>
          We bring all the best from AI world to help you track your finances in
          a brand new way.
          <br />
          Chat via messages or voice with your online financial manager and it
          will keep all your spends organized.
        </p>

        <Link href="/subscribe" className="button primary">
          Join our waiting list
        </Link>
      </div>
    </div>

    <div className={styles.imagesPreviewContent}>
      <div className={styles.imageContainer}>
        <Image
          src="/assets/images/screen-2.png"
          alt="Main screen"
          className={styles.image}
          fill
        />
      </div>
    </div>
  </section>
);
