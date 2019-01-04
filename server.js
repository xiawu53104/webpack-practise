const webpackConfig = require('./config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const compiler = webpack(webpackConfig);
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
app.use(express.static('assets')); // 允许访问assets目录下的静态资源文件

const apiProxy = proxy({
  target: 'http://localhost:8899',
  changeOrigin: true,
  pathRewrite: {
    '^/api': ''
  }
})

app.use('/api', apiProxy);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'
}));

app.use(webpackHotMiddleware(compiler, {
  reload: true
}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(8866, function () {
  console.log('Listening on: http://localhost:8866');
});
