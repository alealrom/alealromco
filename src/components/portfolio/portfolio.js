import * as React from "react";
import * as Styles from "./portfolio.module.css";
import { useStaticQuery, graphql } from "gatsby";
import CardProject from "../cardProject/cardProject";

const Portfolio = ({ project }) => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allMdx(
      limit: 3
      filter: {frontmatter: {key: {eq: "project"}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMM D, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
          image_alt
          language_one
          language_two
          language_three
          project
        }
      }
    }
  }
  `);
  return (
    <section className={Styles.portfolio}>
      <h3 className={Styles.portfolioTitle}>Proyectos</h3>
      <span className={Styles.portfolioGrid}>
      {" "}
        {data.allMdx.nodes.map((project) => {
          return <CardProject project={project}/>
        })}
      </span>
    </section>
  );
};

export default Portfolio;