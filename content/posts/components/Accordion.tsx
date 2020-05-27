import React, { FC } from "react";
import styles from "./Accordion.module.css";

type Props = {
  summary: string;
  children: unknown;
};

function Accordion({ summary, children }: Props): FC {
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
