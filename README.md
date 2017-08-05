#  crossgear

[![Coverage Status](https://coveralls.io/repos/github/rajatsharma305/crossgear/badge.svg?branch=master)](https://coveralls.io/github/rajatsharma305/crossgear?branch=master)
[![Build Status](https://travis-ci.org/rajatsharma305/crossgear.svg?branch=master)](https://travis-ci.org/rajatsharma305/crossgear)

Cross Target Node Module Builder, build node module with `CommonJs`, `UMD` and `es/import` Support

#### Features

Create `es/import`, `UMD` and `CommonJs` modules using ES6+.

#### Usage

- `npm run build` or `yarn build` to Build modules for all three target.

- Find CommonJs Build at **`cjs/index.js`**,
Es Build at **`es/index.js`**, UMD Build at **`dist/crossgear.js`**.

- `npm run release` or `yarn release` to release to npm registry.
