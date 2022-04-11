const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const path = require("path")

module.exports = {
  mode: "production",
  entry: {
    common: "./scss/common.scss",
    home: "./scss/home.scss"
  },
  output: {
    path: path.resolve(__dirname, 'css')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader",
          'sass-loader'
          // {
          //   loader: "css-loader",
          //   options: {
          //     importLoaders: 2
          //   }
          // },
        ]
      }
    ],
  },
  plugins: [
    new FixStyleOnlyEntriesPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    })
  ],
  // optimization: {
  //   minimizer: [
  //     // 有时候webpack会默认优化z-index值，设置默认不优化
  //     new OptimizeCSSAssetsPlugin({
  //       cssProcessorOptions: {
  //         safe: true
  //       }
  //     })
  //   ]
  // },
};