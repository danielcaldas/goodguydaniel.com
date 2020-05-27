require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: `goodguydaniel.com`,
    // Default title of the page
    siteTitleAlt: `goodguydaniel.com - Here is where Daniel writes about his experiences.`,
    // Can be used for e.g. JSONLD
    siteHeadline: `goodguydaniel.com`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://www.github.com/danielcaldas`,
    // Used for SEO
    siteDescription: `Here is where Daniel writes about his experiences.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@_danielcaldas`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#theme-options
      options: {
        basePath: "/",
        blogPath: "/blog",
        tagsPath: "/tags",
        postsPath: "content/posts",
        pagesPath: "content/pages",
        mdx: true,
        formatString: "DD.MM.YYYY",
        showLineNumbers: true,
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/aboutme`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/_danielcaldas`,
          },
          {
            name: `GitHub`,
            url: `https://www.github.com/danielcaldas/`,
          },
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/daniel-caldas/`,
          },
          {
            name: `Email`,
            url: `mailto:caldasjdaniel@gmail.com`,
          },
        ],
        feed: true,
        feedTitle: "goodguydaniel.com",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        experimentId: process.env.GOOGLE_ANALYTICS_ID, // FIXME: remove me
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `minimal-blog - @lekoarts/gatsby-theme-minimal-blog`,
        short_name: `minimal-blog`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
