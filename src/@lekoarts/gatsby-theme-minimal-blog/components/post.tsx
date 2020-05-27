/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React, { useEffect, useMemo } from "react";
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import ItemTags from "@lekoarts/gatsby-theme-minimal-blog/src/components/item-tags";
import SEO from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";
import { DiscussionEmbed } from "disqus-react";

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
const DISQUS_SHORTNAME = process.env.GATSBY_DISQUS_SHORTNAME;

const Post = ({ data: { post } }: PostProps) => {
  const isSSR = typeof window === "undefined";

  return (
    <Layout>
      <SEO
        title={post.title}
        description={post.description ? post.description : post.excerpt}
        image={post.banner ? post.banner.childImageSharp.resize.src : undefined}
        pathname={post.slug}
      />
      <Heading variant="styles.h2">{post.title}</Heading>
      {post.parent.frontmatter.subtitle && (
        <Heading variant="styles.h4">
          {post.parent.frontmatter.subtitle}
        </Heading>
      )}
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
      </section>
      {!isSSR && (
        <>
          <React.Suspense fallback={<div></div>}>
            <DiscussionEmbed
              shortname={DISQUS_SHORTNAME}
              config={{
                url: `${window.location.href}/${post.slug}`,
                identifier: post.slug,
                title: post.title,
              }}
            />
          </React.Suspense>
        </>
      )}
    </Layout>
  );
};

export default Post;
