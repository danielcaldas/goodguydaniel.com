import React, { FC } from "react";
import styles from "./Caption.module.css";

type Props = {
  source: string;
  text: string;
  gif: boolean;
};

function Caption({ source = `© ${new Date().getFullYear()} by goodguydaniel.com`, text = "", gif = false }: Props): FC {
  return (
    <div className={gif ? styles.containerGif : styles.container}>
      <span className={styles.sourceText}>source: {source}</span>
      {text && typeof text === "string" ? (
        <p className={styles.captionText}>{text}</p>
      ) : (
        <p className={styles.captionText} dangerouslySetInnerHTML={text} />
      )}
    </div>
  );
}

export default Caption;
