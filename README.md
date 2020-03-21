# Webpack + Babel + TS + React + Styled Components template

Minimal template for web app development.

## General notes

WebPack + TypeScript + React + Styled Components project template.

To build the project bundle I am using `webpack` with `babel-loader`. For the development server the code is not minified and comes with a source map, for the build the code is minified and there is no source map.

## Building the project from source

This guide assumes you are running the LTS version of `node`, 12.16.x and have `yarn` installed.

### Installing dependencies

Simply run

`$ yarn`

### Running a development server

The solution uses `webpack-dev-server` to run a simple development server with live reloading. To start the server please run

`$ yarn start`

### Building the project

`$ yarn build`

will build the project into the `build/` folder. After a successful build the folder should contain two files - `index.html` and `main.[hash].js`.

The build can be discarded by running

`$ yarn clean`

### Building the container

The project comes with a simple `nginx` server container, to build it run:

`$ docker build -t "<your image tag>" .`

The container exposes port `3000` to the host machine. To run the container forwarding the port to host port e.g. `8081` run:

`$ docker -p 8081:3000 "<your image tag>"`

### Running unit tests

I am using `jest` (with `enzyme` for React components) as a test runner. To run the whole test suite in CI fashion please run:

`$ yarn test`

If you see any errors that are not related to test assertions please make sure you are running node 12.16.

To run in watch mode you can run:

`$ yarn test:watch`