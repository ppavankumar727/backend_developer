const express = require('express'),
router = express.Router(),
books = require("../controllers/articlist")

router.get('/',books.books)

module.exports = router;