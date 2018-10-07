import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');
const ROOT_PATH = path.resolve(SRC_DIR + '/app.js');
const COMPONENTS_PATH = path.resolve(SRC_DIR + '/components');

module.exports = {
  entry: ROOT_PATH,
  output: {
    path: DIST_DIR,
    filename: '[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: {
                safe: true
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Components: COMPONENTS_PATH
    },
    extensions: ['.jsx', '.js']
  },
  devServer: {
    port: 8000,
    historyApiFallback: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react',
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin('main.css'),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ],
  mode: 'development'
};
