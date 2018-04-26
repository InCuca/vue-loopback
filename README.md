# vue-loopback
[![Travis](https://img.shields.io/travis/InCuca/vue-loopback/master.svg)](https://travis-ci.org/InCuca/vue-loopback/branches)

A Vue project template with [Loopback](http://loopback.io/) framework featuring ES6, Gulp, and Mocha for unit tests

> This template is for Vue 2.x **only** with [vue-cli](https://github.com/vuejs/vue-cli).

## Features

* Loopback service using [axios](https://github.com/axios/axios) at `client/services/loopback`;
* Full authentication support, by default the account listed in `server/initial-data/maintenance-account.json` is created;
* Ajax Async queue module in `client/modules/async` (useful to see if and how many requests are being made to the server);
* [CSS Modules](https://github.com/css-modules/css-modules), [Sass](https://sass-lang.com/) and [Bootstrap Vue](https://bootstrap-vue.js.org).
*
## Usage

```
  $ npm install -g vue-cli
  $ vue init InCuca/vue-loopback project-name
  $ npm install
```

## Folder structure

1. `client`: Vue client files
2. `common`: Common client and server model files
3. `server`: Loopback server files
4. `test`: Unit test

## Linting

```
  $ npm run lint
```

## Testing

```
  $ npm test
```

## Running the development server (API and Client)

```
  $ npm run dev
```

## Build to ./build

```
  $ npm run build
```

## Executing built files

```bash
  $ cd build
  $ npm run start
```

You can run only the server with:

```bash
  $ cd build/server
  $ node .
```
