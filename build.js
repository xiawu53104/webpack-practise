const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

webpack(webpackConfig, (err, stats) => {
  if (err) throw err;
  
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
    chunks: false,
    chunkModules: false
  }) + '\n\n');

  if (stats.hasErrors()) {
    process.exit(1);
  }
  console.log('打包完成');
})

// let compiler = webpack(webpackConfig);
// new HtmlWebpackPlugin({template: 'index.html'}).apply(compiler);
// compiler.run((err, stats) => {
//   if (err) throw err;
//   console.log('打包完成');
// })
