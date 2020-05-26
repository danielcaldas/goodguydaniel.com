import React from "react";

import styles from "./Source.module.css";

function Source({ url }) {
  return (
    <div className={styles.container}>
      <span className={styles.text}>source: {url}</span>
    </div>
  );
}

export default Source;
