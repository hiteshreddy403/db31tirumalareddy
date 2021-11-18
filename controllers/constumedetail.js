var Costume = require('../models/costume');  

exports.costume_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Costume.findById( req.query.id) 
        res.render('costumedetail',  
{ title: 'Costume Detail', toshow: result }); 
console.log("*************************************",result._id);
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 