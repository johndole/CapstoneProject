import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";
import fs from "fs";
import getQuote, {
  getRandomQuote,
  getQuoteArrayLength,
  getQuoteByIndex,
} from "enquoraging";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

let toDoList = [];
let dailyQuote = null;
let lastUpdate = new Date(0); // Initialize to a date far in the past

function updateDailyQuote() {
  const currentDate = new Date();
  
  // Check if a new day has started
  if (currentDate.getDate() !== lastUpdate.getDate()) {
    dailyQuote = getRandomQuote();
    lastUpdate = currentDate;
  }
}

app.get("/", (req, res) => {
  updateDailyQuote();
  res.render("index", { dailyQuote, toDoList });
});

app.post("/", (req, res) => {
  const newItem = req.body.newItem;

  if (newItem) {
    toDoList.push(newItem);
    res.redirect("/");
  }
});

// Add a new route to handle item deletion
app.get("/delete/:index", (req, res) => {
  const index = req.params.index;

  if (index >= 0 && index < toDoList.length) {
    toDoList.splice(index, 1);
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});