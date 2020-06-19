const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const WebpackConfig = require('./webpack.config');
const path = require('path');

process.env.NODE_ENV = 'development';

const serverConfig = {
  compress: true,
  watchContentBase: true,
  hot: true,
  contentBase: path.resolve('./public'),
};

const port = process.env.PORT || 8080;

const compiler = webpack(WebpackConfig);

const devServer = new WebpackDevServer(compiler, serverConfig);

devServer.listen(port);
