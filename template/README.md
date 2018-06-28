# {{ name }}

{{ description }}

## Folder structure

1. `client`: Vue client files
2. `common`: Common client and server model files
3. `server`: Loopback server files
4. `test`: Unit test

## Installation

```
  $ npm install
```

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

## Debug

```
$ DEBUG=loopback npm run dev
```

[More info...](https://loopback.io/doc/en/lb3/Setting-debug-strings.html)

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
