import React, { FC } from "react";
import styles from "./Caption.module.css";

type Props = {
  source: string;
  text: string;
};

function Caption({ source, text = "" }: Props): FC {
  return (
    <div className={styles.container}>
      <span className={styles.sourceText}>source: {source}</span>
      {text && <br />}
      {text && <span className={styles.captionText}>{text}</span>}
    </div>
  );
}

export default Caption;
