/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `alealrom_co`,
    url: `https://alealrom.co/`,
    siteUrl: `https://alealrom.co/`,
    author: `Alejandra Álvarez Romero`,
    nickname: `alealrom`,
    description: ``,
    twitterUsername: `@alealrom`,
    blogPostPrefixPath: `/blog`,
    blogPostsPaginatePrefixPath: `/blog/page`,
    image: `src/images/icon.png`,
    social: [
      `github#https://github.com/alealrom`,
      `twitter#https://twitter.com/alealrom`,
      `email#mailto:ale@alealrom.co`,
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Frank Ruhl Libre`, `Poppins`],
        display: "swap",
      },
    }
  ],
};
