import { graphql } from "gatsby";
import HomepageComponent from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage";

export default HomepageComponent;

export const query = graphql`
  query($formatString: String!) {
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
            "/blog/my-two-cents-on-tech-job-interviews/"
            "/blog/tips-jest-unit-testing/"
            "/blog/functional-bits-tips/"
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
