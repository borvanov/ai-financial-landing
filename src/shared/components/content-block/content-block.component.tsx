import React from "react";
import styles from "@/styles/content-block.module.css";
import Image from "next/image";

interface ContentBlockProps {
  image: {
    width?: number;
    height?: number;
    alt: string;
    src: string;
  };
  header: string;
  description: string;
  buttonTitle?: string;
  onButtonPress?: () => void;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  description,
  header,
  buttonTitle,
  image,
  onButtonPress,
}) => (
  <section className={styles.container}>
    <div>
      <h2>{header}</h2>
      <p>{description}</p>
      {onButtonPress ? (
        <button className="primary">{buttonTitle || "Learn more"}</button>
      ) : null}
    </div>

    <div className={styles.imageContainer}>
      <Image
        src={image.src}
        className={styles.image}
        alt={image.alt}
        width={image.width || 600}
        height={image.height || 400}
      />
    </div>
  </section>
);
