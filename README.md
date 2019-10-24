# Reflect provided [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/reflect-provided/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/reflect-provided)

Reflect the provided arguments.

[![NPM Badge](https://nodei.co/npm/reflect-provided.png)](https://npmjs.com/package/reflect-provided)

## Install

```sh
npm install reflect-provided
```

## Usage

```js
const reflectProvided = require("reflect-provided");

reflectProvided("Hello World!");
//=> "Hello World!"

reflectProvided("Hello World!", "A second argument");
//=> ["Hello World!", "A second argument"]
```

## API

### reflectProvided(...args)

#### `spread` args

Type: `any`

The arguments to reflect.
