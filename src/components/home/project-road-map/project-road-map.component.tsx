import React from "react";
import styles from "./project-road-map.module.css";

const ROADMAP_POINTS = [
  { date: "April 2023", description: "MVP - beta release" },
  { date: "May 2023", description: "MVP - beta release" },
  { date: "June 2023", description: "MVP - beta release" },
];

export const ProjectRoadMap: React.FC = () => (
  <section className={`${styles.container} content`}>
    <span className="block-subheader">Project roadmap</span>
    <h2 className="block-header">
      We are still not there yet...
      <br />
      But we are close.
    </h2>

    <div className={styles.listWrapper}>
      <div className={styles.roadmapLine} />
      <i className="right" />
      <ul className={styles.list}>
        {ROADMAP_POINTS.map(({ date, description }) => (
          <li key={date}>
            <div className={styles.point} />

            <h3>{date}</h3>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
