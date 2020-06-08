import React, { FC } from "react";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import styles from "./404.module.css";

function NotFound(): FC {
  const { siteUrl } = useSiteMetadata();

  return (
    <div className={styles.container}>
      <h1>Whoops!</h1>
      <h2>This page doesn&apos;t exist</h2>
      <a href={siteUrl}>← Go back to goodguydaniel.com</a>
    </div>
  );
}

export default NotFound;
