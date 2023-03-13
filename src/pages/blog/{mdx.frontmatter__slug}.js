import * as React from "react";
import * as Styles from "./{mdx-frontmatter__slug}.module.css";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/layout";
import ale from "../../images/ale.png";

const BlogPost = ({ data, children }) => {
  console.log('data', JSON.stringify(data));
  if (data.mdx === null) {
    return
  }
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <section className={Styles.blogPost}>
        <GatsbyImage
          className={Styles.imagePost}
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
        <article className={Styles.cardPost}>
          <article className={Styles.frontmatterPost}>
            <h1 className={Styles.titlePost}>{data.mdx.frontmatter.title}</h1>
            <span>
              <p className={Styles.writtenPost}>
                <p>
                  <strong>Por:</strong>
                </p>
                <p className={Styles.authorPost}>
                  <img src={ale} alt="" width="30" />
                  <i>&nbsp;&nbsp;{data.mdx.frontmatter.author}</i>
                </p>
                <p className={Styles.datePost}>
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
                        fill="#F3B6D9"
                      ></path>{" "}
                      <path
                        d="M2 20V10H22V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20Z"
                        fill="#F3B6D9"
                      ></path>{" "}
                    </g>
                  </svg>
                  <i>&nbsp;&nbsp;{data.mdx.frontmatter.date}</i>
                </p>
              </p>
              <p className={Styles.textPost}>
                <MDXProvider>{children}</MDXProvider>
              </p>
            </span>
          </article>
        </article>
        <a target="_blank" href="/blog">
          <button className={Styles.buttonPost} target="_blank">
            <Link className={Styles.buttonLink} to="/blog/">
              🡰
            </Link>
          </button>
        </a>
      </section>
    </Layout>
  );
};

export const data = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }, frontmatter: { key: { eq: "blog" } }) {
      frontmatter {
        author
        date(locale: "es", formatString: "MMM D, YYYY")
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
`;

export default BlogPost;
