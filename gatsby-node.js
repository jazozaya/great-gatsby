const path = require("path");

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
  });
};
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const docTemplate = path.resolve(`src/templates/docTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: docTemplate,
        context: {
        } // additional data can be passed via context
      });
    });
  });
};
