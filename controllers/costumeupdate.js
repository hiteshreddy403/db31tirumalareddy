// Handle building the view for updating a costume. 
// query provides the id 
var Costume = require('../models/costume');  
exports.costume_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Costume.findById(req.query.id) 
        res.render('costumeupdate', { title: 'Costume Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 