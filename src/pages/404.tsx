import React, { FC } from "react";
import styles from "./404.module.css";

function NotFound(): FC {
  return (
    <div className={styles.container}>
      <h1>Whoops, this page doesn&apos;t exist</h1>
    </div>
  );
}

export default NotFound;
