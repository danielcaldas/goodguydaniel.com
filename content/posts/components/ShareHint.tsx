import React, { FC } from "react";
import { Link, Text } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";
import styles from "./ScrollToTopButton.module.css";

type Props = {
  path: string;
  text: string;
};

const TWITTER_HANDLER = "_danielcaldas";

function build(url: string, path: string, text: string): string {
  return `http://twitter.com/share?text=${text}&url=${url}&via=${TWITTER_HANDLER}`;
}

// TODO: migrate to src/@lekoarts/gatsby-theme-minimal-blog/components/post.tsx
function ShareHint({ path, text }: Props): FC {
  const { siteUrl } = useSiteMetadata();

  return (
    <Text>
      If you liked this article, consider sharing (
      <Link href={build(siteUrl, path, text)} rel="noreferrer" target="_blank" title="tweeting">
        <span style={styles.hint}>tweeting</span>
      </Link>
      ) it to your followers.
    </Text>
  );
}

export default ShareHint;
