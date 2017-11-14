const router = require("express").Router();
const savedArticles = require("./articles");

router.use("/articles", savedArticles);

module.exports = router;
