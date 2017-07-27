const path = require('path')

exports.modifyWebpackConfig = ({ config, stage }) => {

  config.merge({
    resolve: {
      root: path.resolve('./src')
    }
  })
  console.log(config.resolve())
  return config;
};
