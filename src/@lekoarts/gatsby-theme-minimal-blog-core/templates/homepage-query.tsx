import { graphql } from "gatsby";
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";

export default HomepageComponent;

// https://www.gatsbyjs.org/docs/graphql-reference/#filter
export const query = graphql`
  query ($formatString: String!) {
    posts: allPost(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
    pinned: allPost(
      filter: {
        slug: {
          in: [
            "/blog/how-to-simulate-delay-http-request"
            "/blog/reactive-programming-fundamentals"
            "/blog/functional-bits-tips"
          ]
        }
      }
    ) {
      nodes {
        slug
        title
        date(formatString: $formatString)
        excerpt
        timeToRead
        description
        tags {
          name
          slug
        }
      }
    }
  }
`;
