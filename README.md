# vue-loopback
[![Travis](https://img.shields.io/travis/InCuca/vue-loopback/master.svg)](https://travis-ci.org/InCuca/vue-loopback/branches)

A Vue project template with [Loopback](http://loopback.io/) framework featuring ES6, Gulp, and Mocha for unit tests

> This template is for Vue 2.x **only** with [vue-cli](https://github.com/vuejs/vue-cli).

## Usage

```
  $ vue-cli init InCuca/vue-loopback project-name`
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
