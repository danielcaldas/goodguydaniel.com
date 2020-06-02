require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    // Used for the title template on pages other than the index site
    siteTitle: "goodguydaniel.com",
    // Default title of the page
    siteTitleAlt:
      "goodguydaniel.com - Here is where Daniel writes about his experiences.",
    // Can be used for e.g. JSONLD
    siteHeadline: "goodguydaniel.com",
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: "https://www.github.com/danielcaldas",
    // Used for SEO
    siteDescription: "Here is where Daniel writes about his experiences.",
    // Will be set on the <html /> tag
    siteLanguage: "en",
    // Used for og:image and must be placed inside the "static" folder
    siteImage: "/banner.jpg",
    // Twitter Handle
    author: "@_danielcaldas",
  },
  plugins: [
    {
      resolve: "@lekoarts/gatsby-theme-minimal-blog",
      // https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog#theme-options
      options: {
        basePath: "/",
        blogPath: "/blog",
        tagsPath: "/tags",
        postsPath: "content/posts",
        pagesPath: "content/pages",
        mdx: false,
        formatString: "DD.MM.YYYY",
        showLineNumbers: true,
        navigation: [
          {
            title: "Blog",
            slug: "/blog",
          },
          {
            title: "About",
            slug: "/aboutme",
          },
        ],
        externalLinks: [
          {
            name: "Twitter",
            url: "https://twitter.com/_danielcaldas",
          },
          {
            name: "GitHub",
            url: "https://www.github.com/danielcaldas/",
          },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/daniel-caldas/",
          },
          {
            name: "Email",
            url: "mailto:caldasjdaniel@gmail.com",
          },
        ],
        feed: true,
        feedTitle: "goodguydaniel.com",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        experimentId: process.env.GOOGLE_ANALYTICS_ID, // FIXME: remove me
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "goodguydaniel.com - Home and Blog of Daniel Caldas",
        short_name: "goodguydaniel.com",
        description: "Here is where Daniel writes about his experiences.",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#6B46C1",
        display: "standalone",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md", ".markdown"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-autolink-headers",
            options: {
              icon: `<svg style="padding-left:12px;" width="28" height="16" fill="#9f7aea" aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              removeAccents: true,
              isIconAfterHeader: true,
            },
          },
        ],
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -10,
      },
    },
  ],
};
