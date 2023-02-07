import * as React from "react";
import * as Styles from "../blog/index.module.css";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import CardProject from "../../components/cardProject/CardProject";

const ProjectPage = (props) => {
  const data = props.data;

  return (
    <Layout pageTitle={"Project"}>
      <section className={Styles.blogGrid}>
        {" "}
        {data.allMdx.nodes.map((project) => {
          return <CardProject project={project}></CardProject>;
        })}
      </section>
    </Layout>
  );
};

export default ProjectPage;

export const data = graphql`
query {
    allMdx(
        limit: 3
        sort: {frontmatter: {date: DESC}}
        filter: {frontmatter: {key: {eq: "project"}}}
      ) {
        nodes {
          id
          internal {
            contentFilePath
          }
          frontmatter {
            project
            language_one
            language_three
            language_two
            url_live
            image_alt
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
`;