/**
 *
 * @author Thanapoom Phithakjarukorn
 */

import { readFile } from "fs/promises";

const quotesData = JSON.parse(
  await readFile(new URL("../data/data.json", import.meta.url))
);

// import { createRequire } from "module"
// const requireJSON = createRequire(import.meta.url)
// const quotesData = requireJSON("../data/data.json")

/**
 * 
 * @param {Object[]} data - an array of quotes
 * @returns a random number used as an index.
 */
const randomQuoteNum = (data) => {
  return Math.floor(Math.random() * data.length);
}

/**
 * return a random quote string.
 */
export function getRandomQuote() {
  let randomIdx = randomQuoteNum(quotesData)
  return quotesData[randomIdx].quote;
}

/**
 * return the total length of quote array.
 */
export function getQuoteArrayLength() {
  return quotesData.length
}

/**
 * return a quote object from a given index.
 */
export function getQuoteByIndex(index) {
  return quotesData[index]
}

/**
 *
 * Set the default author value to true, { author: true }, it returns a whole object.
 *
 */
export default function getQuote(options = { author: true }) {
  let randomIdx = randomQuoteNum(quotesData)
  let resultOption =
    options && options.author ? { author: quotesData[randomIdx].author } : {};

  return {
    quote: quotesData[randomIdx].quote,
    ...resultOption,
  };
}
