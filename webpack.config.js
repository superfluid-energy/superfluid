const path = require('path');
const json5 = require('json5');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  target:"web",
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    watchFiles: ['src/**'],
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Superfluid Energy',
     template: "./src/index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images', to: './images' },
      ],
  })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module :{
      rules : [
          {
              test: /\.css$/i,
              use: ['style-loader','css-loader'] 
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },  {
            test: /\.json5$/i,
            type: 'json',
            parser: {
              parse: json5.parse,
            },
          },
         
      ],
  },
};