var Costume = require('../models/costume');  

// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.costume_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('costumecreate', { title: 'Costume Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 