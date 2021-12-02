var express = require('express'); 
const costume_controllers= require('../controllers/costume'); 
const detail_controller =  require('../controllers/constumedetail');
const createcostume_controller = require('../controllers/createcostume');
const costumeupdate_controller = require('../controllers/costumeupdate');
var router = express.Router(); 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 
 
 
/* GET costumes */ 
router.get('/', costume_controllers.costume_view_all_Page ); 
module.exports = router; 
// GET request for one costume. 
router.get('/costumes/:id', costume_controllers.costume_detail); 
/* GET detail costume page */ 
router.get('/detail', detail_controller.costume_view_one_Page); 
/* GET create costume page */ 
router.get('/create', secured,createcostume_controller.costume_create_Page);
/* GET create update page */ 
router.get('/update', secured, costumeupdate_controller.costume_update_Page); 
/* GET create costume page */ 
router.get('/delete',secured, costume_controllers.costume_delete_Page);