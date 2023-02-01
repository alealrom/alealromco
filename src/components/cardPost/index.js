import * as React from "react";
import * as Styles from "./cardPost.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardPost = ({ post }) => {
  return (
    <section className={Styles.card__post} key={post.id}>
      <GatsbyImage
        className={Styles.card__image}
        image={getImage(post.frontmatter.hero_image)}
        alt={post.frontmatter.hero_image_alt}
      />
      <article className={Styles.card__body}>
        <h2 className={Styles.card__title}>
          <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
        </h2>
        <div className={Styles.post__details}>
          <p className={Styles.post__detailsDate}>{post.frontmatter.date}</p>
          <p>
            <i>&nbsp; |&nbsp;{post.frontmatter.author}</i>
          </p>
        </div>
        <p>{post.frontmatter.description}</p>
        <a className={Styles.post__boxButton}>
          <button className={Styles.post__button} target="_blank">
            <Link className={Styles.post__link} to={`/blog/${post.slug}`}>
              🡶
            </Link>
          </button>
        </a>
      </article>
    </section>
  );
};

export default CardPost;
