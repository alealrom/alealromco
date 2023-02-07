import * as React from "react";
import * as Styles from "./cardPost.module.css";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardPost = ({ post }) => {
  return (
    <section key={post.id}>
      <GatsbyImage
        className={Styles.card__image}
        image={getImage(post.frontmatter.hero_image)}
        alt={post.frontmatter.hero_image_alt}
      />
      <article className={Styles.card__box}>
        <div className={Styles.card__frontmatter}>
          <h2 className={Styles.card__title}>
            <Link to={`/blog/${post.slug}`}>{post.frontmatter.title}</Link>
          </h2>
          <div className={Styles.card__details}>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8 0.5C8.82843 0.5 9.5 1.17157 9.5 2V3H14.5V2C14.5 1.17157 15.1716 0.5 16 0.5C16.8284 0.5 17.5 1.17157 17.5 2V3H19C20.6569 3 22 4.34315 22 6V8H2V6C2 4.34315 3.34315 3 5 3H6.5V2C6.5 1.17157 7.17157 0.5 8 0.5Z"
                  fill="#D96191"
                ></path>{" "}
                <path
                  d="M2 20V10H22V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20Z"
                  fill="#D96191"
                ></path>{" "}
              </g>
            </svg>
            <p>
              {post.frontmatter.date}
            </p>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 56 56"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 14.5 C 32.4765 14.5 36.0390 18.4375 36.0390 23.1719 C 36.0390 28.2109 32.4999 32.0547 27.9999 32.0078 C 23.4765 31.9609 19.9609 28.2109 19.9609 23.1719 C 19.9140 18.4375 23.4999 14.5 27.9999 14.5 Z M 42.2499 41.8750 L 42.3202 42.1797 C 38.7109 46.0234 33.3671 48.2266 27.9999 48.2266 C 22.6093 48.2266 17.2655 46.0234 13.6562 42.1797 L 13.7265 41.8750 C 15.7655 39.0625 20.7812 35.9922 27.9999 35.9922 C 35.1952 35.9922 40.2343 39.0625 42.2499 41.8750 Z" fill="#D96191"></path>
              </g>
            </svg>
            <p>
              <i>{post.frontmatter.author}</i>
            </p>
          </div>
          <p>{post.frontmatter.description}</p>
          <a className={Styles.card__boxButton} href={`/blog/${post.slug}`}>
            <button className={Styles.card__button} target="_blank">
              <Link className={Styles.card__link} to={`/blog/${post.slug}`}>
                🡶
              </Link>
            </button>
          </a>
        </div>
      </article>
    </section>
  );
};

export default CardPost;
