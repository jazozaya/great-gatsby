module.exports = {
  siteMetadata: {
    title: `Voltera | Build Hardware Faster`,
    siteUrl: `https://www.voltera.io`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
    }
  ],
  pathPrefix: "/"
};
