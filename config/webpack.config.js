const path = require('path');
const { ContextReplacementPlugin } = require('webpack')
const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = ({ env } = {}) => ({
  entry: env === 'test'
    ? undefined
    : { main: path.resolve(__dirname, '..', 'src', 'main.ts') },

  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        use: 'raw-loader'
      }
    ]
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src')
    ],
    extensions: ['.ts', '.js', '.html']
  },

  plugins: [
    new CheckerPlugin(),
    new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/)
  ],

  devtool: false
});
