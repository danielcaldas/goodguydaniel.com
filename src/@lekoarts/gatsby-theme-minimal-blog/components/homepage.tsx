/* eslint-disable @typescript-eslint/ban-ts-comment */
/** @jsx jsx */
import { FC } from "react";
import { jsx } from "theme-ui";
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
        <Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
          Read all posts
        </Link>
      </Title>
      <Listing posts={posts.nodes} showTags={false} />
      <List>
        <Bottom />
      </List>
    </Layout>
  );
};

export default Homepage;
