import React, { FC } from "react";
import styles from "./Caption.module.css";

type Props = {
  source: string;
  text: string;
  gif: boolean;
};

function Caption({
  source = "&copy; goodguydaniel.com",
  text = "",
  gif = false,
}: Props): FC {
  return (
    <div className={gif ? styles.containerGif : styles.container}>
      <span className={styles.sourceText}>source: {source}</span>
      {text && <br />}
      {text && <span className={styles.captionText}>{text}</span>}
    </div>
  );
}

export default Caption;
