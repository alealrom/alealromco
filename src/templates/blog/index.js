import * as React from "react";
import * as Styles from "../blog/index.module.css";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import CardPost from "../../components/cardPost/cardPost";

const BlogPage = (props) => {
  const data = props.data;

  return (
    <Layout pageTitle={"Blog"}>
      <section className={Styles.blogGrid}>
        {" "}
        {data.allMdx.nodes.map((post) => {
          return <CardPost post={post}></CardPost>;
        })}
      </section>
    </Layout>
  );
};

export default BlogPage;

export const data = graphql`
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
      }
    }
  }
} 
`;