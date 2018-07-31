# eslint-config-gitbook

[![NPM version](https://badge.fury.io/js/eslint-config-gitbook.svg)](http://badge.fury.io/js/eslint-config-gitbook)
[![Build Status](https://travis-ci.org/GitbookIO/eslint-config-gitbook.svg?branch=master)](https://travis-ci.org/GitbookIO/eslint-config-gitbook)

This package provides GitBook's .eslintrc as an extensible shared config. It is mostly based on [airbnb styleguide](https://github.com/airbnb/javascript) and setup with [prettier](https://github.com/prettier/prettier) to code format with `eslint --fix`.

### Installation

```
npm install eslint-config-gitbook --save-dev
```

With npm 5+, you can now install the package along with its peer dependencies easily:

```
npx install-peerdeps --dev eslint-config-gitbook
```

### Usage

Add to your `.eslintrc`:

```js
{
    "extends": "gitbook"
}
```
