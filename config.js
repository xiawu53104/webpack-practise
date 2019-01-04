const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // entry: './src/person.js',
  entry: process.env.NODE_ENV === 'development' ? ['webpack-hot-middleware/client.js', './src/index.js'] : './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //   client: 'webpack-hot-middleware/client.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    // publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      }
    ],
    noParse: /jquery/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production'
}