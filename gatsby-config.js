const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Voltera | Build Hardware Faster`,
    siteUrl: `https://www.voltera.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/request/thankyou", "/landing/*"]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41924051-3"
      }
    },
    {
      resolve: "gatsby-plugin-intercom-spa",
      options: {
        app_id: "p4hz4ihv"
      }
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1802551463109806"
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 640069,
        sv: 6
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `markdown`),
        name: "markdown-pages"
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Raleway`,
            variants: [`600`]
          },
          {
            family: `Open Sans`,
            variants: ["300", "400", "600"]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Voltera",
        short_name: "Voltera",
        start_url: "/",
        background_color: `#282828`,
        theme_color: `#79ce00`,
        display: "minimal-ui",
        icon: "src/icon.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ],
  pathPrefix: "/"
};
