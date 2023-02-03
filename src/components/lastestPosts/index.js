import * as React from "react";
import * as Styles from "./lastestPosts.module.css";
import CardPost from "../cardPost";
import {useStaticQuery, graphql } from "gatsby";

const LastestPosts = ({ props, post }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMdx(limit: 2, sort: {frontmatter: {date: DESC}}, filter: {}) {
      nodes {
        id
        internal {
          contentFilePath
        }
        frontmatter {
          author
          date(locale: "es", formatString: "MMMM DD, YYYY")
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
    <section>
      <h3 className={Styles.lastestPosts__title}>Últimos Post</h3>
      <section className={Styles.cardPost__box}>
      {" "}
        {data.allMdx.nodes.map((post) => {
          return <CardPost className={Styles.background} post={post}></CardPost>
        })}
      </section>
    </section>
  );
};

export default LastestPosts;
