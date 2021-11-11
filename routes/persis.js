var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('persis', { title: 'Search Results for persis' });
});

module.exports = router;