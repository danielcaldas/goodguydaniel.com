import React, { FC } from "react";
import styles from "./Source.module.css";

type Props = {
  url: string;
};

function Source({ url }: Props): FC {
  return (
    <div className={styles.container}>
      <span className={styles.text}>source: {url}</span>
    </div>
  );
}

export default Source;
