# Enquoraging

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/thanapoom21/enquoraging/pulls) [![npm](https://img.shields.io/npm/dy/inspirational-quotes.svg?logo=npm&color=yellow)](https://www.npmjs.com/package/enquoraging)

**A simple NPM Package which returns motivational quote objects. You can call the function and display it in your website or app.**

This repo is publish as an NPM package [here](https://www.npmjs.com/package/enquoraging).

## Getting Started

You can download it from NPM registry as a package. By the following command:

```
npm install --save enquoraging
```

## Basic Usage

ES module is implemented in this repo for future use. It offers several benefits over CommonJS, including tree shaking, static analysis, and support for asynchronous loading.

Currently, there are 2 methods that you can use to get an object with properties or a string of a random quote.

```js
import getQuote, {
  getRandomQuote,
  getQuoteArrayLength,
  getQuoteByIndex,
} from "enquoraging";

console.log(getQuote());
// returns an object containing `quote` and `author` properties.

console.log(getRandomQuote());
// returns only a random quote without an author.

console.log(getQuoteArrayLength());
// returns the total number of objects.

console.log(getQuoteByIndex(10));
// returns a quote by the given index.
```

The object returned from methods looks like this.

```json
{
  "quote": "Imagination is more important than knowledge.",
  "author": "Albert Einstein"
}
```

<!-- ## Contributing

Contributors are welcome.  -->
