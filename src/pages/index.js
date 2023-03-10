import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import Hero from "../components/hero/hero";
import LastestPosts from "../components/lastestPosts/lastestPosts";
import Portfolio from "../components/portfolio/portfolio";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { frontmatter: { date: DESC } }) {
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
            project
            language_one
            language_three
            language_two
            url_live
          }
        }
      }
    }
  `);
  return (
    <main>
      <Layout pageTitle={"Inicio | alealrom.co"}>
        <Hero />
        <LastestPosts post={data.allMdx.nodes[0]} />
        <Portfolio project={data.allMdx.nodes[0]} />
      </Layout>
    </main>
  );
};

export default IndexPage;
