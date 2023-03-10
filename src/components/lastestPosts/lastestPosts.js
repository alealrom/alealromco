import * as React from "react";
import * as Styles from "./lastestPosts.module.css";
import { useStaticQuery, graphql } from "gatsby";
import CardPost from "../cardPost/cardPost";

const LastestPosts = ({ post }) => {
  const data = useStaticQuery(graphql`
  query {
    allMdx(
      limit: 2
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {key: {eq: "blog"}}}
    ) {
      nodes {
        id
        internal {
          contentFilePath
        }
        frontmatter {
          author
          date(locale: "es", formatString: "MMM D, YYYY")
          description
          title
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
          slug
        }
      }
    }
  }  
  `);
  return (
    <section>
      <h3 className={Styles.lastestPostsTitle}>Últimos Post</h3>
      <span className={Styles.cardPostBox}>
      {" "}
        {data.allMdx.nodes.map((post) => {
          return <CardPost post={post}></CardPost>
        })}
      </span>
    </section>
  );
};

export default LastestPosts;
