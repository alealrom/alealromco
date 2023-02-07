import * as React from "react";
import * as Styles from "./portfolio.module.css";
import CardProject from "../cardProject/cardProject";
import { useStaticQuery, graphql } from "gatsby";

const Portfolio = ({ project }) => {
  const data = useStaticQuery(graphql`
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
`);
  return (
    <section>
      <h3 className={Styles.portfolio__title}>Proyectos</h3>
      <section className={Styles.portfolio}>
      {" "}
        {data.allMdx.nodes.map((project) => {
          return <CardProject project={project}/>
        })}
      </section>
    </section>
  );
};

export default Portfolio;
