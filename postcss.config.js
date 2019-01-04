const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    postcssPresetEnv,
    autoprefixer({
      "browsers": [
        "defaults",
        "not ie < 11",
        "last 100 versions",
        "> 1%",
        "iOS 7",
        "last 3 iOS versions"
      ]
    })
  ]
}
