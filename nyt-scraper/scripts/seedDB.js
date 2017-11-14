const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
  key: "59c3e7b57c459f246b629c60",
  title: "Review: An Anime New York in Netflix’s ‘Neo Yokio’",
  web_url: "https://www.nytimes.com/2017/09/21/arts/television/netflix-neo-yokio-review-jaden-smith.html",
  snippet: "An affectionate satire of life among the city’s elite is the brainchild of Ezra Koenig, the Vampire Weekend singer and guitarist.",
  pubdate: "2017-09-21T16:24:07+0000",
  date: { type: Date, default: Date.now }
  }
];

db.Articles
  .remove({})
  .then(() => db.Articles.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
