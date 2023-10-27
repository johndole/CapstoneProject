import getQuote, { getRandomQuote, getQuoteArrayLength, getQuoteByIndex } from "../lib/index.js";

const { quote, author } = getQuote();
const { quote: quoteWithoutAuthor } = getQuote({ author: false });
const { quote: quoteByIndex, author: authorByIndex } = getQuoteByIndex(10);

console.log(`Here's a quote by "${author}": "${quote}"\n`);

console.log(`This is a random quote "${getRandomQuote()}"\n`);

console.log(`Here is the quote object without the author "${quoteWithoutAuthor}"\n`);

console.log(`How many quotes are there? -> ${getQuoteArrayLength()}\n`);

console.log(`"${quoteByIndex}" \nby "${authorByIndex}"\nThis is the one I want.`);
