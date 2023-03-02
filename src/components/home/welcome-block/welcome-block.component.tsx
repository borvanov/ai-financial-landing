import React from "react";
import Image from "next/image";
import { faComments, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./welcome-block.module.css";

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
          <FontAwesomeIcon className={styles.headerIcon} icon={faVolumeHigh} />
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

        <button className="primary">Join our waiting list</button>
      </div>
    </div>

    <div className={styles.imagesPreviewContent}>
      <div className={styles.imagesOverlay}>
        <Image
          src="/assets/images/screen-1.png"
          alt="Main screen"
          style={{
            objectFit: "contain",
          }}
          width={400}
          height={940}
        />
        <Image
          src="/assets/images/screen-2.png"
          alt="Main screen"
          style={{
            objectFit: "contain",
            marginBottom: 200,
          }}
          width={400}
          height={940}
        />
      </div>
    </div>
  </section>
);
