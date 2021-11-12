var express = require('express');
const costume_controlers = require('../controllers/costume');
var router = express.Router();

// /* GET home page. */
 router.get('/', function (req, res, next) {
     res.render('persis', { title: 'Search Results for persis' });
 });

//router.get('/',costume_controlers.costume_view_all_Page);
//module.exports = router;