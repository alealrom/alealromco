const path = require("path");
/*const { paginate } = require("gatsby-awesome-pagination");*/

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const prefixBlogPostUrl = "/blog";
  const prefixProjectsUrl = "/projects";

  const blogTemplate = path.resolve("src/templates/blog/index.js");
  const projectsTemplate = path.resolve("src/templates/project/porject.js");

  const result = await getAllPosts(graphql);
  const resultProjects = await getAllProjects(graphql);

  const posts = result.data.allMdx.nodes;
  const projects = resultProjects.data.allMdx.nodes;

  paginate({
    createPage,
    items: posts,
    itemsPerPage: 9,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixBlogPostUrl : `${prefixBlogPostUrl}/page`,
    component: blogTemplate
  })

  paginate({
    createPage,
    items: projects,
    itemsPerPage: 9,
    pathPrefix: ({ pageNumber, numberOfPages }) => pageNumber === 0 ? prefixProjectsUrl : `${prefixProjectsUrl}/page`,
    component: projectsTemplate
  })
}

async function getAllPosts(graphql) {
  return graphql(`
    {
        allMdx(
            limit: 1000
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
  `);
}

async function getAllProjects(graphql) {
  return graphql(`
    {
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
}
