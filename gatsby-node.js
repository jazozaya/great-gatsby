exports.modifyWebpackConfig = ({ config, stage }) => {

  config.merge({
    resolve: {
      root: ["C:\\Mio\\VolteraSW\\gatsby-site\\src"]
    }
  })
  return config;
};
