const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  rules: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
};
