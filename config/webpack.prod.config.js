const path = require('path');
const { ContextReplacementPlugin, optimize } = require('webpack')
const BabiliPlugin = require("babili-webpack-plugin");
const { AotPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: { main: path.resolve(__dirname, '..', 'src', 'main.ts') },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.html'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ['@ngtools/webpack']
      },
      { test: /\.html$/, loader: 'raw-loader' }
    ]
  },

  plugins: [
    new ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/),
    new AotPlugin({
      tsConfigPath: 'tsconfig.json',
      entryModule: path.resolve(__dirname, '../src/app/app.module#AppModule')
    }),
    new BabiliPlugin(),
    new optimize.UglifyJsPlugin({
      minimize: true,
      mangle: true,
      beautify: false,
      output: {
        comments: false
      },
      mangle: {
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      }
    })
  ],

  devtool: '#source-map'
};
