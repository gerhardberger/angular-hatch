# angular-hatch

An Angular app for starting point with minimal, but thourough tooling.
It uses **Angular 4** and bundles the app with **webpack 3** with optimizations.
It also supports unit testing with **karma**. The main goal was to achieve fast
compilations for testing and development, and the best optimization for
production builds.

## Install

```
$ git clone https://github.com/gerhardberger/angular-hatch.git
$ cd angular-hatch
$ npm i
```

## Testing

Testing is done with **jasmine** and **karma**. For now, only unit tests are
set up and they are bundled with **webpack**. Watch mode is supported.

```
$ npm t
$ npm run test:watch
```

## Building

**webpack** is used for bundling. Compiling HTML templates is also supported.

### Development

Building for development environment doesn't make any optimization thus
achieving fast compilation. It uses **awesome-typescript-loader** for
compilation. Watch mode and linting is supported.

```
$ npm run build
$ npm run build:watch
$ npm run lint
```

### Production

Building for production aims for efficiency, smallest resulting filesize and
fastest code. The generated bundle is an **Ahead of Time** compiled code,
tree-shaken with the **babili** plugin and minified with **UglifyJS**.

```
npm run build:prod
```
