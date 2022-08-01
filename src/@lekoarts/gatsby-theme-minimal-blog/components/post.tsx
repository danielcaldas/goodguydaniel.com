/** @jsx jsx */
import { jsx, Heading, Link } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { FC } from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

type PostProps = {
  data: {
    post: {
      slug: string;
      title: string;
      date: string;
      tags?: {
        name: string;
        slug: string;
      }[];
      description?: string;
      canonicalUrl?: string;
      body: string;
      excerpt: string;
      timeToRead?: number;
      banner?: {
        childImageSharp: {
          resize: {
            src: string;
          };
        };
      };
      parent?: {
        frontmatter?: {
          subtitle?: string;
        };
      };
    };
  };
};

const px = [`32px`, `16px`, `8px`, `4px`];
const shadow = px.map((v) => `rgba(0, 0, 0, 0.15) 0px ${v} ${v} 0px`);
const TWITTER_HANDLER = "_danielcaldas";

function renderTwitterShareHint(siteUrl: string, path: string, text: string): string {
  const fullUrl = `${siteUrl}${path}`;
  const url = `https://twitter.com/share?text=${text}&url=${fullUrl}&via=${TWITTER_HANDLER}`;

  return (
    <p
      sx={{
        mt: 3,
        fontSize: [1, 1, 2],
      }}
    >
      If you liked this article, consider sharing (
      <Link href={url} rel="noreferrer" target="_blank" title="tweeting">
        <span style={{ textDecoration: "underline" }}>tweeting</span>
      </Link>
      ) it to your followers.
    </p>
  );
}

const Post = ({ data: { post } }: PostProps): FC => {
  const { siteUrl } = useSiteMetadata();
  const shareHint = renderTwitterShareHint(siteUrl, post.slug, post.title);

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        canonicalUrl={post.canonicalUrl}
        image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
        pathname={post.slug}
      />
      <Heading variant="styles.h2">{post.title}</Heading>
      {post.parent.frontmatter.subtitle && <Heading variant="styles.h4">{post.parent.frontmatter.subtitle}</Heading>}
      <p
        sx={{
          color: `secondary`,
          mt: 3,
          a: { color: `secondary` },
          fontSize: [1, 1, 2],
        }}
      >
        <time>{post.date}</time>
        {post.tags && (
          <React.Fragment>
            {` — `}
            <ItemTags tags={post.tags} />
          </React.Fragment>
        )}
        {post.timeToRead && ` — `}
        {post.timeToRead && <span>{post.timeToRead} min read</span>}
      </p>
      <section
        sx={{
          my: 5,
          ".gatsby-resp-image-wrapper": {
            my: [4, 4, 5],
            boxShadow: shadow.join(`, `),
          },
        }}
      >
        <MDXRenderer>{post.body}</MDXRenderer>
        {shareHint}
      </section>
    </Layout>
  );
};

export default Post;
