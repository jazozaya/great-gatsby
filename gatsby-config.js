module.exports = {
  plugins: [
            `gatsby-plugin-react-helmet`,
            `gatsby-plugin-sass`,
            {
              resolve: `gatsby-plugin-google-analytics`,
              options: {
                trackingId: 'UA-41924051-3',
              }
            }
          ],
  pathPrefix: '/'
}


// siteMetadata: {
//   title: `Voltera | Build Hardware Faster`,
// },
