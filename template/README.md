# {{ name }}

{{ description }}

## Folder structure

1. `client`: Vue client files
2. `common`: Common client and server model files
3. `server`: Loopback server files
4. `test`: Unit and E2E test files

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

## Build to ./build

```
  $ npm run build
```

## Executing built files

For client you can use any http server, like [http-server](https://github.com/indexzero/http-server):

```bash
  $ cd build/client
  $ http-server
```

You can run the server with:

```bash
  $ cd build/server
  $ node .
```
