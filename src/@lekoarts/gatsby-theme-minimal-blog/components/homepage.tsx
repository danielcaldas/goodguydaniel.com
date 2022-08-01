/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import { FC } from "react";
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components";
import { Link } from "gatsby";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import Title from "@lekoarts/gatsby-theme-minimal-blog/src/components/title";
import Listing from "@lekoarts/gatsby-theme-minimal-blog/src/components/listing";
import List from "@lekoarts/gatsby-theme-minimal-blog/src/components/list";
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config";
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes";
// @ts-ignore
import Hero from "@lekoarts/gatsby-theme-minimal-blog/src/texts/hero";
// @ts-ignore
import Bottom from "@lekoarts/gatsby-theme-minimal-blog/src/texts/bottom";

type PostsProps = {
  nodes: {
    slug: string;
    title: string;
    date: string;
    excerpt: string;
    description: string;
    timeToRead?: number;
    tags?: {
      name: string;
      slug: string;
    };
  };
};
type HomePageProps = {
  data: {
    pinned: PostsProps[];
    posts: PostsProps[];
  };
};

const PODCASTS = [
  {
    date: "24.03.2020",
    href: "https://topenddevs.com/podcasts/my-javascript-story/episodes/mjs-142-daniel-caldas",
    text: "Devchat.tv - My JavaScript Story Ep. 142",
    title: "MJS 142: Daniel Caldas",
  },
  {
    date: "10.12.2019",
    href: "https://topenddevs.com/podcasts/javascript-jabber/episodes/jsj-411-unit-testing-jest-with-daniel-caldas",
    text: "JavaScript Jabber Ep. 411: Unit Testing Jest with Daniel Caldas",
    title: "JSJ 411: Unit Testing Jest with Daniel Caldas - DEV",
  },
];

const Podcasts = (): FC => {
  return (
    <section sx={{ mb: [5, 6, 7] }}>
      {PODCASTS.map((podcast) => (
        <Box key={podcast.href} mb={4}>
          <a
            href={podcast.href}
            title={podcast.title}
            target="_blank"
            rel="noreferrer"
            sx={{ fontSize: [1, 2, 3], color: `text` }}
            style={{ textDecoration: "none" }}
          >
            {podcast.text}
          </a>
          <p sx={{ color: `secondary`, mt: 1, a: { color: `secondary` }, fontSize: [1, 1, 2] }}>
            <time>{podcast.date}</time>
          </p>
        </Box>
      ))}
    </section>
  );
};

const Homepage = ({ data: { posts, pinned } }: HomePageProps): FC => {
  const { basePath, blogPath } = useMinimalBlogConfig();
  return (
    <Layout>
      <section sx={{ mb: [5, 6, 7], p: { fontSize: [1, 2, 3], mt: 2 } }}>
        <Hero />
      </section>
      <Title text="Featured Posts" />
      <Listing posts={pinned.nodes} showTags={false} />
      <Title text="Latest Posts">
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>Read all posts</Link>
      </Title>
      <Listing posts={posts.nodes} showTags={false} />
      <Title text="Podcasts" />
      <Podcasts />
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
