import Image from "next/image";
import React from "react";
import styles from "./data-collection.module.css";

const sources = [
  {
    name: "Voice messages",
    description:
      "The service is provide with a voice recognition module that transcripts all the voice messages and parses the spends data.",
  },
  {
    name: "Text messages",
    description:
      "All the text messages are being process by Large Language Model built as a service. Users are free to ask the network to re-categorize some of the spends or even stop tracking some of the categories.",
  },
  {
    name: "Receipt scans",
    description:
      "Scan your receipt and send it to the AI-assistant. It will automatically parse the data and add it to the corresponding category.",
  },
  {
    name: "SMS",
    description:
      "A lot of people are using SMS notifications from their Bank accounts. We ask our users to give access to read their SMS to retrieve the necessary data.",
  },
  {
    name: "In v2: Bank account",
    description:
      "It's still not there, but we are actively working on letting our users possibility to connect their bank account to analyze the spends automatically.",
  },
];

export const DataCollection: React.FC = () => (
  <section className={`${styles.container} content columns`}>
    <div className={`${styles.part} ${styles.contentContainer}`}>
      <span className="block-subheader">Data & sources</span>
      <h2 className="block-header">
        Various sources
        <br />
        to collect
        <br />
        the data.
      </h2>

      <ul className={styles.dataList}>
        {sources.map(({ name, description }, index) => (
          <li key={name}>
            <h3>
              <span>{index + 1}/ </span>
              {name}
            </h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.part}>
      <Image
        className={styles.dataImage}
        src="/assets/images/screen-4.png"
        alt="Screen mock"
        width={400}
        height={800}
      />
    </div>
  </section>
);
