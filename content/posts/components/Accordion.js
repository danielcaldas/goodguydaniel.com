import React from "react";

import styles from "./Accordion.module.css";

function Accordion({ summary, children }) {
  return (
    <div className={styles.accordion}>
      <details>
        <summary>{summary}</summary>
        {children}
      </details>
    </div>
  );
}

export default Accordion;
