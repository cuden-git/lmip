// Imports: Dependencies
const path = require('path');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require("@babel/register");
// Webpack Configuration
const config = {
  mode: "development",
  devtool: "none",
  watch: true,
  // Entry
  entry: './src/index.js',
  // Output
  output: {
    path: path.resolve(__dirname, '../app/public/wp-content/themes/lmip/js'),
    filename: 'custom.js',
  },
  // Loaders
  module: {
    rules : [
      // JavaScript/JS Files
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader' ,'sass-loader']
        use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
     /* {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },*/
    ]
  },
  // Plugins
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),/**/
  ],
};
// Exports
module.exports = config;