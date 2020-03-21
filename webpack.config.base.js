const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].[hash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    // The core of compilation/transpilation logic
    //
    // Babel takes care of compiling from TypeScript to esx format
    // Please see babel.config.js for more information
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.ejs' })],
};
