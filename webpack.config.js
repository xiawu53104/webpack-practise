const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // entry: './src/person.js',
  entry: process.env.NODE_ENV === 'development' ? ['webpack-hot-middleware/client.js', './src/index.js'] : './src/index.js',
  // entry: {
  //   app: './src/index.js',
  //   client: 'webpack-hot-middleware/client.js'
  // },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  externals: {
    'vue': 'Vue',
    'vue-router': 'VueRouter'
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: false,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']
      },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
      //   loader: 'file-loader',
      //   options: {
      //     // 将图片打包到了path目录下，并生成原图片名加8位hash值的图片名
      //     name: '[path][name][hash:8].[ext]',
      //     // 将图片打包到该公共目录下
      //     outputPath: 'images/',
      //     // 图片引入资源的共路径，发布线上时很有用
      //     publicPath: '/images'
      //   }
      // },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        options: {
          // name 同flie-loader
          name:'[path][name][hash:8].[ext]',
          // 小于10000字节的转换为DataUrl格式
          limit:1024*50,
          // 是否采用file-loader， 默认采用
          // 还可以用responsive-loader等一些其他loader
          fallback: 'file-loader',
          // 设置要处理的MIME类型，
          mimetype:'image/png'
        }
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
    }),
    // Vue Loader v15 现在需要配合一个 webpack 插件才能正确使用
    new VueLoaderPlugin(),
    new OptimizeCSSPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './assets'),
        to: 'assets',
        ignore: ['*.JPG']
      }
    ])
  ],
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production'
}