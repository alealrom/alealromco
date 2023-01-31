import * as React from "react";
import CardPost from "../cardPost";
import {useStaticQuery, graphql } from "gatsby";

const LastestPosts = ({ props, post }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMdx(limit: 2, sort: {tableOfContents: DESC}, filter: {}) {
      nodes {
        id
        internal {
          contentFilePath
        }
        frontmatter {
          author
          date(locale: "es", formatString: "DD MMMM YYYY")
          description
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
  `);
  return (
    <div>
      <h3>Último Post</h3>
      {" "}
        {data.allMdx.nodes.map((post) => {
          return <CardPost post={post}></CardPost>
        })}
      
    </div>
  );
};

export default LastestPosts;
