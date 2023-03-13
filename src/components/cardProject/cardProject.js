import * as React from "react";
import * as Styles from "./cardProject.module.css";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const CardProject = ({ project }) => {
  return (
    <section key={project.id} className={Styles.projects}>
      <GatsbyImage
        className={Styles.projectImage}
        image={getImage(project.frontmatter.image)}
        alt={project.frontmatter.image_alt}
      />
      <article className={Styles.projectDetails}>
        <h2>
          <a target="_blank" rel="noreferrer" href={project.frontmatter.url_repo}>
            {project.frontmatter.project}
          </a>
        </h2>
        <li className={Styles.boxLanguages}>
          <span className={Styles.languages}>
            <StaticImage
              src="../../images/circle_yellow.png"
              alt="Logo alealrom"
              placeholder="tracedSVG"
              layout="fixed"
              width={16}
              height={16}
            />
            <p>{project.frontmatter.language_one}</p>
          </span>
          <span className={Styles.languages}>
            <StaticImage
              src="../../images/circle_orange.png"
              alt="Logo alealrom"
              placeholder="tracedSVG"
              layout="fixed"
              width={16}
              height={16}
            />
            <p>{project.frontmatter.language_two}</p>
          </span>
          <span className={Styles.languages}>
            <StaticImage
              src="../../images/circle_purple.png"
              alt="Logo alealrom"
              placeholder="tracedSVG"
              layout="fixed"
              width={16}
              height={16}
            />
            <p>{project.frontmatter.language_three}</p>
          </span>
        </li>
      </article>
    </section>
  );
};

export default CardProject;
