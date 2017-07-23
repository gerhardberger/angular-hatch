module.exports = config => config.set({
  frameworks: ['jasmine'],

  plugins: [
    require('karma-jasmine'),
    require('karma-chrome-launcher'),
    require('karma-webpack')
  ],

  files: [
    { pattern: '../src/test.ts', watched: false }
  ],
  preprocessors: {
    '../src/test.ts': ['webpack']
  },
  mime: {
    'text/x-typescript': ['ts']
  },
  webpack: require('./webpack.config')({ env: 'test' }),

  logLevel: config.LOG_INFO,
  browsers: ['Chrome'],
  port: 9876,
  colors: true,
  autoWatch: true,
  singleRun: true
});
