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
        name: "minimal-blog - @lekoarts/gatsby-theme-minimal-blog",
        short_name: "minimal-blog",
        description:
          "Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.",
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
              icon: `<svg style="padding-left:12px;" width="36" height="24" fill="#9f7aea" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z"/></svg>`,
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
  ],
};
