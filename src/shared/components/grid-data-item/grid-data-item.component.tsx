import React from "react";
import styles from "./grid-data-item.module.css";

interface GridDataItemProps {}

export const GridDataItem: React.FC<GridDataItemProps> = () => (
  <div className={styles.container}>
    <h3>Fast & simple recording</h3>
    <p>
      We want our users to stop thinking about the plenty of parameters the have
      to fill. Provide the information in any form, as it is comfortable for
      you.
    </p>
  </div>
);
