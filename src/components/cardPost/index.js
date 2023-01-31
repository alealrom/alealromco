import * as React from "react";
import * as Styles from "./cardPost.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardPost = ({ post }) => {
  return (
    <article key={post.id}>
      <div>
        <GatsbyImage
          image={getImage(post.frontmatter.hero_image)}
          alt={post.frontmatter.hero_image_alt}
        />
        <div>
          <h2>
            <Link to={`/blog/${post.slug}`}>
              {post.frontmatter.title}
            </Link>
          </h2>
          <div>
            <p>{post.frontmatter.date}</p>
            <p>
              <i>&nbsp; |&nbsp;{post.frontmatter.author}</i>
            </p>
          </div>
          <p>
            {post.frontmatter.description}
          </p>
          <div>
            <button target="_blank">
              <Link to={`/blog/${post.slug}`}>
                Leer Más
              </Link>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardPost;
