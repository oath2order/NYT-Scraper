const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  web_url: { type: String, required: true },
  snippet: String,
  pubdate: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;
