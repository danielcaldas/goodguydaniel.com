import React from "react";
import southPark from './404-south-park.jpg';

import styles from './404.module.css';

function NotFound({ summary, children }) {
  return (
    <div className={styles.container}>
      <h1>Whoops, this page doesn't exist</h1>
      <img
        alt="404 South Park themed"
        src={southPark}
      />
    </div>
  );
}

export default NotFound;
