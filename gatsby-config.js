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
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Frank Ruhl Libre`],
        display: "swap",
      },
    }
  ],
};
