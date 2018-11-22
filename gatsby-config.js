const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const query = `{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          path
        }
        excerpt(pruneLength:3000)
      }
    }
  }
}`;

const queries = [
  {
    query,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => {
        obj = {
          objectID: node.id,
          title: node.frontmatter.title,
          path: node.frontmatter.path,
          excerpt: node.excerpt
        };
        return obj;
      })
  }
];

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
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_API_KEY,
    //     indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
    //     queries,
    //     chunkSize: 1000 // default: 1000
    //   }
    // },
    // {
    //   resolve: "gatsby-source-shopify2",
    //   options: {
    //     shopName: "voltera",
    //     accessToken: "b34b3e722fe10915ea813aae8310d8a0",
    //     verbose: true
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "Voltera",
    //     short_name: "Voltera",
    //     start_url: "/",
    //     background_color: `#282828`,
    //     theme_color: `#79ce00`,
    //     display: "minimal-ui",
    //     icon: "src/icon.png" // This path is relative to the root of the site.
    //   }
    // },
    // "gatsby-plugin-offline"
  ],
  pathPrefix: "/"
};
